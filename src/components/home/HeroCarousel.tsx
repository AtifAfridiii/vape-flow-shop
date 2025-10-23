import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroSection3 from '@/images/hero section 3.webp';
import heroSection4 from '@/images/hero section 4.webp';
import heroPic2 from '@/images/hero section pic 2.webp';
import heroSes1 from '@/images/hero sesction 1.webp';
// Adding desktop hero image import
import heroDesktop from '@/images/hero section 3.webp';

const localHeroImages = [heroSection3, heroSection4, heroPic2, heroSes1];

// Simplified HeroCarousel component with full-screen background image only
const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % localHeroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + localHeroImages.length) % localHeroImages.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % localHeroImages.length);
  };

  // Full-screen background image container with no text content
  return (
    <div className="relative w-full overflow-hidden">
      {/* Fullscreen hero with image element - responsive display */}
      {/* Mobile: object-cover to fill the space, Desktop: object-contain to show full image */}
      <div className="relative h-[60vh] md:h-auto w-full overflow-hidden bg-black">
        <img
          src={localHeroImages[currentSlide]}
          alt={`Hero slide ${currentSlide + 1}`}
          className="w-full h-auto md:w-full md:h-auto object-contain md:object-contain object-center"
        />
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white transition-all duration-200 hover:scale-110 shadow-lg z-10"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white transition-all duration-200 hover:scale-110 shadow-lg z-10"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 bg-black/20 px-4 py-3 rounded-full backdrop-blur-sm z-20">
        {localHeroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all duration-300 hover:scale-125 ${
              index === currentSlide
                ? 'bg-white w-10 h-2.5 shadow-lg'
                : 'bg-white/50 w-2.5 h-2.5 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;