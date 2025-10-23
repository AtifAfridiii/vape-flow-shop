import { Card } from '@/components/ui/card';
import podsImg from '../../images/category pic/podkit.avif';
import coilImg from '../../images/category pic/Coils.avif';
import vapesImg from '../../images/category pic/vapekit.jpeg';
import liquidsImg from '../../images/category pic/flavour.avif';
import disposablesImg from '../../images/category pic/disspossibles.avif';

interface ProductCategoriesProps {
  onSelectCategory: (category: string) => void;
  onNavigateToProducts?: () => void;
}

const ProductCategories = ({ onSelectCategory, onNavigateToProducts }: ProductCategoriesProps) => {
  const handleCategoryClick = (displayName: string) => {
    // Don't navigate for "Disposables vapes" category
    if (displayName === 'Disposables vapes') {
      return;
    }

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
      displayName: 'Accessories',
      image: coilImg,
    },
    {
      id: 'vapes',
      name: 'Vapes',
      displayName: 'Disposable Vapes',
      image: vapesImg,
    },
    {
      id: 'liquids',
      name: 'E-Liquids',
      displayName: 'E-liquids',
      image: liquidsImg,
    },
    {
      id: 'disposables',
      name: 'Disposables vapes',
      displayName: 'Disposables vapes',
      image: disposablesImg,
    },
  ];

  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Added heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
        Shop by Categories
      </h2>

      {/* Responsive grid layout - 2 columns on mobile, masonry on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {/* First column - 2 smaller cards on all screens */}
        <div className="flex flex-col gap-4 md:gap-6">
          {categories.slice(0, 2).map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.displayName)}
              aria-label={`View ${cat.displayName}`}
              className="group transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <Card className="border-2 border-border shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden h-48 sm:h-56 md:h-72 rounded-lg">
                <div className="relative w-full h-full">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute left-3 bottom-3 md:left-4 md:bottom-4">
                    <span className="inline-block bg-black/60 text-white text-xs sm:text-sm md:text-base font-semibold px-2 py-1 md:px-3 md:py-1 rounded-full shadow-lg max-w-[85%] truncate block">
                      {cat.displayName}
                    </span>
                  </div>
                </div>
              </Card>
            </button>
          ))}

          {/* Third column content moved here for mobile - large card (visible on mobile, spans full width) */}
          <div className="md:hidden">
            <button
              onClick={() => handleCategoryClick("Pod Systems")}
              aria-label="View Pod Systems"
              className="group w-full h-full transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: '400ms' }}
            >
              <Card className="border-2 border-border shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden h-48 sm:h-56 md:h-72 rounded-lg">
                <div className="relative w-full h-full">
                  <img src={podsImg} alt="Pod Systems" className="w-full h-full object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute left-3 bottom-3 md:left-4 md:bottom-4">
                    <span className="inline-block bg-black/60 text-white text-xs sm:text-sm md:text-base font-semibold px-2 py-1 md:px-3 md:py-1 rounded-full shadow-lg max-w-[85%] truncate block">
                      Pod Systems
                    </span>
                  </div>
                </div>
              </Card>
            </button>
          </div>
        </div>

        {/* Second column - 2 smaller cards on all screens */}
        <div className="flex flex-col gap-4 md:gap-6">
          {categories.slice(2, 4).map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.displayName)}
              aria-label={`View ${cat.displayName}`}
              className="group transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${(idx + 2) * 100}ms` }}
            >
              <Card className="border-2 border-border shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden h-48 sm:h-56 md:h-72 rounded-lg">
                <div className="relative w-full h-full">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute left-3 bottom-3 md:left-4 md:bottom-4">
                    <span className="inline-block bg-black/60 text-white text-xs sm:text-sm md:text-base font-semibold px-2 py-1 md:px-3 md:py-1 rounded-full shadow-lg max-w-[85%] truncate block">
                      {cat.displayName}
                    </span>
                  </div>
                </div>
              </Card>
            </button>
          ))}
        </div>

        {/* Third column - large card (hidden on mobile, spans full height on desktop) */}
        <div className="hidden md:block md:row-span-2">
          <button
            onClick={() => handleCategoryClick("Pod Systems")}
            aria-label="View Pod Systems"
            className="group w-full h-full transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
            style={{ animationDelay: '400ms' }}
          >
            <Card className="border-2 border-border shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full min-h-[420px] rounded-lg">
              <div className="relative w-full h-full">
                <img src={podsImg} alt="Pod Systems" className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute left-6 bottom-6">
                  <span className="inline-block bg-black/60 text-white text-lg font-semibold px-4 py-2 rounded-full shadow-lg truncate">
                    Pod Systems
                  </span>
                </div>
              </div>
            </Card>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;