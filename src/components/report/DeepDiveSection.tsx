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
                <div className="flex-1 h-px bg-foreground/10 relative overflow-hidden">
                  <div 
                    className="absolute left-0 top-0 h-full bg-accent transition-all duration-1000 ease-luxury"
                    style={{ 
                      width: isVisible ? `${Math.min(100, Math.max(5, (1 / point.pricePerMillion) * 20))}%` : '0%',
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
  const [selectedMonth, setSelectedMonth] = useState<number | null>(1);
  const timelineRef = useRef<HTMLDivElement>(null);

  const monthNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  // Group events by month number
  const eventsByMonth = monthNumbers.reduce((acc, month) => {
    const monthPrefix = monthNames[month - 1];
    acc[month] = pingPongWar.filter(e => e.date.startsWith(monthPrefix));
    return acc;
  }, {} as Record<number, typeof pingPongWar>);

  // Count by side per month
  const monthStats = monthNumbers.map(month => {
    const events = eventsByMonth[month];
    const china = events.filter(e => e.side === 'china').length;
    const us = events.filter(e => e.side === 'us').length;
    return { month, china, us, total: china + us };
  });

  const maxTotal = Math.max(...monthStats.map(s => s.total), 1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const displayEvents = selectedMonth !== null
    ? eventsByMonth[selectedMonth] 
    : pingPongWar;

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
            🇺🇸 vs 🇨🇳: An arms race with leads swapping weekly, sometimes daily.
            {pingPongWar.length} major model releases in 2025.
          </p>

          {/* Month selector bar chart - stacked bars */}
          <div className="mt-8 space-y-2">
            <span className="text-[10px] tracking-luxury uppercase text-muted-foreground">
              Filter by Month (Click to View Details)
            </span>
            
            {/* Legend for bar chart */}
            <div className="flex items-center gap-4 mt-2 mb-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 bg-amber-600" />
                <span className="text-[10px] text-muted-foreground">🇨🇳 China</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 bg-amber-300" />
                <span className="text-[10px] text-muted-foreground">🇺🇸 USA</span>
              </div>
            </div>

            {/* Bar chart grid - stacked bars */}
            <div className="flex items-end gap-1 sm:gap-2 h-24">
              {monthStats.map((stat, index) => {
                const totalHeight = (stat.total / maxTotal) * 80;
                const chinaHeight = stat.total > 0 ? (stat.china / stat.total) * totalHeight : 0;
                const usHeight = stat.total > 0 ? (stat.us / stat.total) * totalHeight : 0;
                
                return (
                  <button
                    key={stat.month}
                    onClick={() => setSelectedMonth(selectedMonth === stat.month ? null : stat.month)}
                    className={`flex-1 flex flex-col items-stretch transition-all duration-300 ease-luxury group ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                    } ${selectedMonth === stat.month ? 'ring-2 ring-accent ring-offset-1 ring-offset-primary' : ''}`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {/* Stacked bar container */}
                    <div 
                      className="w-full flex flex-col items-stretch justify-end"
                      style={{ height: '80px' }}
                    >
                      {/* China part (top - dark amber) */}
                      <div 
                        className="w-full bg-amber-600 transition-all duration-500 group-hover:brightness-110"
                        style={{ height: `${chinaHeight}px` }}
                      />
                      {/* US part (bottom - light amber) */}
                      <div 
                        className="w-full bg-amber-300 transition-all duration-500 group-hover:brightness-110"
                        style={{ height: `${usHeight}px` }}
                      />
                    </div>
                    {/* Month abbreviation label */}
                    <span className="text-[10px] sm:text-xs text-muted-foreground mt-1 text-center">
                      {monthNames[stat.month - 1]}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selection info */}
            <div className="flex justify-between mt-4 text-[10px] text-muted-foreground">
              <span>
                {selectedMonth !== null 
                  ? `${monthNames[selectedMonth - 1]}: 🇨🇳 ${monthStats[selectedMonth - 1].china} / 🇺🇸 ${monthStats[selectedMonth - 1].us}`
                  : 'Showing full year data'
                }
              </span>
              {selectedMonth !== null && (
                <button 
                  onClick={() => setSelectedMonth(null)}
                  className="text-accent hover:underline"
                >
                  Show All
                </button>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="border-t border-foreground/20 pt-4">
              <span className="font-serif text-3xl">{pingPongWar.filter(e => e.side === 'china').length}</span>
              <p className="text-[10px] text-muted-foreground mt-1">🇨🇳 China Releases</p>
            </div>
            <div className="border-t border-foreground/20 pt-4">
              <span className="font-serif text-3xl">{pingPongWar.filter(e => e.side === 'us').length}</span>
              <p className="text-[10px] text-muted-foreground mt-1">🇺🇸 USA Releases</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          {/* Timeline - center line on all screens */}
          <div className="relative">
            {/* Center line - visible on all screens */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-foreground/10 -translate-x-1/2" />

            <div className="space-y-2 sm:space-y-3">
              {displayEvents.map((event, index) => (
                <div 
                  key={`${event.date}-${event.model}-${index}`}
                  className={`flex items-center gap-1 sm:gap-2 transition-all duration-500 ease-luxury ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  } ${event.side === 'us' ? 'flex-row' : 'flex-row-reverse'}`}
                  style={{ transitionDelay: `${Math.min(index * 30, 300)}ms` }}
                >
                  {/* Content - US on left, China on right */}
                  <div className={`flex-1 min-w-0 ${event.side === 'us' ? 'text-right pr-1 sm:pr-2' : 'text-left pl-1 sm:pl-2'}`}>
                    <div className={`flex items-center gap-1 sm:gap-2 flex-wrap ${
                      event.side === 'us' ? 'justify-end' : 'justify-start'
                    }`}>
                      <span className="text-[8px] sm:text-[10px] text-muted-foreground">{event.date}</span>
                      <span className={`text-[8px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 rounded ${
                        event.side === 'us' ? 'bg-foreground/10' : 'bg-accent/20'
                      }`}>
                        {event.company}
                      </span>
                    </div>
                    <p className="font-serif text-xs sm:text-sm md:text-base mt-0.5 sm:mt-1 leading-tight truncate">
                      {event.model}
                    </p>
                  </div>
                  
                  {/* Center dot */}
                  <div className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full shrink-0 z-10 ${
                    event.side === 'us' ? 'bg-foreground' : 'bg-accent'
                  }`} />
                  
                  {/* Spacer for opposite side */}
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>

          {/* Legend - desktop */}
          <div className="mt-8 hidden lg:flex items-center justify-center gap-8 border-t border-foreground/10 pt-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-foreground" />
              <span className="text-xs text-muted-foreground">🇺🇸 USA</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent" />
              <span className="text-xs text-muted-foreground">🇨🇳 China</span>
            </div>
          </div>

          {/* Pull quote */}
          <div className="mt-8 p-6 bg-secondary/30">
            <p className="font-serif text-base md:text-lg italic text-center">
              "What used to be a six-month American lead became a weekly, sometimes daily, back-and-forth in 2025."
            </p>
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