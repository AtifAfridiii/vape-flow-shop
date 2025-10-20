import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import hero1 from "@/../src/proImages/img1/hero1.jpg"

const slides = [
  {
    id: 1,
    image: hero1,
    title: 'Premium Disposable Vapes',
    subtitle: 'Convenience meets quality',
  },
  {
    id: 2,
    image: "https://vapedepotusa.com/wp-content/uploads/2024/05/Main-Best-Pod-Systems-Vape-Juice.jpg",
    title: 'Extensive Flavor Collection',
    subtitle: 'Find your perfect taste',
  },
  {
    id: 3,
    image: "https://image.made-in-china.com/2f0j00WlZurVsyHhYt/Various-Flavours-Multiple-Colors-Plus-800-Puffs-Vape-Pod-Puff-Plus-Puff-Bar.jpg",
    title: 'New Arrivals',
    subtitle: 'Latest products in stock',
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
    <div className="relative w-full h-full min-h-screen max-h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-500">{slide.title}</h2>
            <p className="text-base md:text-xl animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">{slide.subtitle}</p>
          </div>
        </div>
      ))}

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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 bg-black/20 px-4 py-3 rounded-full backdrop-blur-sm z-10">
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