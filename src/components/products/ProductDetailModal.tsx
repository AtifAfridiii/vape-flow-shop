import { X, ShoppingCart } from 'lucide-react';
import { Product, useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { toast } from 'sonner';
import { Check } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductDetailModal = ({ product, onClose }: ProductDetailModalProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, isProductInCart } = useCart();
  const productInCart = product ? isProductInCart(product.id) : false;

  if (!product) return null;

  const handleAddToCart = () => {
    if (!productInCart) {
      // Add the product to cart (the CartContext will handle quantity internally)
      addToCart(product);

      // Show success toast
      toast.success(
        <div className="flex items-center gap-2">
          <Check className="h-4 w-4" />
          <div>
            <p className="font-semibold">{product.name}</p>
            <p className="text-sm opacity-90">
              {quantity} {quantity === 1 ? 'item' : 'items'} added to cart
            </p>
          </div>
        </div>,
        {
          duration: 3000,
          position: 'bottom-right',
        }
      );
    }
  };

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div
          className="bg-card rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col md:flex-row">
            {/* Product Image */}
            <div className="md:w-1/2 p-6">
              <div className="aspect-square overflow-hidden rounded-lg bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-6 flex flex-col">
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">{product.name}</h2>
                  <p className="text-sm text-muted-foreground">{product.category}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="hover:black transition-all duration-200 hover:scale-110"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Price */}
              <div className="mb-6">
                <p className="text-3xl font-bold text-accent">£{product.price.toFixed(2)}</p>
              </div>

              {/* Description */}
              <div className="mb-6 flex-1">
                <p className="text-muted-foreground">
                  This is a detailed description of {product.name}. This product offers excellent quality and performance.
                  It's perfect for those looking for a reliable and satisfying experience.
                </p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center justify-between mb-6 p-4 bg-secondary rounded-lg border border-border">
                <span className="text-sm font-medium text-foreground">Quantity</span>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={decreaseQuantity}
                    className="h-8 w-8 transition-all duration-200 hover:scale-110"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"/>
                    </svg>
                  </Button>
                  <span className="text-lg font-semibold w-8 text-center text-foreground">
                    {quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={increaseQuantity}
                    className="h-8 w-8 transition-all duration-200 hover:scale-110"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"/>
                      <path d="M12 5v14"/>
                    </svg>
                  </Button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <Button
                onClick={handleAddToCart}
                disabled={productInCart}
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
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart - £{(product.price * quantity).toFixed(2)}
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailModal;