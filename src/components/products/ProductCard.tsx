import { ShoppingCart, Check, Eye, Lock } from 'lucide-react';
import { Product, useCart } from '@/contexts/CartContext'; // Updated import
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { toast } from 'sonner';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { useState } from 'react';
import ProductDetailModal from '@/components/products/ProductDetailModal';
import { useAuth } from '@/contexts/AuthContext'; // Added AuthContext import
import AuthModal, { AuthTab } from '@/components/AuthModal'; // Added AuthModal import

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const { isProductInCart } = useCart(); // Use the new method from CartContext
  const { isAuthenticated } = useAuth(); // Get authentication status
  const productInCart = isProductInCart(product.id); // Check if product is in cart
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false); // State for AuthModal
  const [authTab, setAuthTab] = useState<AuthTab>('login'); // State for AuthTab

  const handleAddToCart = () => {
    // Only add to cart if not already in cart
    if (!productInCart) {
      onAddToCart(product);

      // Show success toast
      toast.success(
        <div className="flex items-center gap-2">
          <Check className="h-4 w-4" />
          <div>
            <p className="font-semibold">{product.name}</p>
            <p className="text-sm opacity-90">Added to cart</p>
          </div>
        </div>,
        {
          duration: 3000,
          position: 'bottom-right',
        }
      );
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAuthSuccess = () => {
    // Close the auth modal after successful authentication
    setAuthModalOpen(false);
  };

  return (
    <div className="relative">
      <GlowingEffect
        spread={20}
        glow={true}
        disabled={false}
        proximity={30}
        inactiveZone={0.2}
        borderWidth={2}
        className="rounded-xl"
      />
      <Card className="overflow-hidden border-border shadow-md hover:shadow-xl transition-all duration-300 bg-secondary hover:translate-y-[-4px] group relative z-10 rounded-xl h-full flex flex-col">
        <div className="aspect-square overflow-hidden bg-muted relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

          {/* SALE Badge */}
          {product.originalPrice && product.salePercentage && (
            <div className="absolute top-2 left-2 z-20">
              <div className="bg-black text-white px-2 py-1 rounded-md shadow-lg font-bold uppercase tracking-wide whitespace-nowrap
                              text-[0.6rem] sm:text-[0.65rem] md:text-xs
                              px-1.5 py-0.5 sm:px-2 sm:py-1">
                -{product.salePercentage}% Off
              </div>
            </div>
          )}

          {/* Eye Icon Button */}
          <button
            onClick={openModal}
            className="absolute top-2 right-2 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
            aria-label="View product details"
          >
            <Eye className="h-4 w-4 text-white" />
          </button>
        </div>
        <CardContent className="p-3 flex-grow">
          <h3 className="font-semibold text-foreground mb-1 text-sm line-clamp-2 group-hover:text-accent transition-colors duration-200">{product.name}</h3>
          <p className="text-xs text-muted-foreground mb-2">{product.category}</p>

          {/* Price Display */}
          <div className="flex items-center gap-2 flex-wrap">
            {product.originalPrice ? (
              <>
                <span className="text-sm text-muted-foreground line-through decoration-red-500 decoration-2">
                  £{product.originalPrice.toFixed(2)}
                </span>
                <span className="text-lg font-bold text-black">
                  £{product.price.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-base font-semibold text-black">
                £{product.price.toFixed(2)}
              </span>
            )}
          </div>
        </CardContent>
        <CardFooter className="p-3 pt-0">
          {/* Conditional rendering based on authentication status */}
          {isAuthenticated ? (
            <Button
              onClick={handleAddToCart}
              disabled={productInCart} // Disable button if product is in cart
              className={`w-full text-sm font-medium transition-all duration-200 hover:shadow-lg h-9 ${
                productInCart
                  ? 'bg-emerald-500 hover:bg-emerald-600 text-white'
                  : 'bg-primary hover:bg-emerald-600 text-primary-foreground hover:text-white'
              }`}
            >
              {productInCart ? (
                <>
                  <Check className="h-4 w-4 mr-2" />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingCart className="h-4 w-4 mr-2 transition-transform duration-200 group-hover:scale-110" />
                  Add to Cart
                </>
              )}
            </Button>
          ) : (
            <Button
              variant="outline"
              className="w-full text-sm sm:text-base font-medium transition-all duration-200 hover:shadow-lg h-9 sm:h-10 border-black border-2 flex items-center justify-center gap-2 px-2 sm:px-4"
              onClick={() => setAuthModalOpen(true)} // Open AuthModal on click
            >
              <Lock className="h-4 w-4 sm:h-5 sm:w-5 " />
              <span className="truncate">Log in to see price</span>
            </Button>
          )}
        </CardFooter>
      </Card>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={isModalOpen ? product : null}
        onClose={closeModal}
      />

      {/* Auth Modal */}
      <AuthModal
        open={authModalOpen}
        onOpenChange={setAuthModalOpen}
        tab={authTab}
        onTabChange={setAuthTab}
        onAuthSuccess={handleAuthSuccess}
      />
    </div>
  );
};

export default ProductCard;