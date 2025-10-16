import { useState, useRef } from 'react';
import { Product, useCart } from '@/contexts/CartContext';
import { products } from '@/data/products';
import HeroCarousel from '@/components/home/HeroCarousel';
import ProductGrid from '@/components/products/ProductGrid';
import CartModal from '@/components/cart/CartModal';
import CategorySidebar from '@/components/layout/CategorySidebar';
import MobileNav from '@/components/layout/MobileNav';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SinglePageLayout = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeSection, setActiveSection] = useState<'products' | 'about' | 'support'>('products');

  const productsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const supportRef = useRef<HTMLDivElement>(null);

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

