import { Card } from '@/components/ui/card';
import podsImg from '../../images/pods.png';
import coilImg from '../../images/coil.jpg';
import vapesImg from '../../images/vapes.jpg';
import liquidsImg from '../../images/flavour.jpg';
import disposablesImg from '../../images/diss-vape.jpg';



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

      {/* Masonry-style grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* First column with 2 smaller cards */}
        <div className="flex flex-col gap-6">
          {categories.slice(0, 2).map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.displayName)}
              aria-label={`View ${cat.displayName}`}
              className="group transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <Card className="border-2 border-border shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden h-64 md:h-72 rounded-lg">
                <div className="relative w-full h-full">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute left-4 bottom-4">
                    <span className="inline-block bg-black/60 text-white text-sm md:text-base font-semibold px-3 py-1 rounded-full shadow-lg max-w-[85%] truncate block">
                      {cat.displayName}
                    </span>
                  </div>
                </div>
              </Card>
            </button>
          ))}
        </div>

        {/* Second column with 2 smaller cards */}
        <div className="flex flex-col gap-6">
          {categories.slice(2, 4).map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.displayName)}
              aria-label={`View ${cat.displayName}`}
              className="group transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${(idx + 2) * 100}ms` }}
            >
              <Card className="border-2 border-border shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden h-64 md:h-72 rounded-lg">
                <div className="relative w-full h-full">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute left-4 bottom-4">
                    <span className="inline-block bg-black/60 text-white text-sm md:text-base font-semibold px-3 py-1 rounded-full shadow-lg max-w-[85%] truncate block">
                      {cat.displayName}
                    </span>
                  </div>
                </div>
              </Card>
            </button>
          ))}
        </div>

        {/* Third column with 1 large card spanning full height */}
        <div className="md:row-span-2">
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