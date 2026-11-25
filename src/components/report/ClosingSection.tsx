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
                Questions for{" "}
                <em className="text-accent">2026</em>
              </h2>
              
              <div className="mt-12 space-y-6 text-primary-foreground/80">
                <p className="text-lg md:text-xl leading-relaxed drop-cap">
                  In 2025, reasoning models, multimodal tools, and agents became available in more products.
                  The releases in this report point to questions about reliability, cost, and where these tools
                  help in everyday work.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-end">
              {/* Key predictions */}
              <div className="space-y-8">
                <div className="border-t border-primary-foreground/20 pt-6">
                  <span className="text-[10px] tracking-luxury uppercase text-primary-foreground/60">
                    Agents
                  </span>
                  <p className="font-serif text-xl md:text-2xl mt-2">
                    Which tasks can agents complete reliably with human oversight?
                  </p>
                </div>
                
                <div className="border-t border-primary-foreground/20 pt-6">
                  <span className="text-[10px] tracking-luxury uppercase text-primary-foreground/60">
                    Pricing
                  </span>
                  <p className="font-serif text-xl md:text-2xl mt-2">
                    How does the cost per completed task change as models and tools evolve?
                  </p>
                </div>
                
                <div className="border-t border-primary-foreground/20 pt-6">
                  <span className="text-[10px] tracking-luxury uppercase text-primary-foreground/60">
                    Workflows
                  </span>
                  <p className="font-serif text-xl md:text-2xl mt-2">
                    Where do AI tools fit into existing creative and technical work?
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
              </div>
              
              <p className="text-[10px] text-primary-foreground/40">
                Compiled by Charles and the YLWS group. Original announcements are linked throughout the report.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
