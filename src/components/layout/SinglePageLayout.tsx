import { useState, useRef, useEffect } from 'react';
import { Product, useCart } from '@/contexts/CartContext';
import { useBanner } from '@/contexts/BannerContext';
import { products } from '@/data/products';
import HeroCarousel from '@/components/home/HeroCarousel';
import ProductCategories from '@/components/home/ProductCategories';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import TrendingNow from '@/components/home/TrendingNow';
import BestSelling from '@/components/home/BestSelling';
import OurLocation from '@/components/home/OurLocation';
import ProductGrid from '@/components/products/ProductGrid';
import SubcategoryGrid from '@/components/products/SubcategoryGrid';
import CategorySidebar from '@/components/layout/CategorySidebar';
import MobileNav from '@/components/layout/MobileNav';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, Clock, MapPin, Zap, Shield, Truck, Award, Star, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThreeDScrollTriggerContainer, ThreeDScrollTriggerRow } from '@/components/ThreeDScrollTrigger';
import PromotionalBanner from '../home/PromotionalBanner';

interface CategoryStructure {
  name: string;
  subcategories: string[];
}

// Define the category structure to match the sidebar
const categoryStructure: CategoryStructure[] = [
  {
    name: 'All Products',
    subcategories: []
  },
  {
    name: 'Disposable Vapes',
    subcategories: [
      'Fruit Flavors',
      'Menthol',
      'Tobacco',
      'Dessert',
      '500-1000 Puffs',
      '1500+ Puffs'
    ]
  },
  {
    name: 'Pod Systems',
    subcategories: [
      'SMOK Nord',
      'Vaporesso XROS',
      'Voopoo Drag',
      'Lost Vape Orion',
      'GeekVape'
    ]
  },
  {
    name: 'E-liquids',
    subcategories: [
      'Nicotine Salt',
      'Freebase',
      'Shortfill',
      'Nicotine Free',
      '10 mg',
      '30 mg',
      '50 mg'
    ]
  },
  {
    name: 'Accessories',
    subcategories: [
      'Coils',
      'Replacement Parts',
      'Batteries',
      'Chargers',
      'Tanks'
    ]
  },
  {
    name: 'Starter Kits',
    subcategories: [
      'Beginner Kits',
      'Intermediate Kits',
      'Advanced Kits',
      'Pod Kits',
      'Box Mods'
    ]
  }
];

