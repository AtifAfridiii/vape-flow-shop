import { X } from 'lucide-react';
import { useSidebar } from '@/contexts/SidebarContext';
import { categories } from '@/data/products';
import { Button } from '@/components/ui/button';

interface CategorySidebarProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategorySidebar = ({ selectedCategory, onSelectCategory }: CategorySidebarProps) => {
  const { isOpen, closeSidebar } = useSidebar();

  const handleCategoryClick = (category: string) => {
    onSelectCategory(category);
    closeSidebar();
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 animate-in fade-in"
          onClick={closeSidebar}
        />
      )}

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
