import { useEffect, useRef, useState } from "react";

export const ClosingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
    <section 
      ref={sectionRef}
      className="relative bg-primary text-primary-foreground"
    >
      <div className="px-8 md:px-16 py-24 md:py-32">
        <div className="max-w-[1600px] mx-auto">
          {/* Main closing content */}
          <div 
            className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 transition-all duration-1000 ease-luxury ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="lg:col-span-7">
              <span className="text-[10px] tracking-luxury uppercase text-primary-foreground/60">
                Looking Forward
              </span>
              
              <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mt-6">
                What{" "}
                <em className="text-accent">2026</em>
                <br />
                Holds
              </h2>
              
              <div className="mt-12 space-y-6 text-primary-foreground/80">
                <p className="text-lg md:text-xl leading-relaxed drop-cap">
                  If 2025 taught us anything, it's that predictions are futile. 
                  The models that dominated January were relics by December. 
                  The companies that seemed untouchable faced existential threats 
                  from open-source alternatives.
                </p>
                
                <p className="text-lg md:text-xl leading-relaxed">
                  Yet certain trajectories seem inevitable: agents will become 
                  more autonomous, reasoning will become standard, and the line 
                  between human and artificial creativity will blur further.
                </p>
                
                <p className="text-lg md:text-xl leading-relaxed">
                  The only certainty? Next year's report will need to be 
                  rewritten from scratch.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-end">
              {/* Key predictions */}
              <div className="space-y-8">
                <div className="border-t border-primary-foreground/20 pt-6">
                  <span className="text-[10px] tracking-luxury uppercase text-primary-foreground/60">
                    Prediction 01
                  </span>
                  <p className="font-serif text-xl md:text-2xl mt-2">
                    Autonomous agents will handle 30% of routine knowledge work
                  </p>
                </div>
                
                <div className="border-t border-primary-foreground/20 pt-6">
                  <span className="text-[10px] tracking-luxury uppercase text-primary-foreground/60">
                    Prediction 02
                  </span>
                  <p className="font-serif text-xl md:text-2xl mt-2">
                    API costs will drop another 10x—intelligence becomes utility-priced
                  </p>
                </div>
                
                <div className="border-t border-primary-foreground/20 pt-6">
                  <span className="text-[10px] tracking-luxury uppercase text-primary-foreground/60">
                    Prediction 03
                  </span>
                  <p className="font-serif text-xl md:text-2xl mt-2">
                    The first "AI-native" company will reach $10B valuation
                  </p>
                </div>
              </div>
            </div>
          </div>


          {/* Footer */}
          <div 
            className={`mt-24 md:mt-32 pt-8 border-t border-primary-foreground/10 transition-all duration-1000 ease-luxury ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex items-center gap-4">
                <span className="font-serif text-lg">2025 AI Report</span>
                <div className="h-4 w-px bg-primary-foreground/20" />
                <span className="text-[10px] tracking-luxury uppercase text-primary-foreground/60">
                  Vol. 01
                </span>
              </div>
              
              <p className="text-[10px] text-primary-foreground/40">
                © 2025. Crafted with intention. All data sourced from public announcements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};