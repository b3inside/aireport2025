import { monthlyMVPs, type MonthlyMVP } from "@/data/reportData";
import { useEffect, useRef, useState } from "react";

// Import month images
import month01 from "@/assets/months/01-january.jpg";
import month02 from "@/assets/months/02-february.jpg";
import month03 from "@/assets/months/03-march.jpg";
import month04 from "@/assets/months/04-april.jpg";
import month05 from "@/assets/months/05-may.jpg";
import month06 from "@/assets/months/06-june.jpg";
import month07 from "@/assets/months/07-july.jpg";
import month08 from "@/assets/months/08-august.jpg";
import month09 from "@/assets/months/09-september.jpg";
import month10 from "@/assets/months/10-october.jpg";
import month11 from "@/assets/months/11-november.jpg";
import month12 from "@/assets/months/12-december.jpg";

const monthImages: Record<number, string> = {
  1: month01,
  2: month02,
  3: month03,
  4: month04,
  5: month05,
  6: month06,
  7: month07,
  8: month08,
  9: month09,
  10: month10,
  11: month11,
  12: month12,
};

interface MonthCardProps {
  data: MonthlyMVP;
  index: number;
}

const MonthCard = ({ data, index }: MonthCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={cardRef}
      className={`group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-16 md:py-24 border-t border-foreground/10 transition-all duration-700 ease-luxury ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Month indicator */}
      <div className={`lg:col-span-2 ${isEven ? 'lg:order-1' : 'lg:order-1'}`}>
        <div className="sticky top-32">
          <span className="text-[10px] tracking-luxury uppercase text-muted-foreground">
            Month {String(data.monthNumber).padStart(2, '0')}
          </span>
          <h3 className="font-serif text-4xl md:text-5xl mt-2">
            {data.month}
          </h3>
        </div>
      </div>

      {/* Image */}
      <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-3'}`}>
        <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
          {monthImages[data.monthNumber] ? (
            <img
              src={monthImages[data.monthNumber]}
              alt={`${data.month} - ${data.title}`}
              className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-luxury"
            />
          ) : (
            /* Placeholder for months without images */
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl md:text-8xl font-serif text-foreground/10">
                  {String(data.monthNumber).padStart(2, '0')}
                </span>
              </div>
            </div>
          )}
          {/* Inner border shadow */}
          <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]" />
        </div>
      </div>

      {/* Content */}
      <div className={`lg:col-span-5 flex flex-col justify-end ${isEven ? 'lg:order-3' : 'lg:order-2'}`}>
        <div className="space-y-6">
          {/* Title with italic emphasis */}
          <h4 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">
            {data.title}{" "}
            {data.titleEmphasis && (
              <em className="text-accent">{data.titleEmphasis}</em>
            )}
          </h4>

          {/* MVP badge */}
          <div className="flex items-center gap-3">
            <span className="text-[10px] tracking-luxury uppercase text-muted-foreground">
              MVP
            </span>
            <div className="h-px flex-1 bg-foreground/10" />
          </div>

          <p className="font-serif text-xl md:text-2xl text-foreground/90">
            {data.mvp}
          </p>

          {/* Reason */}
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md">
            {data.reason}
          </p>

          {/* Category tag */}
          <div className="pt-4">
            <span className="text-[10px] tracking-luxury uppercase text-accent border-b border-accent pb-1">
              {data.category.replace('-', ' ')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MonthlyMVPSection = () => {
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
    <section className="relative px-8 md:px-16 py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto">
        {/* Section header */}
        <div 
          ref={headerRef}
          className={`mb-16 md:mb-24 transition-all duration-1000 ease-luxury ${
            isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] tracking-luxury uppercase text-muted-foreground">
              Part One
            </span>
            <div className="h-px flex-1 bg-foreground/10 max-w-[100px]" />
          </div>
          
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl">
            The Monthly{" "}
            <em className="text-accent">MVP</em>
          </h2>
          
          <p className="mt-6 text-muted-foreground max-w-xl text-base md:text-lg">
            Twelve months. Twelve moments that defined the trajectory of artificial intelligence. 
            Each entry marks a turning point in the relentless march of progress.
          </p>
        </div>

        {/* Month cards */}
        <div>
          {monthlyMVPs.map((mvp, index) => (
            <MonthCard key={mvp.month} data={mvp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};