const SinglePageLayout = () => {
  const { isBannerVisible, setIsBannerVisible } = useBanner();
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [activeSection, setActiveSection] = useState<'products' | 'about' | 'support' | 'location'>('products');
  const [isSubcategorySelected, setIsSubcategorySelected] = useState(false);
  const [isCategoryFromMainSection, setIsCategoryFromMainSection] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [bannerMessages] = useState([
    { icon: Zap, text: "Buy pack of 3 and get 1 flavour free!", color: "text-yellow-300" },
    { icon: Star, text: "Limited time offer - Up to 30% off!", color: "text-yellow-300" },
    { icon: Truck, text: "Free UK Delivery over £50", color: "text-yellow-300" }
  ]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  // Handle banner visibility based on hero section visibility
  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show banner only when hero section is in view
        setIsBannerVisible(entry.isIntersecting);
      },
      {
        threshold: 0, // Trigger when any part of the hero section enters/leaves viewport
      }
    );

    observer.observe(heroElement);
    return () => observer.unobserve(heroElement);
  }, [setIsBannerVisible]);

  // Rotate banner messages without fade animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex(prev => (prev + 1) % bannerMessages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [bannerMessages.length]);

  const productsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const supportRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const productGridRef = useRef<HTMLDivElement>(null);

  // Scroll detection to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: productsRef, name: 'products' as const },
        { ref: aboutRef, name: 'about' as const },
        { ref: supportRef, name: 'support' as const },
        { ref: locationRef, name: 'location' as const },
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

  // Determine if the selected category is a subcategory
  const isSubcategory = (category: string) => {
    return categoryStructure.some(cat => cat.subcategories.includes(category));
  };

  // Find the parent category of a subcategory
  const getParentCategory = (subcategory: string) => {
    const parent = categoryStructure.find(cat => cat.subcategories.includes(subcategory));
    return parent ? parent.name : 'All Products';
  };

  // Filter products based on selected category
  const filteredProducts = (() => {
    if (selectedCategory === 'All Products') {
      return products;
    }

    // If it's a subcategory, filter by the parent category and the subcategory
    if (isSubcategorySelected) {
      const parentCategory = getParentCategory(selectedCategory);
      return products.filter(
        (p) => p.category === parentCategory && p.subcategory === selectedCategory
      );
    }

    // Otherwise, filter by the main category
    return products.filter((p) => p.category === selectedCategory);
  })();

  // Handle category selection from sidebar
  const handleSelectCategory = (category: string, isSubcategoryParam: boolean = false) => {
    setSelectedCategory(category);
    setIsSubcategorySelected(isSubcategoryParam);
    setIsCategoryFromMainSection(false); // Reset flag when selecting from sidebar

    // Scroll to product grid when category is selected
    setTimeout(() => {
      scrollToProductGrid();
    }, 100);
  };

  // Handle category selection from main product categories section
  const handleCategoryFromMainSection = (category: string) => {
    setSelectedCategory(category);
    setIsSubcategorySelected(false);
    setIsCategoryFromMainSection(true); // Set flag when selecting from main section

    // Scroll to product grid when category is selected
    setTimeout(() => {
      scrollToProductGrid();
    }, 100);
  };

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

  const scrollToSection = (section: 'products' | 'about' | 'support' | 'location') => {
    setActiveSection(section);
    const ref = section === 'products' ? productsRef :
               section === 'about' ? aboutRef :
               section === 'support' ? supportRef :
               locationRef;
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Enhanced Promotional Banner - Fully responsive with solid green background */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${isBannerVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="bg-[#91cb3e] text-white">
          <div className="container mx-auto px-2 py-1 sm:px-4 sm:py-2 flex items-center justify-center">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-1.5 sm:gap-2">
                {(() => {
                  const IconComponent = bannerMessages[currentMessageIndex].icon;
                  return (
                    <IconComponent
                      className={`h-4 w-4 sm:h-5 sm:w-5 ${bannerMessages[currentMessageIndex].color} animate-bounce`}
                      style={{ animationDelay: '0ms' }}
                    />
                  );
                })()}
                <span className="font-bold tracking-wide text-xs sm:text-sm md:text-base text-center">
                  {bannerMessages[currentMessageIndex].text}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CategorySidebar
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />

      <main className="container mx-auto px-4 pt-12 sm:pt-14 md:pt-16 pb-20 space-y-12">
        {/* Products Section */}
        <section ref={productsRef} className="scroll-mt-36 animate-in fade-in duration-500">
          <div className="space-y-8">
            <div className="relative -ml-4 -mr-4" ref={heroRef}>
              <HeroCarousel />
            </div>

            {/* Product Categories */}
            <ProductCategories
              onSelectCategory={handleCategoryFromMainSection}
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
<PromotionalBanner imageUrl='https://th.bing.com/th/id/R.f5d67afbd0552869add8e6ba9737dbae?rik=IA3GG5rc8X6%2f8Q&riu=http%3a%2f%2fwww.vapesdirect.co.uk%2fcdn%2fshop%2farticles%2fThe_Best_Vape_Deals_Ever_on_Black_Friday_2019_1024x1024.jpg%3fv%3d1575037168&ehk=RSJ9f7E8bhAiIOkqJsZZ75UOsponcRQjo7OvJRk7uog%3d&risl=&pid=ImgRaw&r=0'  heading='Black Friday Deals' description='Dont miss out on the best deals!' />

            {/* Product Grid */}
            <div ref={productGridRef} className="scroll-mt-12">
              <h2 className="text-2xl font-semibold text-foreground mb-6 pb-3 border-b-2 border-accent/30 inline-block transition-all duration-300 hover:border-accent">
                {selectedCategory}
              </h2>
              {/* Show ProductGrid for categories selected from main section, SubcategoryGrid for sidebar selections with subcategories */}
              {isCategoryFromMainSection || selectedCategory === 'All Products' ? (
                <ProductGrid
                  key={`grid-${selectedCategory}`}
                  products={filteredProducts}
                  onAddToCart={handleAddToCart}
                />
              ) : selectedCategory !== 'All Products' &&
                (!isSubcategorySelected && categoryStructure.some(cat => cat.name === selectedCategory && cat.subcategories.length > 0) ||
                 isSubcategorySelected) ? (
                <SubcategoryGrid
                  key={`subgrid-${selectedCategory}`}
                  products={filteredProducts}
                  onAddToCart={handleAddToCart}
                  hideSubcategoryHeading={isSubcategorySelected} // Hide heading when a specific subcategory is selected
                />
              ) : (
                <ProductGrid
                  key={`grid-fallback-${selectedCategory}`}
                  products={filteredProducts}
                  onAddToCart={handleAddToCart}
                />
              )}
            </div>
          </div>
        </section>
<PromotionalBanner imageUrl='https://www.theaceofvapez.com/cdn/shop/files/Clearance_deal_-_The_Ace_of_vapez_mobile_banner.jpg?v=1742204113&width=550' heading='Deal of the Day' description='Buy 1 Get 2 for only 0'  />
        {/* Popular Brands Section */}
        <section className="scroll-mt-36 animate-in fade-in duration-500">
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-foreground pb-3 border-b-2 border-accent/30 inline-block transition-all duration-300 hover:border-accent">
              Popular Brands
            </h2>

            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 py-6 overflow-hidden">
              {/* Brand 1 */}
              <div className="group flex flex-col items-center">
                <div className="bg-white dark:bg-gray-800 rounded-full p-3 md:p-4 shadow-lg group-hover:shadow-2xl transition-all duration-300 border-2 border-transparent group-hover:border-accent">
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-accent font-bold text-lg md:text-xl shadow-inner">
                    <img src="https://clipground.com/images/voopoo-logo.png" alt="" />
                  </div>
                </div>
                <span className="mt-3 text-xs md:text-sm font-semibold text-foreground group-hover:text-accent transition-colors duration-200">Voopoo</span>
              </div>

              {/* Brand 2 */}
              <div className="group flex flex-col items-center">
                <div className="bg-white dark:bg-gray-800 rounded-full p-3 md:p-4 shadow-lg group-hover:shadow-2xl transition-all duration-300 border-2 border-transparent group-hover:border-accent">
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-accent font-bold text-lg md:text-xl shadow-inner">
                   <img src="http://images-platform.99static.com/8lrE8zJIJN-VzKU29osYyxPEFQc=/44x22:1965x1943/fit-in/99designs-contests-attachments/105/105300/attachment_105300734" alt="" />
                  </div>
                </div>
                <span className="mt-3 text-xs md:text-sm font-semibold text-foreground group-hover:text-accent transition-colors duration-200">Leo vapes</span>
              </div>

              {/* Brand 3 */}
              <div className="group flex flex-col items-center">
                <div className="bg-white dark:bg-gray-800 rounded-full p-3 md:p-4 shadow-lg group-hover:shadow-2xl transition-all duration-300 border-2 border-transparent group-hover:border-accent">
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-accent font-bold text-lg md:text-xl shadow-inner">
                   <img src="http://www.ukvia.co.uk/wp-content/uploads/2018/12/SMOK_.png" alt="" />
                  </div>
                </div>
                <span className="mt-3 text-xs md:text-sm font-semibold text-foreground group-hover:text-accent transition-colors duration-200">Smok nord</span>
              </div>

              {/* Brand 4 */}
              <div className="group flex flex-col items-center">
                <div className="bg-white dark:bg-gray-800 rounded-full p-3 md:p-4 shadow-lg group-hover:shadow-2xl transition-all duration-300 border-2 border-transparent group-hover:border-accent">
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-accent font-bold text-lg md:text-xl shadow-inner">
                   <img src="http://www.elitevapestore.co.uk/cdn/shop/files/elite_vape_store_logo_448e98d8-760c-43f1-9283-321995a4b55e_1200x1200.png?v=1727312136" alt="" />
                  </div>
                </div>
                <span className="mt-3 text-xs md:text-sm font-semibold text-foreground group-hover:text-accent transition-colors duration-200">Elite Vapes</span>
              </div>

              {/* Brand 5 */}
              <div className="group flex flex-col items-center">
                <div className="bg-white dark:bg-gray-800 rounded-full p-3 md:p-4 shadow-lg group-hover:shadow-2xl transition-all duration-300 border-2 border-transparent group-hover:border-accent">
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-accent font-bold text-lg md:text-xl shadow-inner">
                 <img src="https://tse4.mm.bing.net/th/id/OIP.cXYNiZHG3xQl1j9hkCJF8gHaHa?pid=Api&P=0&h=220" alt="" />
                  </div>
                </div>
                <span className="mt-3 text-xs md:text-sm font-semibold text-foreground group-hover:text-accent transition-colors duration-200">Caliburn</span>
              </div>

              {/* Brand 6 */}
              <div className="group flex flex-col items-center">
                <div className="bg-white dark:bg-gray-800 rounded-full p-3 md:p-4 shadow-lg group-hover:shadow-2xl transition-all duration-300 border-2 border-transparent group-hover:border-accent">
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-accent font-bold text-lg md:text-xl shadow-inner">
                   <img src="https://img1.picmix.com/output/stamp/normal/1/7/5/4/1294571_dd52b.png" alt="" />
                  </div>
                </div>
                <span className="mt-3 text-xs md:text-sm font-semibold text-foreground group-hover:text-accent transition-colors duration-200">Vampire vapes</span>
              </div>
            </div>
          </div>
        </section>
        {/* About Section */}
        <section ref={aboutRef} className="scroll-mt-36 animate-in fade-in duration-500">
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
        <section className="scroll-mt-36 animate-in fade-in duration-500">
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-foreground pb-3 border-b-2 border-accent/30 inline-block transition-all duration-300 hover:border-accent">Why Our Customers Love Us</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <img
                  src="https://www.artisanvaporcompany.com/wp-content/uploads/2020/04/free-delivery.png"
                  alt="Free Shipping"
                  className="w-full max-w-[150px] h-auto object-contain mb-3"
                />
                <h3 className="font-semibold text-foreground">FREE SHIPPING</h3>
                <p className="text-muted-foreground text-sm">Free Shipping over $100</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <img
                  src="https://www.artisanvaporcompany.com/wp-content/uploads/2020/04/return-exchange.png"
                  alt="Returns and Exchange"
                  className="w-full max-w-[150px] h-auto object-contain mb-3"
                />
                <h3 className="font-semibold text-foreground">RETURNS AND EXCHANGE</h3>
                <p className="text-muted-foreground text-sm">Return and Exchange</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <img
                  src="https://www.artisanvaporcompany.com/wp-content/uploads/2020/04/secure-shopping.png"
                  alt="Secured Shopping"
                  className="w-full max-w-[150px] h-auto object-contain mb-3"
                />
                <h3 className="font-semibold text-foreground">SECURED SHOPPING</h3>
                <p className="text-muted-foreground text-sm">100% Satisfaction Guaranteed</p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="scroll-mt-36 animate-in fade-in duration-500">
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
        <section className="scroll-mt-36 animate-in fade-in duration-500">
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
                      <p className="text-foreground mb-4 italic">"Great products using from the last 2 years and in future i will be their customer with out any doubt ."</p>
                      <p className="font-semibold text-foreground">George menk.</p>
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
                      <p className="text-foreground mb-4 italic">"I have been a customer for a long time and have always been satisfied with the quality and service."</p>
                      <p className="font-semibold text-foreground">Emilly watson</p>
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
                      <p className="text-foreground mb-4 italic">" I have been a customer for a long time and have always been satisfied with the quality and service."</p>
                      <p className="font-semibold text-foreground">Recca Quanine </p>
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

        {/* Our Location Section */}
        <section ref={locationRef} className="scroll-mt-36 animate-in fade-in duration-500">
          <OurLocation />
        </section>

        {/* Newsletter Section */}
        <section className="scroll-mt-36 animate-in fade-in duration-500">
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
        <section ref={supportRef} className="scroll-mt-36 animate-in fade-in duration-500">
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