import { Trash2, Plus, Minus, X, Trash, AlertCircle, Check } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { toast } from 'sonner';

interface CartSidebarProps {
  open: boolean;
  onClose: () => void;
}

const CartSidebar = ({ open, onClose }: CartSidebarProps) => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();

  const handleRemoveFromCart = (itemId: string, itemName: string) => {
    removeFromCart(itemId);
    toast.error(
      <div className="flex items-center gap-2">
        <Trash2 className="h-4 w-4" />
        <div>
          <p className="font-semibold">Removed from Cart</p>
          <p className="text-sm opacity-90">{itemName}</p>
        </div>
      </div>,
      {
        duration: 2500,
        position: 'bottom-right',
      }
    );
  };

  const handleUpdateQuantity = (itemId: string, newQuantity: number, itemName: string) => {
    if (newQuantity < 1) {
      handleRemoveFromCart(itemId, itemName);
      return;
    }

    updateQuantity(itemId, newQuantity);
    toast.success(
      <div className="flex items-center gap-2">
        <Check className="h-4 w-4" />
        <div>
          <p className="font-semibold">Quantity Updated</p>
          <p className="text-sm opacity-90">
            {itemName} - Qty: {newQuantity}
          </p>
        </div>
      </div>,
      {
        duration: 2000,
        position: 'bottom-right',
      }
    );
  };

  const handleClearCart = () => {
    if (cartItems.length === 0) return;

    clearCart();
    toast.error(
      <div className="flex items-center gap-2">
        <Trash className="h-4 w-4" />
        <div>
          <p className="font-semibold">Cart Cleared</p>
          <p className="text-sm opacity-90">All items removed</p>
        </div>
      </div>,
      {
        duration: 2500,
        position: 'bottom-right',
      }
    );
  };

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="left" className="w-full sm:max-w-md bg-card">
        <SheetHeader>
          <div className="flex items-center justify-between">
            <SheetTitle className="text-foreground">Shopping Cart</SheetTitle>
            {cartItems.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClearCart}
                className="text-destructive hover:text-destructive hover:bg-destructive/10"
              >
                Clear All
              </Button>
            )}
          </div>
        </SheetHeader>

        <div className="flex flex-col h-full pt-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center flex-1 text-center animate-in fade-in duration-300">
              <h3 className="text-base font-semibold text-foreground mb-2">Your Cart is Empty</h3>
              <p className="text-sm text-muted-foreground">Add some products to get started!</p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                {cartItems.map((item, index) => (
                  <div key={item.id} className="flex gap-3 p-3 bg-secondary border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-x-1 group animate-in fade-in slide-in-from-left" style={{ animationDelay: `${index * 50}ms` }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm text-foreground truncate">
                            {item.name}
                          </h4>
                          <p className="text-xs text-muted-foreground">{item.category}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleRemoveFromCart(item.id, item.name)}
                          className="h-6 w-6 text-destructive hover:text-destructive hover:bg-destructive/10 transition-all duration-200 hover:scale-110"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-primary">
                          £{item.price.toFixed(2)}
                        </span>
                        <div className="flex items-center gap-1">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleUpdateQuantity(item.id, item.quantity - 1, item.name)}
                            className="h-6 w-6 border-border text-foreground hover:bg-muted transition-all duration-200 hover:scale-110"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="text-sm font-semibold w-6 text-center text-foreground">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleUpdateQuantity(item.id, item.quantity + 1, item.name)}
                            className="h-6 w-6 border-border text-foreground hover:bg-muted transition-all duration-200 hover:scale-110"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4 mt-4 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary/5 to-accent/5 border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <span className="font-semibold text-foreground">Total</span>
                  <span className="text-lg font-bold text-primary">
                    £{cartTotal.toFixed(2)}
                  </span>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-200 hover:shadow-lg hover:scale-105">
                  Proceed to Checkout
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar;
