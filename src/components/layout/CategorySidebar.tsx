import { X, ChevronDown, ChevronRight } from 'lucide-react';
import { useSidebar } from '@/contexts/SidebarContext';
import { categories } from '@/data/products';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

interface CategorySidebarProps {
  selectedCategory: string;
  onSelectCategory: (category: string, isSubcategory?: boolean) => void;
}

// Define subcategories for each main category
const categoryStructure = [
  {
    name: 'All Products',
    subcategories: []
  },
  {
    name: 'Disposable Vapes',
    subcategories: [
      'Fruit Flavors',
      'Menthol',
      'Tobacco',
      'Dessert',
      '500-1000 Puffs',
      '1500+ Puffs'
    ]
  },
  {
    name: 'Pod Systems',
    subcategories: [
      'SMOK Nord',
      'Vaporesso XROS',
      'Voopoo Drag',
      'Lost Vape Orion',
      'GeekVape'
    ]
  },
  {
    name: 'E-liquids',
    subcategories: [
      'Nicotine Salt',
      'Freebase',
      'Shortfill',
      'Nicotine Free',
      'Fruit Flavors',
      'Menthol'
    ]
  },
  {
    name: 'Accessories',
    subcategories: [
      'Coils',
      'Replacement Parts',
      'Batteries',
      'Chargers',
      'Tanks'
    ]
  },
  {
    name: 'Starter Kits',
    subcategories: [
      'Beginner Kits',
      'Intermediate Kits',
      'Advanced Kits',
      'Pod Kits',
      'Box Mods'
    ]
  }
];

const CategorySidebar = ({ selectedCategory, onSelectCategory }: CategorySidebarProps) => {
  const { isOpen, closeSidebar, overlayX, overlayY } = useSidebar();
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});
  const [mounted, setMounted] = useState(false);

  // Initialize mounted state for animations
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const handleCategoryClick = (category: string, isSubcategory: boolean = false) => {
    onSelectCategory(category, isSubcategory);
    closeSidebar();
  };

  const toggleCategory = (categoryName: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
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
      .subcategory-enter {
        max-height: 0;
        opacity: 0;
        transform: translateY(-10px);
      }
      .subcategory-enter-active {
        max-height: 500px;
        opacity: 1;
        transform: translateY(0);
        transition: all 0.3s ease-out;
      }
      .subcategory-exit {
        max-height: 500px;
        opacity: 1;
        transform: translateY(0);
      }
      .subcategory-exit-active {
        max-height: 0;
        opacity: 0;
        transform: translateY(-10px);
        transition: all 0.3s ease-out;
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
        className={`fixed top-0 left-0 h-full w-64 bg-card border-r border-border z-50 transform transition-all duration-300 shadow-xl overflow-x-hidden ${
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
          {categoryStructure.map((category, index) => {
            const hasSubcategories = category.subcategories.length > 0;
            const isOpen = openCategories[category.name] || false;

            return (
              <div key={category.name}>
                <button
                  onClick={() => {
                    if (hasSubcategories) {
                      toggleCategory(category.name);
                    } else {
                      handleCategoryClick(category.name, false);
                    }
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 text-sm font-medium flex items-center justify-between animate-in slide-in-from-left ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-md hover:shadow-lg'
                      : 'text-foreground hover:bg-secondary hover:translate-x-1'
                  }`}
                  style={{ animationDelay: `${index * 30}ms` }}
                  aria-expanded={hasSubcategories ? isOpen : undefined}
                  aria-controls={hasSubcategories ? `subcategories-${index}` : undefined}
                >
                  <span>{category.name}</span>
                  {hasSubcategories && (
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </button>

                {hasSubcategories && (
                  <div
                    id={`subcategories-${index}`}
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pl-6 pr-2 py-2 space-y-1">
                      {category.subcategories.map((subcategory, subIndex) => (
                        <button
                          key={subcategory}
                          onClick={() => handleCategoryClick(subcategory, true)}
                          className={`w-full text-left px-3 py-2 rounded-md transition-all duration-200 text-xs flex items-center animate-in slide-in-from-left ${
                            selectedCategory === subcategory
                              ? 'bg-accent/20 text-accent font-medium'
                              : 'text-muted-foreground hover:bg-secondary/50 hover:text-foreground hover:translate-x-1'
                          }`}
                          style={{
                            animationDelay: `${(index * 30) + (subIndex * 20)}ms`,
                            opacity: mounted ? 1 : 0
                          }}
                        >
                          <ChevronRight className="h-3 w-3 mr-2 flex-shrink-0" />
                          <span className="truncate">{subcategory}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default CategorySidebar;