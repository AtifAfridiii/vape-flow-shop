import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const slides = [
  {
    id: 1,
    image: 'https://cdn.shopify.com/s/files/1/0195/3510/2014/products/s-l1600_3_800x.png?v=1669549508',
    title: 'Premium Vape Devices',
    subtitle: 'Discover our latest collection',
  },
  {
    id: 2,
    image: 'https://cdn.shopify.com/s/files/1/0505/5617/4511/files/halo-vape-juice-falling.png',
    title: 'Top Quality E-liquids',
    subtitle: 'Extensive flavor selection',
  },
  {
    id: 3,
    image: 'https://cdn.shopify.com/s/files/1/0263/5887/4178/products/vuse-vype-epod-solo-device-14807339106370.png?v=1610304386',
    title: 'Starter Kits Available',
    subtitle: 'Perfect for beginners',
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
    <div className="relative w-full h-64 md:h-[450px] overflow-hidden bg-[#606c38] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
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
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50 flex flex-col items-center justify-center text-white">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 animate-in fade-in slide-in-from-bottom-4 duration-500">{slide.title}</h2>
            <p className="text-base md:text-lg animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">{slide.subtitle}</p>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white transition-all duration-200 hover:scale-110 shadow-lg"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white transition-all duration-200 hover:scale-110 shadow-lg"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/20 px-3 py-2 rounded-full backdrop-blur-sm">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-300 hover:scale-125 ${
              index === currentSlide
                ? 'bg-white w-8 h-2 shadow-lg'
                : 'bg-white/50 w-2 h-2 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
