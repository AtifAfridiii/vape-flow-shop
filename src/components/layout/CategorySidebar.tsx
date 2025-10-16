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
          className="fixed inset-0 bg-black/40 z-40 transition-opacity"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-base font-semibold text-gray-900">Categories</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={closeSidebar}
            className="text-gray-600 hover:bg-gray-100 hover:text-gray-900"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="p-2 overflow-y-auto h-[calc(100vh-73px)]">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`w-full text-left px-4 py-3 rounded transition-colors text-sm ${
                selectedCategory === category
                  ? 'bg-blue-700 text-white font-medium'
                  : 'text-gray-700 hover:bg-gray-100'
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
