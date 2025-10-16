import { useState } from 'react';
import { Product, useCart } from '@/contexts/CartContext';
import { products } from '@/data/products';
import HeroCarousel from '@/components/home/HeroCarousel';
import ProductGrid from '@/components/products/ProductGrid';
import CartModal from '@/components/cart/CartModal';
import CategorySidebar from '@/components/layout/CategorySidebar';

const Home = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts =
    selectedCategory === 'All Products'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handleAddToCart = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleConfirmAdd = (quantity: number) => {
    if (selectedProduct) {
      for (let i = 0; i < quantity; i++) {
        addToCart(selectedProduct);
      }
    }
  };

  return (
    <>
      <CategorySidebar
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <div className="space-y-6">
        <HeroCarousel />

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

      <CartModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onConfirm={handleConfirmAdd}
      />
    </>
  );
};

export default Home;
