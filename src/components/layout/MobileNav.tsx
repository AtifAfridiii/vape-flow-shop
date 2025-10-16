import { Home, ShoppingCart, Info, HelpCircle } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';
import CartSidebar from '@/components/cart/CartSidebar';

interface MobileNavProps {
  activeSection: 'products' | 'about' | 'support';
  onSectionChange: (section: 'products' | 'about' | 'support') => void;
}

const MobileNav = ({ activeSection, onSectionChange }: MobileNavProps) => {
  const { cartCount } = useCart();
  const [cartOpen, setCartOpen] = useState(false);

  const navItems = [
    { id: 'products', icon: Home, label: 'Products' },
    { icon: ShoppingCart, label: 'Cart', badge: cartCount, onClick: () => setCartOpen(true) },
    { id: 'about', icon: Info, label: 'About' },
    { id: 'support', icon: HelpCircle, label: 'Support' },
  ];

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-card border-t border-border">
        <div className="flex items-center justify-around h-16">
          {navItems.map(({ id, icon: Icon, label, badge, onClick }) => {
            if (onClick) {
              return (
                <button
                  key={label}
                  onClick={onClick}
                  className="flex flex-col items-center justify-center flex-1 h-full relative transition-colors text-muted-foreground hover:text-foreground"
                >
                  <div className="relative">
                    <Icon className="h-5 w-5" />
                    {badge !== undefined && badge > 0 && (
                      <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-semibold rounded-full h-4 w-4 flex items-center justify-center">
                        {badge}
                      </span>
                    )}
                  </div>
                  <span className="text-xs mt-1">{label}</span>
                </button>
              );
            }

            return (
              <button
                key={id}
                onClick={() => onSectionChange(id as 'products' | 'about' | 'support')}
                className={`flex flex-col items-center justify-center flex-1 h-full relative transition-colors ${
                  activeSection === id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <div className="relative">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs mt-1">{label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      <CartSidebar open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default MobileNav;
