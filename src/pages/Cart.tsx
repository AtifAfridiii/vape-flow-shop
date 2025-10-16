import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Your Cart is Empty</h2>
        <p className="text-muted-foreground mb-6">Add some products to get started!</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Shopping Cart</h1>
        <Button
          variant="outline"
          onClick={clearCart}
          className="text-destructive hover:text-destructive"
        >
          Clear Cart
        </Button>
      </div>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <Card key={item.id}>
            <CardContent className="p-4">
              <div className="flex gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.category}</p>
                  <p className="text-lg font-bold text-accent">
                    £{item.price.toFixed(2)}
                  </p>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFromCart(item.id)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="h-8 w-8"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-lg font-semibold w-8 text-center">
                      {item.quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="h-8 w-8"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-muted">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-medium text-foreground">Subtotal</span>
            <span className="text-2xl font-bold text-accent">
              £{cartTotal.toFixed(2)}
            </span>
          </div>
          <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
            Proceed to Checkout
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cart;
