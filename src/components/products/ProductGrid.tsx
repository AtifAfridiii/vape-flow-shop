import { Product } from '@/contexts/CartContext';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const ProductGrid = ({ products, onAddToCart }: ProductGridProps) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-12 animate-in fade-in duration-300">
        <p className="text-muted-foreground text-base">No products found in this category.</p>
      </div>
    );
  }

  return (
    // Changed from grid-cols-1 to grid-cols-2 for mobile view
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {products.map((product, index) => (
        <div
          key={product.id}
          className="animate-in fade-in slide-in-from-bottom-4 duration-500 relative"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <ProductCard
            product={product}
            onAddToCart={onAddToCart}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;