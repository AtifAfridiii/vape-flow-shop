import { ShoppingCart } from 'lucide-react';
import { Product } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden border-yellow-200 shadow-sm hover:shadow-md transition-shadow bg-yellow-50">
      <div className="aspect-square overflow-hidden bg-yellow-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1 text-sm">{product.name}</h3>
        <p className="text-xs text-gray-600 mb-3">{product.category}</p>
        <p className="text-base font-semibold text-blue-700">£{product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={() => onAddToCart(product)}
          className="w-full bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
