import { useEffect, useRef, useState } from "react";

const NoteSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="px-6 py-20 md:py-28 bg-cream-dark/50"
    >
      <div className="max-w-2xl mx-auto">
        {/* Section header */}
        <div 
          className={`text-center mb-12 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-rose text-xs tracking-[0.25em] uppercase font-body font-light block mb-4">
            A Note
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground">
            As We Begin Again
          </h2>
        </div>

        {/* The note content */}
        <div 
          className={`space-y-6 transition-all duration-700 ease-out delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="font-body text-base md:text-lg text-charcoal-light leading-relaxed text-center">
            As another year comes to a close, I wanted to take a moment to tell you 
            how grateful I am to have you in my life.
          </p>

          <p className="font-body text-base md:text-lg text-charcoal-light leading-relaxed text-center">
            You bring warmth to ordinary days and make even the quiet moments feel meaningful. 
            Your kindness, your laugh, your way of seeing the world — these are gifts I don't take for granted.
          </p>

          <p className="font-body text-base md:text-lg text-charcoal-light leading-relaxed text-center">
            Here's to new beginnings, to adventures waiting to unfold, 
            and to all the simple joys the coming year will bring.
          </p>

          {/* Signature */}
          <div 
            className={`pt-8 text-center transition-all duration-700 ease-out delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="w-12 h-px bg-rose/40 mx-auto mb-6" />
            <p className="font-heading text-xl italic text-foreground">
              With love, always
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoteSection;
