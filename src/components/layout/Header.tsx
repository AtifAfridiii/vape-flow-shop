import { Menu, ShoppingCart, Search, X, Loader } from 'lucide-react';
import { useSidebar } from '@/contexts/SidebarContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import CartSidebar from '@/components/cart/CartSidebar';
import { products } from '@/data/products';

const Header = () => {
  const { toggleSidebar } = useSidebar();
  const { cartCount } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<typeof products>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);

    if (value.trim().length === 0) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    setIsSearching(true);
    // Simulate search delay for professional feel
    setTimeout(() => {
      const query = value.toLowerCase();
      const results = products.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      );
      setSearchResults(results);
      setShowResults(true);
      setIsSearching(false);
    }, 300);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // TODO: Implement full search page navigation
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setShowResults(false);
  };

  const handleProductClick = (productName: string) => {
    setSearchQuery(productName);
    setShowResults(false);
    // TODO: Navigate to product or filter
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-blue-900 border-b border-blue-950 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
          {/* Left: Menu Button and Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="text-white hover:bg-blue-800 hover:text-white flex-shrink-0"
            >
              <Menu className="h-5 w-5" />
            </Button>

            {/* Logo */}
            <button
              onClick={handleLogoClick}
              className="hover:opacity-80 transition-opacity cursor-pointer flex-shrink-0"
            >
              <img
                src="https://www.no1ukvapesupplier.co.uk/cdn/shop/files/logo_220x@2x.png?v=1722962006"
                alt="VapeShop Logo"
                className="h-12 w-auto"
              />
            </button>
          </div>

          {/* Center-Right: Professional Search Bar (Hidden on mobile) */}
          <div className="hidden md:flex flex-1 max-w-md relative">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative flex items-center bg-yellow-50 border border-yellow-200 rounded-lg shadow-sm hover:border-yellow-300 focus-within:border-blue-700 focus-within:ring-1 focus-within:ring-blue-700 transition-all">
                <Search className="h-4 w-4 text-gray-500 ml-3 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  onFocus={() => searchQuery && setShowResults(true)}
                  className="flex-1 bg-transparent ml-2 text-sm text-gray-900 placeholder-gray-500 outline-none py-2.5"
                />
                {isSearching && (
                  <Loader className="h-4 w-4 text-gray-400 mr-3 animate-spin flex-shrink-0" />
                )}
                {searchQuery && !isSearching && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="text-gray-400 hover:text-gray-600 mr-3 flex-shrink-0 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              {/* Search Results Dropdown */}
              {showResults && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
                  <div className="p-2">
                    {searchResults.slice(0, 8).map((product) => (
                      <button
                        key={product.id}
                        onClick={() => handleProductClick(product.name)}
                        className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors text-left border-b border-gray-100 last:border-b-0"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-10 h-10 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {product.name}
                          </p>
                          <p className="text-xs text-gray-600">{product.category}</p>
                        </div>
                        <p className="text-sm font-semibold text-blue-700 flex-shrink-0">
                          £{product.price.toFixed(2)}
                        </p>
                      </button>
                    ))}
                    {searchResults.length > 8 && (
                      <div className="p-3 text-center text-sm text-gray-600 border-t border-gray-100">
                        {searchResults.length - 8} more results
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* No Results Message */}
              {showResults && searchResults.length === 0 && !isSearching && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4 text-center">
                  <p className="text-sm text-gray-600">No products found</p>
                </div>
              )}
            </form>
          </div>

          {/* Right: Search Icon (Mobile) and Cart */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="md:hidden text-white hover:bg-blue-800 hover:text-white"
            >
              <Search className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCartOpen(true)}
              className="relative text-white hover:bg-blue-800 hover:text-white"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-700 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden border-t border-blue-950 bg-blue-900 px-4 py-3">
            <form onSubmit={handleSearch} className="relative">
              <div className="flex items-center bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2.5">
                <Search className="h-4 w-4 text-gray-500 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  onFocus={() => searchQuery && setShowResults(true)}
                  autoFocus
                  className="flex-1 bg-transparent ml-2 text-sm text-gray-900 placeholder-gray-500 outline-none"
                />
                {isSearching && (
                  <Loader className="h-4 w-4 text-gray-400 animate-spin flex-shrink-0" />
                )}
                {searchQuery && !isSearching && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="text-gray-400 hover:text-gray-600 flex-shrink-0 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              {/* Mobile Search Results */}
              {showResults && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
                  <div className="p-2">
                    {searchResults.slice(0, 6).map((product) => (
                      <button
                        key={product.id}
                        onClick={() => handleProductClick(product.name)}
                        className="w-full flex items-center gap-2 p-2 hover:bg-gray-50 rounded transition-colors text-left border-b border-gray-100 last:border-b-0"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-8 h-8 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-gray-900 truncate">
                            {product.name}
                          </p>
                          <p className="text-xs text-gray-600">{product.category}</p>
                        </div>
                        <p className="text-xs font-semibold text-blue-700 flex-shrink-0">
                          £{product.price.toFixed(2)}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </form>
          </div>
        )}
      </header>

      <CartSidebar open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Header;
