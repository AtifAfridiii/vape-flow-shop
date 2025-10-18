import { X } from 'lucide-react';
import { useSidebar } from '@/contexts/SidebarContext';
import { categories } from '@/data/products';
import { Button } from '@/components/ui/button';

interface CategorySidebarProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategorySidebar = ({ selectedCategory, onSelectCategory }: CategorySidebarProps) => {
  const { isOpen, closeSidebar, overlayX, overlayY } = useSidebar();

  const handleCategoryClick = (category: string) => {
    onSelectCategory(category);
    closeSidebar();
  };

  return (
    <>
      <style>{`
      .hamburger-overlay-40 {
        background: rgba(0,0,0,0.4);
        width: 100%;
        height: 100%;
        opacity: 0;
        pointer-events: none;
        clip-path: circle(0px at var(--hamburger-x, 60px) var(--hamburger-y, 60px));
        transition: clip-path 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s ease;
        backdrop-filter: none;
      }
      .hamburger-overlay-40.open {
        clip-path: circle(150% at var(--hamburger-x, 60px) var(--hamburger-y, 60px));
        opacity: 1;
        pointer-events: auto;
      }
      @media (max-width: 768px) {
        .hamburger-overlay-40 {
          clip-path: circle(0px at var(--hamburger-x, 30px) var(--hamburger-y, 30px));
        }
        .hamburger-overlay-40.open {
          clip-path: circle(150% at var(--hamburger-x, 30px) var(--hamburger-y, 30px));
        }
      }
      `}</style>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 hamburger-overlay-40 ${isOpen ? 'open' : ''}`}
        aria-hidden={!isOpen}
        onClick={closeSidebar}
        style={{
          // Use viewport coordinates from header button center
          // These are in CSS pixels relative to viewport, matching clip-path expectations
          // Ensure the values are valid numbers
          // Fallbacks are handled in CSS via var(..., defaults)
          // @ts-ignore - CSSProperties allows custom properties via index signature in runtime
          ['--hamburger-x' as any]: `${overlayX}px`,
          ['--hamburger-y' as any]: `${overlayY}px`,
        } as React.CSSProperties}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-card border-r border-border z-50 transform transition-all duration-300 shadow-xl ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-to-r from-primary/5 to-accent/5">
          <h2 className="text-base font-semibold text-foreground">Categories</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={closeSidebar}
            className="text-muted-foreground hover:bg-muted hover:text-foreground transition-all duration-200 hover:scale-110"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="p-2 overflow-y-auto h-[calc(100vh-73px)]">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 text-sm font-medium animate-in slide-in-from-left ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-md hover:shadow-lg'
                  : 'text-foreground hover:bg-secondary hover:translate-x-1'
              }`}
              style={{ animationDelay: `${index * 30}ms` }}
            >
              {category}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default CategorySidebar;
