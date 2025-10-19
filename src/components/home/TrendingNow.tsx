import { Product } from '@/contexts/CartContext';
import ProductCard from '@/components/products/ProductCard';
import { TrendingUp } from 'lucide-react';
import { trendingProducts as trendingProductsData } from '@/data/products';

interface TrendingNowProps {
  onAddToCart: (product: Product) => void;
}

const TrendingNow = ({ onAddToCart }: TrendingNowProps) => {
  // Use dedicated trending products data
  const trendingProducts = trendingProductsData.slice(0, 4);

  if (trendingProducts.length === 0) {
    return null;
  }

  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Section Header */}
      <div className="mb-8 flex items-center gap-3">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-primary animate-bounce" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Trending Now
          </h2>
        </div>
        <div className="hidden sm:block h-1 flex-1 bg-gradient-to-r from-primary/50 to-transparent rounded-full" />
      </div>

      {/* Trending Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trendingProducts.map((product, index) => (
          <div
            key={product.id}
            className="animate-in fade-in slide-in-from-bottom-4 duration-500 relative"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Trending Badge positioned on top of the card */}
            <div className="absolute -top-3 -right-3 z-20">
              <div className="relative">
                <div className="absolute inset-0 bg-primary rounded-full blur-md opacity-50 animate-pulse" />
                <div className="relative bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  🔥 Trending
                </div>
              </div>
            </div>
            <ProductCard
              product={product}
              onAddToCart={onAddToCart}
            />
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="mt-12 mb-8 flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
          More Trending Items
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </div>
  );
};

export default TrendingNow;