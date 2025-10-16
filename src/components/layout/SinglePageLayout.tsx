import { useState, useRef, useEffect } from 'react';
import { Product, useCart } from '@/contexts/CartContext';
import { products } from '@/data/products';
import HeroCarousel from '@/components/home/HeroCarousel';
import ProductGrid from '@/components/products/ProductGrid';
import CartModal from '@/components/cart/CartModal';
import CategorySidebar from '@/components/layout/CategorySidebar';
import MobileNav from '@/components/layout/MobileNav';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, Clock, MapPin, Zap, Shield, Truck, Award, Star, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SinglePageLayout = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeSection, setActiveSection] = useState<'products' | 'about' | 'support'>('products');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const productsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const supportRef = useRef<HTMLDivElement>(null);

  // Scroll detection to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: productsRef, name: 'products' as const },
        { ref: aboutRef, name: 'about' as const },
        { ref: supportRef, name: 'support' as const },
      ];

      // Find which section is currently in view
      for (const section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          // If section is in the upper half of the viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
            setActiveSection(section.name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProducts =
    selectedCategory === 'All Products'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handleAddToCart = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleConfirmAdd = (quantity: number) => {
    if (selectedProduct) {
      for (let i = 0; i < quantity; i++) {
        addToCart(selectedProduct);
      }
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubmitted(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSubmitted(false), 3000);
    }
  };

  const scrollToSection = (section: 'products' | 'about' | 'support') => {
    setActiveSection(section);
    const ref = section === 'products' ? productsRef : section === 'about' ? aboutRef : supportRef;
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Navigation Tabs */}
      <nav className="fixed top-16 left-0 right-0 z-30 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 flex gap-0 h-14 items-center">
          <button
            onClick={() => scrollToSection('products')}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeSection === 'products'
                ? 'text-blue-700 border-blue-700'
                : 'text-gray-600 border-transparent hover:text-gray-900'
            }`}
          >
            Products
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeSection === 'about'
                ? 'text-blue-700 border-blue-700'
                : 'text-gray-600 border-transparent hover:text-gray-900'
            }`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('support')}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeSection === 'support'
                ? 'text-blue-700 border-blue-700'
                : 'text-gray-600 border-transparent hover:text-gray-900'
            }`}
          >
            Support
          </button>
        </div>
      </nav>

      <CategorySidebar
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <main className="container mx-auto px-4 pt-32 pb-20 space-y-12">
        {/* Products Section */}
        <section ref={productsRef} className="scroll-mt-32">
          <div className="space-y-8">
            <HeroCarousel />
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                {selectedCategory}
              </h2>
              <ProductGrid
                products={filteredProducts}
                onAddToCart={handleAddToCart}
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section ref={aboutRef} className="scroll-mt-32">
          <div className="space-y-8">
            <h1 className="text-3xl font-semibold text-gray-900">About Us</h1>

            <Card className="border-gray-200 shadow-sm">
              <CardHeader className="border-b border-gray-100">
                <CardTitle className="text-lg font-semibold text-gray-900">Welcome to VapeShop</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 pt-6">
                <p>
                  We are your trusted destination for premium vaping products. With years of
                  experience in the industry, we pride ourselves on offering high-quality devices,
                  e-liquids, and accessories to satisfy every vaper's needs.
                </p>
                <p>
                  Our mission is to provide excellent customer service and a carefully curated
                  selection of products from the most reputable brands in the market.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 shadow-sm">
              <CardHeader className="border-b border-gray-100">
                <CardTitle className="text-lg font-semibold text-gray-900">Why Choose Us?</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3 mt-0.5">•</span>
                    <span>Extensive range of products from leading brands</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3 mt-0.5">•</span>
                    <span>Competitive prices and regular special offers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3 mt-0.5">•</span>
                    <span>Fast and reliable delivery service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3 mt-0.5">•</span>
                    <span>Expert customer support team</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3 mt-0.5">•</span>
                    <span>Commitment to quality and customer satisfaction</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200 shadow-sm">
              <CardHeader className="border-b border-gray-100">
                <CardTitle className="text-lg font-semibold text-gray-900">Our Values</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 pt-6">
                <p>
                  <strong className="text-gray-900">Quality:</strong> We only stock products
                  that meet our high standards for quality and safety.
                </p>
                <p>
                  <strong className="text-gray-900">Customer Service:</strong> Your satisfaction
                  is our priority. We're here to help with any questions or concerns.
                </p>
                <p>
                  <strong className="text-gray-900">Responsibility:</strong> We promote
                  responsible vaping and comply with all relevant regulations.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features Section */}
        <section className="scroll-mt-32">
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-gray-900">Why Our Customers Love Us</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Zap className="h-6 w-6 text-blue-700" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Fast Delivery</h3>
                  <p className="text-sm text-gray-600">Quick and reliable shipping to your doorstep within 2-3 business days</p>
                </CardContent>
              </Card>

              <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <Shield className="h-6 w-6 text-green-700" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">100% Authentic</h3>
                  <p className="text-sm text-gray-600">All products sourced directly from authorized distributors and manufacturers</p>
                </CardContent>
              </Card>

              <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <Award className="h-6 w-6 text-purple-700" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Expert Support</h3>
                  <p className="text-sm text-gray-600">Knowledgeable team ready to help with product recommendations and advice</p>
                </CardContent>
              </Card>

              <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-orange-100 rounded-lg">
                      <Truck className="h-6 w-6 text-orange-700" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Best Prices</h3>
                  <p className="text-sm text-gray-600">Competitive pricing with regular promotions and exclusive member discounts</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="scroll-mt-32">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-700 mb-2">50K+</div>
                <p className="text-gray-700 font-medium">Happy Customers</p>
                <p className="text-sm text-gray-600 mt-1">Trusted by vapers across the UK</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-700 mb-2">10K+</div>
                <p className="text-gray-700 font-medium">Products in Stock</p>
                <p className="text-sm text-gray-600 mt-1">Extensive selection of quality items</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-700 mb-2">4.8★</div>
                <p className="text-gray-700 font-medium">Average Rating</p>
                <p className="text-sm text-gray-600 mt-1">Based on customer reviews</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="scroll-mt-32">
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-gray-900">What Our Customers Say</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"Excellent selection and fast delivery. The quality of products is outstanding. Highly recommended!"</p>
                  <p className="font-semibold text-gray-900">Sarah M.</p>
                  <p className="text-sm text-gray-600">Verified Customer</p>
                </CardContent>
              </Card>

              <Card className="border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"Great customer service and competitive prices. I've been a loyal customer for over a year now."</p>
                  <p className="font-semibold text-gray-900">James T.</p>
                  <p className="text-sm text-gray-600">Verified Customer</p>
                </CardContent>
              </Card>

              <Card className="border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"Best vape shop online. Always authentic products and the team is super helpful with recommendations."</p>
                  <p className="font-semibold text-gray-900">Emma L.</p>
                  <p className="text-sm text-gray-600">Verified Customer</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="scroll-mt-32">
          <Card className="border-gray-200 shadow-sm bg-gradient-to-r from-blue-900 to-blue-800">
            <CardContent className="p-8 md:p-12">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">Stay Updated</h2>
                <p className="text-blue-100 mb-6">Subscribe to our newsletter for exclusive deals, new product launches, and vaping tips delivered to your inbox.</p>

                {newsletterSubmitted ? (
                  <div className="flex items-center justify-center gap-2 bg-green-100 text-green-800 px-4 py-3 rounded-lg">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">Thanks for subscribing!</span>
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-yellow-400"
                      required
                    />
                    <Button
                      type="submit"
                      className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2 whitespace-nowrap"
                    >
                      <Send className="h-4 w-4" />
                      Subscribe
                    </Button>
                  </form>
                )}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Support Section */}
        <section ref={supportRef} className="scroll-mt-32">
          <div className="space-y-8">
            <h1 className="text-3xl font-semibold text-gray-900">Customer Support</h1>

            <Card className="border-gray-200 shadow-sm">
              <CardHeader className="border-b border-gray-100">
                <CardTitle className="text-lg font-semibold text-gray-900">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 pt-6">
                <p>
                  Our customer support team is here to help you with any questions or concerns.
                  Feel free to reach out to us through any of the following channels:
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-gray-100 rounded">
                      <Mail className="h-5 w-5 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                      <p className="text-sm text-gray-600">support@vapeshop.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-gray-100 rounded">
                      <Phone className="h-5 w-5 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                      <p className="text-sm text-gray-600">+44 20 1234 5678</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-gray-100 rounded">
                      <Clock className="h-5 w-5 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-sm text-gray-600">Mon-Fri: 9AM - 6PM</p>
                      <p className="text-sm text-gray-600">Sat-Sun: 10AM - 4PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-gray-100 rounded">
                      <MapPin className="h-5 w-5 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
                      <p className="text-sm text-gray-600">123 High Street</p>
                      <p className="text-sm text-gray-600">London, UK</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-gray-200 shadow-sm">
              <CardHeader className="border-b border-gray-100">
                <CardTitle className="text-lg font-semibold text-gray-900">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    How long does delivery take?
                  </h3>
                  <p className="text-sm text-gray-600">
                    Standard delivery takes 2-3 business days. Express delivery options are
                    available at checkout.
                  </p>
                </div>
                <div className="border-t border-gray-100 pt-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    What is your return policy?
                  </h3>
                  <p className="text-sm text-gray-600">
                    We offer a 14-day return policy for unopened products in their original
                    packaging. Please contact our support team to initiate a return.
                  </p>
                </div>
                <div className="border-t border-gray-100 pt-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Do you offer warranty on products?
                  </h3>
                  <p className="text-sm text-gray-600">
                    Yes, all devices come with a manufacturer's warranty. Duration varies by
                    product - please check individual product descriptions.
                  </p>
                </div>
                <div className="border-t border-gray-100 pt-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Are your products genuine?
                  </h3>
                  <p className="text-sm text-gray-600">
                    Absolutely. We only source products directly from authorized distributors and
                    manufacturers to guarantee authenticity.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <CartModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onConfirm={handleConfirmAdd}
      />

      <MobileNav activeSection={activeSection} onSectionChange={scrollToSection} />
    </>
  );
};

export default SinglePageLayout;

