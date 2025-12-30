import { useEffect, useState } from "react";

interface GridLinesProps {
  lineCount?: number;
}

export const GridLines = ({ lineCount = 4 }: GridLinesProps) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-40 hidden lg:flex justify-between px-16 max-w-[1600px] mx-auto left-0 right-0">
      {Array.from({ length: lineCount }).map((_, i) => (
        <div
          key={i}
          className="w-px h-full bg-foreground/[0.08]"
        />
      ))}
    </div>
  );
};

export const PaperTexture = () => {
  return <div className="paper-texture" aria-hidden="true" />;
};

interface AnimatedCounterProps {
  items: string[];
  interval?: number;
}

export const AnimatedCounter = ({ items, interval = 150 }: AnimatedCounterProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (!isAnimating) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, interval);

    // Stop after a few cycles
    const stopTimer = setTimeout(() => {
      setIsAnimating(false);
    }, items.length * interval * 3);

    return () => {
      clearInterval(timer);
      clearTimeout(stopTimer);
    };
  }, [items, interval, isAnimating]);

  return (
    <span className={`inline-block transition-opacity duration-100 ${isAnimating ? 'animate-counter-spin' : ''}`}>
      {items[currentIndex]}
    </span>
  );
};

interface VerticalTextProps {
  text: string;
  className?: string;
}

export const VerticalText = ({ text, className = "" }: VerticalTextProps) => {
  return (
    <span 
      className={`vertical-text text-xs tracking-luxury uppercase text-muted-foreground hidden lg:block ${className}`}
    >
      {text}
    </span>
  );
};