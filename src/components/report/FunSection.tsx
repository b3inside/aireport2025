import { sherlockedVictims, glossary2025 } from "@/data/reportData";
import { useEffect, useRef, useState } from "react";

const SherlockedAwards = () => {
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
            The Awards
          </span>
          <h3 className="font-serif text-3xl md:text-4xl mt-4">
            The{" "}
            <em className="text-accent">"Sherlocked"</em>
            <br />Awards
          </h3>
          <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed">
            A memorial for products launched moments before AI giants decided 
            to build the feature themselves.
          </p>
        </div>

        <div className="lg:col-span-8">
          <div className="space-y-8">
            {sherlockedVictims.map((victim, index) => (
              <div 
                key={victim.product}
                className={`border-t-4 border-foreground p-8 bg-secondary/30 transition-all duration-700 ease-luxury ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-serif text-2xl md:text-3xl">
                      {victim.product}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      Killed by: <span className="text-accent">{victim.killer}</span>
                    </p>
                  </div>
                  <span className="text-4xl opacity-20">†</span>
                </div>
                <p className="font-serif text-lg italic text-foreground/80 mt-6">
                  "{victim.epitaph}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Glossary = () => {
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
            Lexicon
          </span>
          <h3 className="font-serif text-3xl md:text-4xl mt-4">
            2025{" "}
            <em className="text-accent">Glossary</em>
          </h3>
          <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed">
            The vocabulary that emerged from the chaos. 
            Words that didn't exist in January.
          </p>
        </div>

        <div className="lg:col-span-8">
          <div className="space-y-12">
            {glossary2025.map((entry, index) => (
              <div 
                key={entry.term}
                className={`transition-all duration-700 ease-luxury ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-baseline gap-4">
                  <h4 className="font-serif text-3xl md:text-4xl">
                    <span className="text-accent text-5xl md:text-6xl float-left mr-3 leading-[0.8]">
                      {entry.term[0]}
                    </span>
                    {entry.term.slice(1)}
                  </h4>
                </div>
                {entry.pronunciation && (
                  <p className="text-sm text-muted-foreground mt-2 ml-12 md:ml-16">
                    {entry.pronunciation}
                  </p>
                )}
                <p className="text-base md:text-lg text-foreground/80 mt-4 ml-12 md:ml-16 leading-relaxed">
                  {entry.definition}
                </p>
                <div className="h-px bg-foreground/10 mt-8 ml-12 md:ml-16" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const FunSection = () => {
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
              Part Three
            </span>
            <div className="h-px flex-1 bg-foreground/10 max-w-[100px]" />
          </div>
          
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl">
            The{" "}
            <em className="text-accent">Lighter</em>
            {" "}Side
          </h2>
          
          <p className="mt-6 text-muted-foreground max-w-xl text-base md:text-lg">
            Not everything was serious. Some things were just absurd—
            and we catalogued them all.
          </p>
        </div>

        {/* Fun components */}
        <SherlockedAwards />
        <Glossary />
      </div>
    </section>
  );
};