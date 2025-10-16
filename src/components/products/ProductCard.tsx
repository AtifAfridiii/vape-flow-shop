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
    <Card className="overflow-hidden border-border shadow-md hover:shadow-xl transition-all duration-300 bg-secondary hover:translate-y-[-4px] group">
      <div className="aspect-square overflow-hidden bg-muted relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-foreground mb-1 text-sm line-clamp-2 group-hover:text-accent transition-colors duration-200">{product.name}</h3>
        <p className="text-xs text-muted-foreground mb-3">{product.category}</p>
        <p className="text-base font-semibold text-primary">£{product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={() => onAddToCart(product)}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium transition-all duration-200 hover:shadow-lg"
        >
          <ShoppingCart className="h-4 w-4 mr-2 transition-transform duration-200 group-hover:scale-110" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
