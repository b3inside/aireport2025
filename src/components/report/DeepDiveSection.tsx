import { priceDeflation, pingPongWar, personalityMilestones } from "@/data/reportData";
import { useEffect, useRef, useState } from "react";

const DeflationChart = () => {
  const [isVisible, setIsVisible] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={chartRef}
      className={`border-t border-foreground/10 py-16 md:py-24 transition-all duration-1000 ease-luxury ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-4">
          <span className="text-[10px] tracking-luxury uppercase text-muted-foreground">
            Analytics 01
          </span>
          <h3 className="font-serif text-3xl md:text-4xl mt-4">
            The Great{" "}
            <em className="text-accent">Deflation</em>
          </h3>
          <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed">
            When intelligence became cheaper than water. The cost per million tokens 
            collapsed 500x in twelve months.
          </p>
        </div>

        <div className="lg:col-span-8">
          <div className="space-y-6">
            {priceDeflation.map((point, index) => (
              <div 
                key={point.date}
                className={`flex items-center gap-6 transition-all duration-700 ease-luxury ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <span className="text-xs text-muted-foreground w-20 shrink-0">
                  {point.date}
                </span>
                <div className="flex-1 h-px bg-foreground/10 relative">
                  <div 
                    className="absolute left-0 top-0 h-full bg-accent transition-all duration-1000 ease-luxury"
                    style={{ 
                      width: isVisible ? `${Math.max(5, (1 / point.pricePerMillion) * 20)}%` : '0%',
                      transitionDelay: `${index * 150 + 300}ms`
                    }}
                  />
                </div>
                <div className="text-right shrink-0 w-32">
                  <span className="font-serif text-2xl md:text-3xl">
                    ${point.pricePerMillion < 1 ? point.pricePerMillion.toFixed(2) : point.pricePerMillion}
                  </span>
                  <span className="text-[10px] text-muted-foreground block">
                    per 1M tokens
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Books metaphor */}
          <div className="mt-12 p-8 bg-secondary/50">
            <p className="font-serif text-lg md:text-xl italic text-center">
              "In January, $1 bought one Harry Potter analysis.
              <br />
              By December, $1 bought an entire library."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PingPongTimeline = () => {
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={timelineRef}
      className={`border-t border-foreground/10 py-16 md:py-24 transition-all duration-1000 ease-luxury ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-4">
          <span className="text-[10px] tracking-luxury uppercase text-muted-foreground">
            Analytics 02
          </span>
          <h3 className="font-serif text-3xl md:text-4xl mt-4">
            The Ping-Pong{" "}
            <em className="text-accent">War</em>
          </h3>
          <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed">
            USA vs China: A volley-by-volley chronicle. What was once a six-month lead 
            became a week-by-week exchange.
          </p>
        </div>

        <div className="lg:col-span-8">
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-foreground/10 hidden md:block" />

            <div className="space-y-4">
              {pingPongWar.map((event, index) => (
                <div 
                  key={`${event.date}-${event.model}`}
                  className={`flex items-center gap-4 transition-all duration-700 ease-luxury ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  } ${event.side === 'us' ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`flex-1 ${event.side === 'us' ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="text-xs text-muted-foreground">{event.date}</span>
                    <p className="font-serif text-lg md:text-xl mt-1">
                      {event.model}
                    </p>
                    <span className="text-[10px] tracking-luxury uppercase text-accent">
                      {event.action}
                    </span>
                  </div>
                  
                  <div className={`w-3 h-3 rounded-full shrink-0 ${
                    event.side === 'us' ? 'bg-foreground' : 'bg-accent'
                  }`} />
                  
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="mt-12 flex items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-foreground" />
              <span className="text-xs text-muted-foreground">USA</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent" />
              <span className="text-xs text-muted-foreground">China</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PersonalitySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={sectionRef}
      className={`border-t border-foreground/10 py-16 md:py-24 transition-all duration-1000 ease-luxury ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-4">
          <span className="text-[10px] tracking-luxury uppercase text-muted-foreground">
            Analytics 03
          </span>
          <h3 className="font-serif text-3xl md:text-4xl mt-4">
            The Uncanny{" "}
            <em className="text-accent">Valley</em>
          </h3>
          <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed">
            When AI learned to pause, flirt, and argue. The Turing test didn't collapse—
            it became irrelevant.
          </p>
        </div>

        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalityMilestones.map((milestone, index) => (
              <div 
                key={milestone.trait}
                className={`border-t border-foreground p-6 transition-all duration-700 ease-luxury hover:bg-secondary/50 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="text-[10px] tracking-luxury uppercase text-muted-foreground">
                  {milestone.date} 2025
                </span>
                <h4 className="font-serif text-2xl mt-3 text-accent">
                  {milestone.trait}
                </h4>
                <p className="text-sm text-muted-foreground mt-2">
                  {milestone.model}
                </p>
                <p className="text-sm text-foreground/80 mt-4 leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>

          {/* Pull quote */}
          <div className="mt-12 border-l-4 border-accent pl-6 py-4">
            <p className="font-serif text-xl md:text-2xl italic">
              "IQ 180 PhD, occasionally drinks too much."
            </p>
            <span className="text-xs text-muted-foreground mt-2 block">
              — On AI hallucinations, 2025
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DeepDiveSection = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-primary text-primary-foreground">
      <div className="px-8 md:px-16 py-24 md:py-32">
        <div className="max-w-[1600px] mx-auto">
          {/* Section header */}
          <div 
            ref={headerRef}
            className={`mb-16 md:mb-24 transition-all duration-1000 ease-luxury ${
              isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] tracking-luxury uppercase text-primary-foreground/60">
                Part Two
              </span>
              <div className="h-px flex-1 bg-primary-foreground/10 max-w-[100px]" />
            </div>
            
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl">
              Deep Dive{" "}
              <em className="text-accent">Analytics</em>
            </h2>
            
            <p className="mt-6 text-primary-foreground/70 max-w-xl text-base md:text-lg">
              Beyond the headlines. The data that reveals what really happened 
              when intelligence became a commodity.
            </p>
          </div>

          {/* Analytics components */}
          <DeflationChart />
          <PingPongTimeline />
          <PersonalitySection />
        </div>
      </div>
    </section>
  );
};