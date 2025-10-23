import { Menu, ShoppingCart, Search, X, Loader, User, LogOut, ChevronDown } from 'lucide-react';
import { useSidebar } from '@/contexts/SidebarContext';
import { useCart } from '@/contexts/CartContext';
import { useBanner } from '@/contexts/BannerContext';
import { Button } from '@/components/ui/button';
import { useState, useEffect, useRef } from 'react';
import CartSidebar from '@/components/cart/CartSidebar';
import { products } from '@/data/products';
import { useAuth } from '@/contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { toast } from 'sonner';

const Header = () => {
  const { toggleSidebar, isOpen, setOverlayOrigin } = useSidebar();
  const { isBannerVisible } = useBanner();
  const { cartCount } = useCart();
  const { user, isAuthenticated, logout } = useAuth();
  const [cartOpen, setCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<typeof products>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Detect scroll for header highlight effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside to close search
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
        setShowResults(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchOpen]);

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
      <header className={`fixed  left-0 right-0 z-40 bg-accent transition-all duration-300 ease-in-out ${
        isScrolled ? 'shadow-xl' : 'shadow-md'
      } ${isBannerVisible ? 'top-6 sm:top-8 md:top-10' : 'top-0'}`}>
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
          {/* Left: Menu Button and Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                // Compute button center for radial overlay origin
                const rect = (e.currentTarget as HTMLButtonElement).getBoundingClientRect();
                const x = rect.left + rect.width / 2;
                const y = rect.top + rect.height / 2;
                setOverlayOrigin(x, y);
                toggleSidebar();
              }}
              aria-label="Navigation menu"
              aria-expanded={isOpen}
              className="text-accent-foreground hover:bg-accent/80 hover:text-accent-foreground flex-shrink-0"
            >
              <div className="relative w-5 h-5 flex items-center justify-center">
                <Menu
                  className={`absolute transition-all duration-300 ${isOpen ? 'opacity-0 rotate-45 scale-0' : 'opacity-100 rotate-0 scale-100'}`}
                />
                <X
                  className={`absolute transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-45 scale-0'}`}
                />
              </div>
            </Button>

            {/* Logo */}
            <button
              onClick={handleLogoClick}
              className="hover:opacity-80 transition-opacity cursor-pointer flex-shrink-0"
            >
              <img
                src="https://www.no1ukvapesupplier.co.uk/cdn/shop/files/logo_220x@2x.png?v=1722962006"
                alt="VapeShop Logo"
                className="h-8 sm:h-10 md:h-12 w-auto"
              />
            </button>
          </div>

          {/* Center: Spacer */}
          <div className="hidden md:flex flex-1"></div>

          {/* Right: User Menu, Search Icon and Cart */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Desktop Search Bar - Initially only icon, expands on click */}
            <div ref={searchContainerRef} className="hidden md:flex items-center">
              {isSearchOpen ? (
                <form onSubmit={handleSearch} className="relative flex items-center">
                  <div className="relative flex items-center bg-input border border-border rounded-lg shadow-md hover:shadow-lg hover:border-accent/50 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 focus-within:shadow-lg transition-all duration-200 w-64">
                    <Search className="h-4 w-4 text-muted-foreground ml-3 flex-shrink-0" />
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => handleSearchChange(e.target.value)}
                      onFocus={() => searchQuery && setShowResults(true)}
                      autoFocus
                      className="flex-1 bg-transparent ml-2 text-sm text-foreground placeholder-muted-foreground outline-none py-2.5 min-w-0"
                    />
                    {isSearching && (
                      <Loader className="h-4 w-4 text-muted-foreground mr-3 animate-spin flex-shrink-0" />
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        setIsSearchOpen(false);
                        setShowResults(false);
                      }}
                      className="text-muted-foreground hover:text-foreground mr-3 flex-shrink-0 transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Search Results Dropdown */}
                  {showResults && searchResults.length > 0 && (
                    <div className="absolute top-full right-0 mt-2 bg-card border border-border rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200 w-80">
                      <div className="p-2">
                        {searchResults.slice(0, 8).map((product) => (
                          <button
                            key={product.id}
                            onClick={() => {
                              handleProductClick(product.name);
                              setIsSearchOpen(false);
                            }}
                            className="w-full flex items-center gap-3 p-3 hover:bg-secondary rounded-lg transition-all duration-150 text-left border-b border-border last:border-b-0 hover:translate-x-1"
                          >
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-10 h-10 object-cover rounded"
                            />
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-foreground truncate">
                                {product.name}
                              </p>
                              <p className="text-xs text-muted-foreground">{product.category}</p>
                            </div>
                            <p className="text-sm font-semibold text-primary flex-shrink-0">
                              £{product.price.toFixed(2)}
                            </p>
                          </button>
                        ))}
                        {searchResults.length > 8 && (
                          <div className="p-3 text-center text-sm text-muted-foreground border-t border-border">
                            {searchResults.length - 8} more results
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* No Results Message */}
                  {showResults && searchResults.length === 0 && !isSearching && (
                    <div className="absolute top-full right-0 mt-2 bg-card border border-border rounded-lg shadow-xl z-50 p-4 text-center animate-in fade-in slide-in-from-top-2 duration-200 w-80">
                      <p className="text-sm text-muted-foreground">No products found</p>
                    </div>
                  )}
                </form>
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(true)}
                  className="text-accent-foreground hover:bg-accent/80 hover:text-accent-foreground"
                >
                  <Search className="h-5 w-5" />
                </Button>
              )}
            </div>

            {/* User Menu - Desktop */}
            {isAuthenticated && user && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="hidden md:flex items-center gap-2 text-accent-foreground hover:bg-accent/80 hover:text-accent-foreground"
                  >
                    <div className="flex items-center gap-2">
                      <div className="bg-primary/10 p-1.5 rounded-full">
                        <User className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium">{user.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium">{user.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => {
                      logout();
                      toast.success('Logged out successfully');
                    }}
                    className="cursor-pointer text-destructive focus:text-destructive"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            {/* Search Icon - Mobile */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="md:hidden text-accent-foreground hover:bg-accent/80 hover:text-accent-foreground"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* User Icon - Mobile */}
            {isAuthenticated && user && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden text-accent-foreground hover:bg-accent/80 hover:text-accent-foreground"
                  >
                    <div className="bg-primary/10 p-1 rounded-full">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium">{user.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => {
                      logout();
                      toast.success('Logged out successfully');
                    }}
                    className="cursor-pointer text-destructive focus:text-destructive"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCartOpen(true)}
              className="relative text-accent-foreground hover:bg-accent/80 hover:text-accent-foreground"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className={`md:hidden border-t border-accent/80 bg-accent px-3 sm:px-4 py-3 animate-in slide-in-from-top duration-200 ${isBannerVisible ? 'mt-1' : ''}`}>
            <form onSubmit={handleSearch} className="relative w-full">
              <div className="flex items-center bg-input border border-border rounded-lg px-2 sm:px-3 py-2 sm:py-2.5 shadow-md focus-within:shadow-lg focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/30 transition-all duration-200">
                <Search className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  onFocus={() => searchQuery && setShowResults(true)}
                  autoFocus
                  className="flex-1 bg-transparent ml-2 text-sm text-foreground placeholder-muted-foreground outline-none min-w-0"
                />
                {isSearching && (
                  <Loader className="h-4 w-4 text-muted-foreground animate-spin flex-shrink-0" />
                )}
                <button
                  type="button"
                  onClick={() => {
                    setIsSearchOpen(false);
                    setShowResults(false);
                  }}
                  className="text-muted-foreground hover:text-foreground flex-shrink-0 transition-colors ml-1"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Mobile Search Results */}
              {showResults && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-xl z-50 max-h-60 sm:max-h-64 overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200 -mx-3 sm:-mx-4 px-3 sm:px-4">
                  <div className="py-2">
                    {searchResults.slice(0, 6).map((product) => (
                      <button
                        key={product.id}
                        onClick={() => {
                          handleProductClick(product.name);
                          setIsSearchOpen(false);
                        }}
                        className="w-full flex items-center gap-2 p-2 hover:bg-secondary rounded transition-all duration-150 text-left border-b border-border last:border-b-0 hover:translate-x-1"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-8 h-8 object-cover rounded flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-foreground truncate">
                            {product.name}
                          </p>
                          <p className="text-xs text-muted-foreground truncate">{product.category}</p>
                        </div>
                        <p className="text-xs font-semibold text-primary flex-shrink-0 ml-1">
                          £{product.price.toFixed(2)}
                        </p>
                      </button>
                    ))}
                    {searchResults.length > 6 && (
                      <div className="p-2 text-center text-xs text-muted-foreground border-t border-border">
                        +{searchResults.length - 6} more
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* No Results Message */}
              {showResults && searchResults.length === 0 && !isSearching && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-xl z-50 p-3 text-center animate-in fade-in slide-in-from-top-2 duration-200 -mx-3 sm:-mx-4 px-3 sm:px-4">
                  <p className="text-xs text-muted-foreground">No products found</p>
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