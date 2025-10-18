import { useState, useRef, useEffect } from 'react';
import { Product, useCart } from '@/contexts/CartContext';
import { products } from '@/data/products';
import HeroCarousel from '@/components/home/HeroCarousel';
import ProductCategories from '@/components/home/ProductCategories';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import TrendingNow from '@/components/home/TrendingNow';
import BestSelling from '@/components/home/BestSelling';
import ProductGrid from '@/components/products/ProductGrid';
import CategorySidebar from '@/components/layout/CategorySidebar';
import MobileNav from '@/components/layout/MobileNav';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, Clock, MapPin, Zap, Shield, Truck, Award, Star, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThreeDScrollTriggerContainer, ThreeDScrollTriggerRow } from '@/components/ThreeDScrollTrigger';

const SinglePageLayout = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [activeSection, setActiveSection] = useState<'products' | 'about' | 'support'>('products');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const productsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const supportRef = useRef<HTMLDivElement>(null);
  const productGridRef = useRef<HTMLDivElement>(null);

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
    addToCart(product);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubmitted(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSubmitted(false), 3000);
    }
  };

  const scrollToProductGrid = () => {
    if (productGridRef.current) {
      productGridRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
      <nav className="fixed top-16 left-0 right-0 z-30 bg-[#f2f3ae] border-b border-border shadow-md">
        <div className="container mx-auto px-4 flex gap-0 h-14 items-center">
          <button
            onClick={() => scrollToSection('products')}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-all duration-200 relative ${
              activeSection === 'products'
                ? 'text-primary border-primary'
                : 'text-muted-foreground border-transparent hover:text-foreground hover:border-accent/50'
            }`}
          >
            Products
            {activeSection === 'products' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent" />
            )}
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-all duration-200 relative ${
              activeSection === 'about'
                ? 'text-primary border-primary'
                : 'text-muted-foreground border-transparent hover:text-foreground hover:border-accent/50'
            }`}
          >
            About
            {activeSection === 'about' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent" />
            )}
          </button>
          <button
            onClick={() => scrollToSection('support')}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-all duration-200 relative ${
              activeSection === 'support'
                ? 'text-primary border-primary'
                : 'text-muted-foreground border-transparent hover:text-foreground hover:border-accent/50'
            }`}
          >
            Support
            {activeSection === 'support' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent" />
            )}
          </button>
        </div>
      </nav>

      <CategorySidebar
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <main className="container mx-auto px-4 pt-32 pb-20 space-y-12">
        {/* Products Section */}
        <section ref={productsRef} className="scroll-mt-32 animate-in fade-in duration-500">
          <div className="space-y-8">
            <HeroCarousel />

            {/* Product Categories */}
            <ProductCategories
              onSelectCategory={setSelectedCategory}
              onNavigateToProducts={scrollToProductGrid}
            />

            {/* Featured Products */}
            <FeaturedProducts
              onAddToCart={handleAddToCart}
            />

            {/* Trending Now Section */}
            <TrendingNow
              onAddToCart={handleAddToCart}
            />

            {/* Best Selling Section */}
            <BestSelling
              onAddToCart={handleAddToCart}
            />

            {/* Product Grid */}
            <div ref={productGridRef} className="scroll-mt-8">
              <h2 className="text-2xl font-semibold text-foreground mb-6 pb-3 border-b-2 border-accent/30 inline-block transition-all duration-300 hover:border-accent">
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
        <section ref={aboutRef} className="scroll-mt-32 animate-in fade-in duration-500">
          <div className="space-y-8">
            <h1 className="text-3xl font-semibold text-foreground pb-3 border-b-2 border-accent/30 inline-block transition-all duration-300 hover:border-accent">About Us</h1>

            <Card className="border-border shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px] group">
              <CardHeader className="border-b border-border bg-gradient-to-r from-primary/5 to-accent/5 group-hover:from-primary/10 group-hover:to-accent/10 transition-colors duration-300">
                <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <Award className="h-5 w-5 text-accent" />
                  Welcome to VapeShop
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground pt-6">
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

            <Card className="border-border shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px] group">
              <CardHeader className="border-b border-border bg-gradient-to-r from-primary/5 to-accent/5 group-hover:from-primary/10 group-hover:to-accent/10 transition-colors duration-300">
                <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <Star className="h-5 w-5 text-accent" />
                  Why Choose Us?
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start">
                    <span className="text-muted-foreground mr-3 mt-0.5">•</span>
                    <span>Extensive range of products from leading brands</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-muted-foreground mr-3 mt-0.5">•</span>
                    <span>Competitive prices and regular special offers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-muted-foreground mr-3 mt-0.5">•</span>
                    <span>Fast and reliable delivery service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-muted-foreground mr-3 mt-0.5">•</span>
                    <span>Expert customer support team</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-muted-foreground mr-3 mt-0.5">•</span>
                    <span>Commitment to quality and customer satisfaction</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px] group">
              <CardHeader className="border-b border-border bg-gradient-to-r from-primary/5 to-accent/5 group-hover:from-primary/10 group-hover:to-accent/10 transition-colors duration-300">
                <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <Shield className="h-5 w-5 text-accent" />
                  Our Values
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground pt-6">
                <p>
                  <strong className="text-foreground">Quality:</strong> We only stock products
                  that meet our high standards for quality and safety.
                </p>
                <p>
                  <strong className="text-foreground">Customer Service:</strong> Your satisfaction
                  is our priority. We're here to help with any questions or concerns.
                </p>
                <p>
                  <strong className="text-foreground">Responsibility:</strong> We promote
                  responsible vaping and comply with all relevant regulations.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features Section */}
        <section className="scroll-mt-32 animate-in fade-in duration-500">
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-foreground pb-3 border-b-2 border-accent/30 inline-block transition-all duration-300 hover:border-accent">Why Our Customers Love Us</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-border shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] group">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 group-hover:bg-primary/20 rounded-lg transition-all duration-300 group-hover:scale-110">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-200">Fast Delivery</h3>
                  <p className="text-sm text-muted-foreground">Quick and reliable shipping to your doorstep within 2-3 business days</p>
                </CardContent>
              </Card>

              <Card className="border-border shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] group">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 group-hover:bg-primary/20 rounded-lg transition-all duration-300 group-hover:scale-110">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-200">100% Authentic</h3>
                  <p className="text-sm text-muted-foreground">All products sourced directly from authorized distributors and manufacturers</p>
                </CardContent>
              </Card>

              <Card className="border-border shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] group">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 group-hover:bg-primary/20 rounded-lg transition-all duration-300 group-hover:scale-110">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-200">Expert Support</h3>
                  <p className="text-sm text-muted-foreground">Knowledgeable team ready to help with product recommendations and advice</p>
                </CardContent>
              </Card>

              <Card className="border-border shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] group">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 group-hover:bg-primary/20 rounded-lg transition-all duration-300 group-hover:scale-110">
                      <Truck className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-200">Best Prices</h3>
                  <p className="text-sm text-muted-foreground">Competitive pricing with regular promotions and exclusive member discounts</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="scroll-mt-32 animate-in fade-in duration-500">
          <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/10 rounded-lg p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-200">50K+</div>
                <p className="text-foreground font-medium">Happy Customers</p>
                <p className="text-sm text-muted-foreground mt-1">Trusted by vapers across the UK</p>
              </div>
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-200">10K+</div>
                <p className="text-foreground font-medium">Products in Stock</p>
                <p className="text-sm text-muted-foreground mt-1">Extensive selection of quality items</p>
              </div>
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-200">4.8★</div>
                <p className="text-foreground font-medium">Average Rating</p>
                <p className="text-sm text-muted-foreground mt-1">Based on customer reviews</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="scroll-mt-32 animate-in fade-in duration-500">
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-foreground pb-3 border-b-2 border-accent/30 inline-block transition-all duration-300 hover:border-accent">What Our Customers Say</h2>

            <ThreeDScrollTriggerContainer>
              <ThreeDScrollTriggerRow baseVelocity={2} direction={1}>
                <div className="flex w-max">
                  <Card className="border-border shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] group min-w-[350px] mr-8">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-accent text-accent transition-all duration-300 group-hover:scale-110" style={{ transitionDelay: `${i * 50}ms` }} />
                        ))}
                      </div>
                      <p className="text-foreground mb-4 italic">"Excellent selection and fast delivery. The quality of products is outstanding. Highly recommended!"</p>
                      <p className="font-semibold text-foreground">Sarah M.</p>
                      <p className="text-sm text-muted-foreground">Verified Customer</p>
                    </CardContent>
                  </Card>

                  <Card className="border-border shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] group min-w-[350px] mr-8">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-accent text-accent transition-all duration-300 group-hover:scale-110" style={{ transitionDelay: `${i * 50}ms` }} />
                        ))}
                      </div>
                      <p className="text-foreground mb-4 italic">"Great customer service and competitive prices. I've been a loyal customer for over a year now."</p>
                      <p className="font-semibold text-foreground">James T.</p>
                      <p className="text-sm text-muted-foreground">Verified Customer</p>
                    </CardContent>
                  </Card>

                  <Card className="border-border shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] group min-w-[350px] mr-8">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-accent text-accent transition-all duration-300 group-hover:scale-110" style={{ transitionDelay: `${i * 50}ms` }} />
                        ))}
                      </div>
                      <p className="text-foreground mb-4 italic">"Best vape shop online. Always authentic products and the team is super helpful with recommendations."</p>
                      <p className="font-semibold text-foreground">Emma L.</p>
                      <p className="text-sm text-muted-foreground">Verified Customer</p>
                    </CardContent>
                  </Card>
                </div>
              </ThreeDScrollTriggerRow>
            </ThreeDScrollTriggerContainer>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="scroll-mt-32 animate-in fade-in duration-500">
          <Card className="border-border shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-accent overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardContent className="p-8 md:p-12 relative">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-semibold text-primary-foreground mb-3">Stay Updated</h2>
                <p className="text-primary-foreground/80 mb-6">Subscribe to our newsletter for exclusive deals, new product launches, and vaping tips delivered to your inbox.</p>

                {newsletterSubmitted ? (
                  <div className="flex items-center justify-center gap-2 bg-primary/20 text-primary-foreground px-4 py-3 rounded-lg animate-in fade-in slide-in-from-bottom-2 duration-300">
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
                      className="flex-1 px-4 py-3 rounded-lg text-foreground placeholder-muted-foreground outline-none focus:ring-2 focus:ring-primary-foreground transition-all duration-200"
                      required
                    />
                    <Button
                      type="submit"
                      className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2 whitespace-nowrap transition-all duration-200 hover:shadow-lg"
                    >
                      <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                      Subscribe
                    </Button>
                  </form>
                )}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Support Section */}
        <section ref={supportRef} className="scroll-mt-32 animate-in fade-in duration-500">
          <div className="space-y-8">
            <h1 className="text-3xl font-semibold text-foreground pb-3 border-b-2 border-accent/30 inline-block transition-all duration-300 hover:border-accent">Customer Support</h1>

            <Card className="border-border shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px] group">
              <CardHeader className="border-b border-border bg-gradient-to-r from-primary/5 to-accent/5 group-hover:from-primary/10 group-hover:to-accent/10 transition-colors duration-300">
                <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <Mail className="h-5 w-5 text-accent" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground pt-6">
                <p>
                  Our customer support team is here to help you with any questions or concerns.
                  Feel free to reach out to us through any of the following channels:
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-border shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 group-hover:bg-primary/20 rounded transition-all duration-300 group-hover:scale-110">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-accent transition-colors duration-200">Email Us</h3>
                      <p className="text-sm text-muted-foreground">support@vapeshop.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 group-hover:bg-primary/20 rounded transition-all duration-300 group-hover:scale-110">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-accent transition-colors duration-200">Call Us</h3>
                      <p className="text-sm text-muted-foreground">+44 20 1234 5678</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 group-hover:bg-primary/20 rounded transition-all duration-300 group-hover:scale-110">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-accent transition-colors duration-200">Business Hours</h3>
                      <p className="text-sm text-muted-foreground">Mon-Fri: 9AM - 6PM</p>
                      <p className="text-sm text-muted-foreground">Sat-Sun: 10AM - 4PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 group-hover:bg-primary/20 rounded transition-all duration-300 group-hover:scale-110">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-accent transition-colors duration-200">Visit Us</h3>
                      <p className="text-sm text-muted-foreground">123 High Street</p>
                      <p className="text-sm text-muted-foreground">London, UK</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-border shadow-sm">
              <CardHeader className="border-b border-border">
                <CardTitle className="text-lg font-semibold text-foreground">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    How long does delivery take?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Standard delivery takes 2-3 business days. Express delivery options are
                    available at checkout.
                  </p>
                </div>
                <div className="border-t border-border pt-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    What is your return policy?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We offer a 14-day return policy for unopened products in their original
                    packaging. Please contact our support team to initiate a return.
                  </p>
                </div>
                <div className="border-t border-border pt-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    Do you offer warranty on products?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, all devices come with a manufacturer's warranty. Duration varies by
                    product - please check individual product descriptions.
                  </p>
                </div>
                <div className="border-t border-border pt-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    Are your products genuine?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Absolutely. We only source products directly from authorized distributors and
                    manufacturers to guarantee authenticity.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <MobileNav activeSection={activeSection} onSectionChange={scrollToSection} />
    </>
  );
};

export default SinglePageLayout;

