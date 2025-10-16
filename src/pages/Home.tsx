import { useState } from 'react';
import { Product, useCart } from '@/contexts/CartContext';
import { products } from '@/data/products';
import HeroCarousel from '@/components/home/HeroCarousel';
import TrendingNow from '@/components/home/TrendingNow';
import BestSelling from '@/components/home/BestSelling';
import ProductGrid from '@/components/products/ProductGrid';
import CategorySidebar from '@/components/layout/CategorySidebar';

const Home = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('All Products');

  const filteredProducts =
    selectedCategory === 'All Products'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  return (
    <>
      <CategorySidebar
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <div className="space-y-6">
        <HeroCarousel />

        {/* Trending Now Section */}
        <TrendingNow
          onAddToCart={handleAddToCart}
        />

        {/* Best Selling Section */}
        <BestSelling
          onAddToCart={handleAddToCart}
        />

        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            {selectedCategory}
          </h2>
          <ProductGrid
            products={filteredProducts}
            onAddToCart={handleAddToCart}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
