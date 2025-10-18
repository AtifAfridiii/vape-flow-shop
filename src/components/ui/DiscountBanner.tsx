import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const DiscountBanner = ({ onOpenAuth }: { onOpenAuth?: (tab?: 'signup' | 'login') => void }) => {
  const [isVisible, setIsVisible] = useState(false); // Start as hidden

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 7000);

    // Clean up the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this effect runs once on mount

  const closeBanner = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed left-0 top-1/2 z-50 transform -translate-y-1/2">
      <div
        className="relative bg-gradient-to-r from-red-900 to-red-600 rounded-r-lg shadow-xl overflow-hidden w-16 md:w-12 h-32 py-4 flex flex-col items-center justify-center cursor-pointer hover:brightness-110"
        onClick={() => onOpenAuth?.('signup')}
        role="button"
        aria-label="Open signup/login"
        title="Get 30% OFF - Sign up or log in"
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            closeBanner();
          }}
          className="absolute top-1 right-1 text-white hover:text-gray-200 focus:outline-none"
          aria-label="Close"
        >
          <X size={16} />
        </button>

        <div className="text-center mb-3 rotate-90 origin-center whitespace-nowrap font-bold text-white text-sm md:text-base tracking-wider mt-6">
          Get 30% OFF
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;