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
      image: 'https://tse4.mm.bing.net/th/id/OIP.v0l1-V_bjA6Qf55o7C-OvQHaHa?pid=Api&P=0&h=220',
    },
    {
      id: 'vapes',
      name: 'Vapes',
      displayName: 'Disposable Vapes',
      image: 'http://cloudsvapes.co.uk/cdn/shop/files/hayati-pro-ultra-15000-puffs-disposable-vape-pod-kit-pack-of-3-clouds-vapes-339202.jpg?v=1714029165',
    },
    {
      id: 'liquids',
      name: 'E-Liquids',
      displayName: 'E-liquids',
      image: 'https://tse4.mm.bing.net/th/id/OIP.w5wyhUJ4vBh5kjrF_PGP_QHaHa?pid=Api&P=0&h=220',
    },
    {
      id: 'disposables',
      name: 'Disposables vapes',
      displayName: 'Disposables vapes',
      image: 'https://cdn11.bigcommerce.com/s-hqim8tz8ly/images/stencil/2560w/products/65651/92417/Packspod_Disposable_Vape_-_5000_Puffs___41498.1684165666.jpg?c=1',
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
          <button
            onClick={() => handleCategoryClick(categories[0].displayName)}
            className="group transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
            style={{ animationDelay: '0ms' }}
          >
            <Card className="border-2 border-border shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] overflow-hidden h-48">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${categories[0].image})` }}
              ></div>
            </Card>
          </button>

          <button
            onClick={() => handleCategoryClick(categories[1].displayName)}
            className="group transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
            style={{ animationDelay: '100ms' }}
          >
            <Card className="border-2 border-border shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] overflow-hidden h-48">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${categories[1].image})` }}
              ></div>
            </Card>
          </button>
        </div>

        {/* Second column with 2 smaller cards */}
        <div className="flex flex-col gap-6">
          <button
            onClick={() => handleCategoryClick(categories[2].displayName)}
            className="group transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
            style={{ animationDelay: '200ms' }}
          >
            <Card className="border-2 border-border shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] overflow-hidden h-48">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${categories[2].image})` }}
              ></div>
            </Card>
          </button>

          <button
            onClick={() => handleCategoryClick(categories[3].displayName)}
            className="group transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
            style={{ animationDelay: '300ms' }}
          >
            <Card className="border-2 border-border shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] overflow-hidden h-48">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${categories[3].image})` }}
              ></div>
            </Card>
          </button>
        </div>

        {/* Third column with 1 large card spanning full height */}
        <div className="md:row-span-2">
          <button
            onClick={() => handleCategoryClick(categories[0].displayName)}
            className="group w-full h-full transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
            style={{ animationDelay: '400ms' }}
          >
            <Card className="border-2 border-border shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] overflow-hidden h-full min-h-[400px]">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${categories[0].image})` }}
              ></div>
            </Card>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;