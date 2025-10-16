import { Menu, ShoppingCart } from 'lucide-react';
import { useSidebar } from '@/contexts/SidebarContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import CartSidebar from '@/components/cart/CartSidebar';

const Header = () => {
  const { toggleSidebar } = useSidebar();
  const { cartCount } = useCart();
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-card border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="hover:bg-accent/10"
          >
            <Menu className="h-6 w-6" />
          </Button>

          <h1 className="text-xl font-semibold text-foreground">VapeShop</h1>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCartOpen(true)}
            className="relative hover:bg-accent/10"
          >
            <ShoppingCart className="h-6 w-6 text-foreground" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Button>
        </div>
      </header>

      <CartSidebar open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Header;
