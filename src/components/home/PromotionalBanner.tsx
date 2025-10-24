import React from 'react';

interface PromotionalBannerProps {
  imageUrl?: string;
  altText?: string;
  heading?: string;
  description?: string;
  onClick?: () => void;
}

const PromotionalBanner: React.FC<PromotionalBannerProps> = ({
  imageUrl,
  altText = 'Special Promotion',
  heading,
  description,
  onClick,
}) => {
  return (
    <section className="scroll-mt-36 animate-in fade-in duration-500 w-full">
      <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
        <img
          src={imageUrl}
          alt={altText}
          className="w-full h-auto object-cover max-h-64 md:max-h-80 lg:max-h-96 transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 py-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 drop-shadow-lg">
              {heading}
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-4 drop-shadow-md max-w-2xl mx-auto">
              {description}
            </p>
            <button
              onClick={onClick}
              className="bg-primary hover:bg-blue-700 text-primary-foreground font-semibold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanner;