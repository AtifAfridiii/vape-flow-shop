import { Product } from '@/contexts/CartContext';
import ProductCard from './ProductCard';
import { useMemo } from 'react';
import AnimatedDivider from '@/components/ui/animated-divider';

interface SubcategoryGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  hideSubcategoryHeading?: boolean; // New prop to control heading visibility
}

const SubcategoryGrid = ({ products, onAddToCart, hideSubcategoryHeading = false }: SubcategoryGridProps) => {
  // Group products by subcategory
  const productsBySubcategory = useMemo(() => {
    const subcategoryMap: Record<string, Product[]> = {};

    products.forEach(product => {
      // Only include products that have a subcategory defined
      if (product.subcategory) {
        const subcategory = product.subcategory;
        if (!subcategoryMap[subcategory]) {
          subcategoryMap[subcategory] = [];
        }
        subcategoryMap[subcategory].push(product);
      }
    });

    return subcategoryMap;
  }, [products]);

  // Get products without subcategories
  const productsWithoutSubcategory = useMemo(() => {
    return products.filter(product => !product.subcategory);
  }, [products]);

  // Get sorted subcategory names
  const subcategoryNames = useMemo(() => {
    return Object.keys(productsBySubcategory).sort();
  }, [productsBySubcategory]);

  if (Object.keys(productsBySubcategory).length === 0 && productsWithoutSubcategory.length === 0) {
    return (
      <div className="text-center py-12 animate-in fade-in duration-300">
        <p className="text-muted-foreground text-base">No products found in this category.</p>
      </div>
    );
  }

  // If hideSubcategoryHeading is true and there's only one subcategory, show products directly without subcategory heading
  if (hideSubcategoryHeading && subcategoryNames.length === 1) {
    const singleSubcategory = subcategoryNames[0];
    return (
      <div className="space-y-12">
        {/* Changed from grid-cols-1 to grid-cols-2 for mobile view */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {productsBySubcategory[singleSubcategory].map((product, index) => (
            <div
              key={product.id}
              className="animate-in fade-in slide-in-from-bottom-4 duration-500 relative"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <ProductCard
                product={product}
                onAddToCart={onAddToCart}
              />
            </div>
          ))}
        </div>

        {/* Show products without subcategories in a separate section */}
        {productsWithoutSubcategory.length > 0 && (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b-2 border-accent/30 inline-block">
              Other Products
            </h2>
            {/* Changed from grid-cols-1 to grid-cols-2 for mobile view */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {productsWithoutSubcategory.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-in fade-in slide-in-from-bottom-4 duration-500 relative"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <ProductCard
                    product={product}
                    onAddToCart={onAddToCart}
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {subcategoryNames.map((subcategory, index) => (
        <section key={subcategory} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          {!hideSubcategoryHeading && (
            <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b-2 border-accent/30 inline-block">
              {subcategory}
            </h2>
          )}
          {/* Changed from grid-cols-1 to grid-cols-2 for mobile view */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {productsBySubcategory[subcategory].map((product, idx) => (
              <div
                key={product.id}
                className="animate-in fade-in slide-in-from-bottom-4 duration-500 relative"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <ProductCard
                  product={product}
                  onAddToCart={onAddToCart}
                />
              </div>
            ))}
          </div>

          {/* Add animated divider between subcategory sections, except after the last one */}
          {index < subcategoryNames.length - 1 && (
            <div className="my-8">
              <AnimatedDivider
               gradientColors={['#91cb3e', '#ffffff', '#91cb3e']}
               height={4}
               animationDuration={3}
              />
            </div>
          )}
        </section>
      ))}

      {/* Show products without subcategories in a separate section */}
      {productsWithoutSubcategory.length > 0 && (
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b-2 border-accent/30 inline-block">
            Other Products
          </h2>
          {/* Changed from grid-cols-1 to grid-cols-2 for mobile view */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {productsWithoutSubcategory.map((product, index) => (
              <div
                key={product.id}
                className="animate-in fade-in slide-in-from-bottom-4 duration-500 relative"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <ProductCard
                  product={product}
                  onAddToCart={onAddToCart}
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default SubcategoryGrid;