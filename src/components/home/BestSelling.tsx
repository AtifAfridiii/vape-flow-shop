import { Product } from '@/contexts/CartContext';
import ProductCard from '@/components/products/ProductCard';
import { Award } from 'lucide-react';

interface BestSellingProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const BestSelling = ({ products, onAddToCart }: BestSellingProps) => {
  // Get best-selling products
  const bestSellingProducts = products
    .filter((p) => p.bestSeller)
    .slice(0, 4);

  if (bestSellingProducts.length === 0) {
    return null;
  }

  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Section Header */}
      <div className="mb-8 flex items-center gap-3">
        <div className="flex items-center gap-2">
          <Award className="h-6 w-6 text-accent animate-pulse" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Best Selling
          </h2>
        </div>
        <div className="hidden sm:block h-1 flex-1 bg-gradient-to-r from-accent/50 to-transparent rounded-full" />
      </div>

      {/* Best Selling Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {bestSellingProducts.map((product, index) => (
          <div
            key={product.id}
            className="animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Best Seller Badge */}
            <div className="relative">
              <div className="absolute -top-3 -right-3 z-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-accent rounded-full blur-md opacity-50 animate-pulse" />
                  <div className="relative bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    🏆 Best Seller
                  </div>
                </div>
              </div>
              <ProductCard
                product={product}
                onAddToCart={onAddToCart}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="mt-12 mb-8 flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
          Customer Favorites
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </div>
  );
};

export default BestSelling;

