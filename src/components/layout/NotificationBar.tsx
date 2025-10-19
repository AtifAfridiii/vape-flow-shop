import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NotificationBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll events to show/hide the notification bar
  useEffect(() => {
    const handleScroll = () => {
      // Hide when scrolled down more than 100px
      setIsScrolled(window.scrollY > 100);

      // Show when at the top of the page
      if (window.scrollY <= 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-hide after 10 seconds if user is at the top
  useEffect(() => {
    if (!isScrolled) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 10000); // 10 seconds

      return () => clearTimeout(timer);
    }
  }, [isScrolled]);

  return (
    <AnimatePresence>
      {isVisible && !isScrolled && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 right-0 z-50 bg-red-600 text-white py-2 overflow-hidden"
        >
          <div className="flex items-center justify-center w-full">
            <motion.div
              animate={{ x: ['100%', '-100%'] }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="whitespace-nowrap text-sm font-medium py-1 px-4"
            >
              Warning: This product contains nicotine
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NotificationBar;