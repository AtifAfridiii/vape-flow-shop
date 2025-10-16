import { Wind, Zap, Droplet } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ProductCategoriesProps {
  onSelectCategory: (category: string) => void;
  onNavigateToProducts?: () => void;
}

const ProductCategories = ({ onSelectCategory, onNavigateToProducts }: ProductCategoriesProps) => {
  const handleCategoryClick = (displayName: string) => {
    onSelectCategory(displayName);
    // Trigger smooth scroll to products section after a brief delay
    if (onNavigateToProducts) {
      setTimeout(() => {
        onNavigateToProducts();
      }, 100);
    }
  };
  const categories = [
    {
      id: 'pods',
      name: 'Pods',
      displayName: 'Pod Systems',
      icon: Wind,
      description: 'Compact and convenient',
      color: 'from-blue-500/20 to-blue-600/20',
      borderColor: 'border-blue-200/50',
      iconColor: 'text-blue-600',
      hoverBg: 'hover:from-blue-500/30 hover:to-blue-600/30',
    },
    {
      id: 'vapes',
      name: 'Vapes',
      displayName: 'Disposable Vapes',
      icon: Zap,
      description: 'Ready to use instantly',
      color: 'from-amber-500/20 to-amber-600/20',
      borderColor: 'border-amber-200/50',
      iconColor: 'text-amber-600',
      hoverBg: 'hover:from-amber-500/30 hover:to-amber-600/30',
    },
    {
      id: 'liquids',
      name: 'E-Liquids',
      displayName: 'E-liquids',
      icon: Droplet,
      description: 'Wide flavor selection',
      color: 'from-pink-500/20 to-pink-600/20',
      borderColor: 'border-pink-200/50',
      iconColor: 'text-pink-600',
      hoverBg: 'hover:from-pink-500/30 hover:to-pink-600/30',
    },
  ];

  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.displayName)}
              className="group text-left transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className={`border-2 ${category.borderColor} shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] overflow-hidden bg-gradient-to-br ${category.color} ${category.hoverBg}`}>
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Icon Container */}
                    <div className="p-3 md:p-4 bg-white/50 group-hover:bg-white/70 rounded-lg transition-all duration-300 group-hover:scale-110">
                      <Icon className={`h-8 w-8 md:h-10 md:w-10 ${category.iconColor} transition-transform duration-300 group-hover:rotate-12`} />
                    </div>

                    {/* Category Name */}
                    <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-200">
                      {category.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                      {category.description}
                    </p>

                    {/* Arrow Indicator */}
                    <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xs font-medium text-accent">Browse →</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCategories;

