import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import hero1 from "@/../src/proImages/img1/hero1.jpg"
import heroSection3 from '@/images/hero section 3.webp';
import heroSection4 from '@/images/hero section 4.webp';
import heroPic2 from '@/images/hero section pic 2.webp';
import heroSes1 from '@/images/hero sesction 1.webp';

const localHeroImages = [heroSection3, heroSection4, heroPic2, heroSes1];

const slides = localHeroImages.map((img, idx) => ({
  id: idx + 1,
  image: img,
  title: ['Premium Disposable Vapes', 'Extensive Flavor Collection', 'New Arrivals', 'Top Picks'][idx] || 'Featured',
  subtitle: ['Convenience meets quality', 'Find your perfect taste', 'Latest products in stock', 'Handpicked favorites'][idx] || '',
}));

// Custom hook for parallax effect
const useParallax = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      setOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return offset;
};

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const parallax = useParallax();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Fullscreen hero: cover entire viewport */}
      <div className="w-full h-screen relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            {/* Background decorative layer (subtle) */}
            <div className="absolute inset-0 bg-black/10" />

            {/* Main content area: left text, right product image */}
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-6 flex items-center justify-between w-full">
                {/* Left content */}
                <div className="w-1/2 max-w-2xl text-left text-white">
                  <h1 className="text-6xl md:text-[120px] leading-tight font-extrabold tracking-tight text-white/95">
                    {slide.title}
                  </h1>
                  <p className="mt-4 text-lg md:text-2xl text-white/90 max-w-lg">{slide.subtitle}</p>

                  <div className="mt-8 flex items-center gap-4">
                    <Button size="lg" className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold shadow-2xl">Shop Now</Button>
                    <Button variant="ghost" size="icon" className="text-white border-white/20">Learn</Button>
                  </div>
                </div>

                {/* Right product image */}
                <div className="w-1/2 flex justify-end items-center">
                  <img src={slide.image} alt={slide.title} className="w-[55%] max-w-[900px] object-contain drop-shadow-2xl" />
                </div>
              </div>
            </div>
          </div>
        ))}
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
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
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