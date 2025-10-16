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
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-card border-r border-border z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">Categories</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={closeSidebar}
            className="hover:bg-accent/10"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="p-2 overflow-y-auto h-[calc(100vh-73px)]">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`w-full text-left px-4 py-3 rounded-md transition-colors ${
                selectedCategory === category
                  ? 'bg-accent text-accent-foreground font-medium'
                  : 'text-foreground hover:bg-accent/10'
              }`}
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
