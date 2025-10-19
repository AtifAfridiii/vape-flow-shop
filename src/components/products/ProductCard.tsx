import { ShoppingCart, Check } from 'lucide-react';
import { Product, useCart } from '@/contexts/CartContext'; // Updated import
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { toast } from 'sonner';
import { GlowingEffect } from '@/components/ui/glowing-effect';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const { isProductInCart } = useCart(); // Use the new method from CartContext
  const productInCart = isProductInCart(product.id); // Check if product is in cart

  const handleAddToCart = () => {
    // Only add to cart if not already in cart
    if (!productInCart) {
      onAddToCart(product);

      // Show success toast
      toast.success(
        <div className="flex items-center gap-2">
          <Check className="h-4 w-4" />
          <div>
            <p className="font-semibold">{product.name}</p>
            <p className="text-sm opacity-90">Added to cart</p>
          </div>
        </div>,
        {
          duration: 3000,
          position: 'bottom-right',
        }
      );
    }
  };

  return (
    <div className="relative">
      <GlowingEffect
        spread={20}
        glow={true}
        disabled={false}
        proximity={30}
        inactiveZone={0.2}
        borderWidth={2}
        className="rounded-xl"
      />
      <Card className="overflow-hidden border-border shadow-md hover:shadow-xl transition-all duration-300 bg-secondary hover:translate-y-[-4px] group relative z-10 rounded-xl">
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
            onClick={handleAddToCart}
            disabled={productInCart} // Disable button if product is in cart
            className={`w-full text-sm font-medium transition-all duration-200 hover:shadow-lg ${
              productInCart
                ? 'bg-emerald-500 hover:bg-emerald-600 text-white'
                : 'bg-primary hover:bg-emerald-600 text-primary-foreground hover:text-white'
            }`}
          >
            {productInCart ? (
              <>
                <Check className="h-4 w-4 mr-2" />
                Added to Cart
              </>
            ) : (
              <>
                <ShoppingCart className="h-4 w-4 mr-2 transition-transform duration-200 group-hover:scale-110" />
                Add to Cart
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;