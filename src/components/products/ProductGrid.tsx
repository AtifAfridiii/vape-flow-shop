import { Product } from '@/contexts/CartContext';
import ProductCard from './ProductCard';
import AnimatedDivider from '@/components/ui/animated-divider';
import { useMemo } from 'react';
import PromotionalBanner from '@/components/home/PromotionalBanner';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  showPromotionalBanner?: boolean; // New prop to control banner visibility
}

const ProductGrid = ({ products, onAddToCart, showPromotionalBanner = false }: ProductGridProps) => {
  // Group products by main category
  const productsByCategory = useMemo(() => {
    const categoryMap: Record<string, Product[]> = {};

    products.forEach(product => {
      const category = product.category || 'Other';
      if (!categoryMap[category]) {
        categoryMap[category] = [];
      }
      categoryMap[category].push(product);
    });

    return categoryMap;
  }, [products]);

  // Get sorted category names
  const categoryNames = useMemo(() => {
    return Object.keys(productsByCategory).sort();
  }, [productsByCategory]);

  if (products.length === 0) {
    return (
      <div className="text-center py-12 animate-in fade-in duration-300">
        <p className="text-muted-foreground text-base">No products found in this category.</p>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {categoryNames.map((category, index) => (
        <section key={category} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b-2 border-accent/30 inline-block">
            {category}
          </h2>
          {/* Changed from grid-cols-1 to grid-cols-2 for mobile view */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {productsByCategory[category].map((product, idx) => (
              <div
                key={product.id}
                className="animate-in fade-in slide-in-from-bottom-4 duration-500 relative"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <ProductCard
                  product={product}
                  onAddToCart={onAddToCart}
                />
              </div>
            ))}
          </div>

          {/* Show promotional banner after the first category (if enabled) */}
          {showPromotionalBanner && index === 1 && (
            <div className="my-8">
              <PromotionalBanner
                imageUrl="https://th.bing.com/th/id/R.f5d67afbd0552869add8e6ba9737dbae?rik=IA3GG5rc8X6%2f8Q&riu=http%3a%2f%2fwww.vapesdirect.co.uk%2fcdn%2fshop%2farticles%2fThe_Best_Vape_Deals_Ever_on_Black_Friday_2019_1024x1024.jpg%3fv%3d1575037168&ehk=RSJ9f7E8bhAiIOkqJsZZ75UOsponcRQjo7OvJRk7uog%3d&risl=&pid=ImgRaw&r=0"
                heading="Black Friday Deals"
                description="Don't miss out on the best deals!"
              />
            </div>
          )}

          {/* Add animated divider between category sections, except after the last one */}
          {index < categoryNames.length - 1 && (
            <div className="my-8">
              <AnimatedDivider
                gradientColors={['#91cb3e', '#ffffff', '#91cb3e']}
                height={4}
                animationDuration={3}
              />
            </div>
          )}
        </section>
      ))}
    </div>
  );
};

export default ProductGrid;