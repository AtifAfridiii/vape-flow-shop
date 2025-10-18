"use client";

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

// Allow CSS variables and non-standard keys on style objects
type CSSVarStyle = React.CSSProperties & {
  [key: string]: string | number | undefined;
};

interface GlowingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  glowColor?: string;
}

const GlowingCard = React.forwardRef<HTMLDivElement, GlowingCardProps>(
  ({ children, className, glowColor = "#3b82f6", style, ...props }, ref) => {
    const styleVars: CSSVarStyle = { ...(style || {}), '--glow-color': glowColor };
    return (
      <div
        ref={ref}
        className={cn(
          "relative flex-1 min-w-[14rem] p-6 rounded-2xl text-foreground",
          "bg-background border",
          "transition-all duration-400 ease-out",
          className
        )}
        style={styleVars}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlowingCard.displayName = 'GlowingCard';

interface GlowingCardsProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  enableGlow?: boolean;
  glowRadius?: number; // in rem units
  glowOpacity?: number;
  animationDuration?: number; // in ms
  gap?: string; // e.g., "2rem"
  glowColor?: string;
}

const GlowingCards = React.forwardRef<HTMLDivElement, GlowingCardsProps>(
  ({
    children,
    className,
    enableGlow = true,
    glowRadius = 25,
    glowOpacity = 0.8,
    animationDuration = 400,
    gap = "2rem",
    glowColor = "#3b82f6",
    style,
    ...props
  }, ref) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const overlayRef = useRef<HTMLDivElement | null>(null);
    const [, setMousePosition] = useState({ x: 0, y: 0 });
    const [showOverlay, setShowOverlay] = useState(false);

    useEffect(() => {
      const container = containerRef.current;
      const overlay = overlayRef.current;

      if (!container || !overlay || !enableGlow) return;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setMousePosition({ x, y });
        setShowOverlay(true);

        overlay.style.setProperty('--x', x + 'px');
        overlay.style.setProperty('--y', y + 'px');
        overlay.style.setProperty('--opacity', glowOpacity.toString());
      };

      const handleMouseLeave = () => {
        setShowOverlay(false);
        overlay.style.setProperty('--opacity', '0');
      };

      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }, [enableGlow, glowOpacity]);

    const containerStyle: CSSVarStyle = {
      '--gap': gap,
      '--animation-duration': animationDuration + 'ms',
      '--glow-radius': glowRadius + 'rem',
      '--glow-opacity': glowOpacity,
      '--glow-color': glowColor,
      ...style
    };

    const overlayStyle: CSSVarStyle = {
      WebkitMask: "radial-gradient(var(--glow-radius) var(--glow-radius) at var(--x, 0) var(--y, 0), #000 1%, transparent 50%)",
      mask: "radial-gradient(var(--glow-radius) var(--glow-radius) at var(--x, 0) var(--y, 0), #000 1%, transparent 50%)",
      opacity: showOverlay ? 'var(--opacity)' : 0,
    };

    return (
      <div
        ref={ref || containerRef}
        className={cn("relative w-full", className)}
        style={containerStyle}
        {...props}
      >
        <div
          className={cn(
            "flex items-center justify-center flex-wrap gap-[var(--gap)]",
            "flex-col sm:flex-row lg:flex-row"
          )}
        >
          {children}
        </div>

        {enableGlow && (
          <div
            ref={overlayRef}
            className={cn(
              "absolute inset-0 pointer-events-none select-none",
              "opacity-0 transition-all duration-[var(--animation-duration)] ease-out"
            )}
            style={overlayStyle}
          >
            <div
              className={cn(
                "flex items-center justify-center flex-wrap gap-[var(--gap)]",
                "flex-col sm:flex-row lg:flex-row"
              )}
            >
              {React.Children.map(children, (child) => {
                if (!React.isValidElement(child)) return child;

                if ((child.type as any) === GlowingCard) {
                  const cardProps = child.props as GlowingCardProps;
                  const cardGlowColor = cardProps.glowColor || glowColor;

                  const nextStyle: CSSVarStyle = {
                    ...(cardProps.style || {}),
                    backgroundColor: cardGlowColor + "1a",
                    borderColor: cardGlowColor,
                    boxShadow: `0 0 20px 0 ${cardGlowColor}40`,
                  };

                  // Create new props for the cloned element using a type assertion
                  const newProps = {
                    className: cn(
                      cardProps.className,
                      "bg-opacity-15 dark:bg-opacity-15"
                    ),
                    style: nextStyle,
                  };

                  return React.cloneElement(child, newProps);
                }
                return child;
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
);

GlowingCards.displayName = 'GlowingCards';

export { GlowingCard, GlowingCards };