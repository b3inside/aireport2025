import { useEffect, useState, useRef } from "react";
import { AnimatedCounter, VerticalText } from "./VisualElements";
import { modelNames } from "@/data/reportData";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-end pb-20 md:pb-32 px-8 md:px-16 overflow-hidden"
    >
      {/* Decorative vertical text */}
      <VerticalText 
        text="Annual Report / Vol. 01" 
        className="absolute left-8 top-1/2 -translate-y-1/2"
      />

      {/* Main content - bottom left aligned */}
      <div className="relative z-10 max-w-[1600px] mx-auto w-full">
        {/* Overline with decorative line */}
        <div 
          className={`flex items-center gap-4 mb-8 transition-all duration-1000 ease-luxury ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="h-px w-8 md:w-12 bg-foreground/40" />
          <span className="text-[10px] md:text-xs tracking-luxury uppercase text-muted-foreground">
            The Definitive Chronicle
          </span>
        </div>

        {/* Year - massive typography */}
        <div 
          className={`transition-all duration-1000 ease-luxury ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <h1 className="font-serif text-[8rem] md:text-[12rem] lg:text-[16rem] leading-headline tracking-tight text-foreground">
            2025
          </h1>
        </div>

        {/* Subtitle with italic emphasis */}
        <div 
          className={`mt-4 md:mt-0 transition-all duration-1000 ease-luxury ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <h2 className="font-serif text-3xl md:text-5xl lg:text-7xl leading-tight">
            The Year{" "}
            <em className="text-accent">Everything</em>
            <br />
            Changed
          </h2>
        </div>

        {/* Animated model names */}
        <div 
          className={`mt-12 md:mt-16 transition-all duration-1000 ease-luxury ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <p className="text-sm md:text-base text-muted-foreground max-w-md">
            From <AnimatedCounter items={modelNames} /> to the rise of agents,
            this is the story of AI's most transformative year.
          </p>
        </div>

        {/* Scroll indicator */}
        <div 
          className={`mt-16 md:mt-24 transition-all duration-1000 ease-luxury ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1000ms' }}
        >
          <div className="flex items-center gap-4">
            <div className="h-px w-8 bg-foreground/20" />
            <span className="text-[10px] tracking-luxury uppercase text-muted-foreground">
              Scroll to explore
            </span>
          </div>
        </div>
      </div>

      {/* Right side decorative element */}
      <div 
        className={`absolute right-8 md:right-16 bottom-20 md:bottom-32 transition-all duration-1000 ease-luxury ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1200ms' }}
      >
        <VerticalText 
          text="AI Industry Report" 
          className="text-right"
        />
      </div>
    </section>
  );
};