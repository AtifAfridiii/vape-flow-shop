import { X, Plus, Minus } from 'lucide-react';
import { Product } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

interface CartModalProps {
  product: Product | null;
  onClose: () => void;
  onConfirm: (quantity: number) => void;
}

const CartModal = ({ product, onClose, onConfirm }: CartModalProps) => {
  const [quantity, setQuantity] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (product) {
      setIsVisible(true);
      setQuantity(1);
    } else {
      setIsVisible(false);
    }
  }, [product]);

  if (!product) return null;

  const handleConfirm = () => {
    onConfirm(quantity);
    onClose();
  };

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-card z-50 transform transition-transform duration-300 ${
          isVisible ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h3 className="text-lg font-semibold text-foreground">Add to Cart</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="hover:bg-accent/10"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Content */}
          <div className="flex-1 p-4 overflow-y-auto">
            <img
              src={product.image}
              alt={product.name}
              className="w-full aspect-square object-cover rounded-lg mb-4"
            />
            <h4 className="text-lg font-semibold text-foreground mb-2">
              {product.name}
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              {product.category}
            </p>
            <p className="text-xl font-bold text-accent mb-6">
              £{product.price.toFixed(2)}
            </p>

            {/* Quantity Controls */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-medium text-foreground">Quantity</span>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={decreaseQuantity}
                  className="h-8 w-8"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-lg font-semibold w-8 text-center">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={increaseQuantity}
                  className="h-8 w-8"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between mb-6 p-4 bg-muted rounded-lg">
              <span className="font-medium text-foreground">Total</span>
              <span className="text-xl font-bold text-accent">
                £{(product.price * quantity).toFixed(2)}
              </span>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-border">
            <Button
              onClick={handleConfirm}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Confirm & Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartModal;
