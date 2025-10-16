import { Home, ShoppingCart, Info, HelpCircle } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';

const MobileNav = () => {
  const { cartCount } = useCart();

  const navItems = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/cart', icon: ShoppingCart, label: 'Cart', badge: cartCount },
    { to: '/about', icon: Info, label: 'About' },
    { to: '/support', icon: HelpCircle, label: 'Support' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-card border-t border-border">
      <div className="flex items-center justify-around h-16">
        {navItems.map(({ to, icon: Icon, label, badge }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center flex-1 h-full relative transition-colors ${
                isActive ? 'text-accent' : 'text-muted-foreground'
              }`
            }
          >
            <div className="relative">
              <Icon className="h-6 w-6" />
              {badge !== undefined && badge > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {badge}
                </span>
              )}
            </div>
            <span className="text-xs mt-1">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;
