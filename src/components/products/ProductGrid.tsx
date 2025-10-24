import { Product } from '@/contexts/CartContext';
import ProductCard from './ProductCard';
import AnimatedDivider from '@/components/ui/animated-divider';
import { useMemo } from 'react';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const ProductGrid = ({ products, onAddToCart }: ProductGridProps) => {
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

          {/* Add animated divider between category sections, except after the last one */}
          {index < categoryNames.length - 1 && (
            <div className="my-8">
              <AnimatedDivider
                gradientColors={['#91cb3e', '#ffffff', '#91cb3e']}
                height={2}
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