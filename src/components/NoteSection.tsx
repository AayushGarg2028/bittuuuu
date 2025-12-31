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
            For My Bittuuu
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground">
            As We Step Into 2025
          </h2>
        </div>

        {/* The note content */}
        <div 
          className={`space-y-6 transition-all duration-700 ease-out delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="font-body text-base md:text-lg text-charcoal-light leading-relaxed text-center">
            This is the last message of 2024 and first message of 2025 — and I want it to be as special as you are for me. 🥹
          </p>

          <p className="font-body text-base md:text-lg text-charcoal-light leading-relaxed text-center">
            It's been a very great year for me, and you are the one who made it special. I can't recall any moment where I didn't think about you. Every day starts with your good morning message and ends with your good night.
          </p>

          <p className="font-body text-base md:text-lg text-charcoal-light leading-relaxed text-center">
            I remember when we first met playing Among Us — that time I didn't know how it would go between us.
          </p>

          <p className="font-body text-base md:text-lg text-charcoal-light leading-relaxed text-center">
            Then the first time I felt you 🥹 again in the reading hall when we were drawing... then the late night talks — the best convos of this year. Mujhe apne aap baatein mil rhi thi baat krne ke liye. I didn't want to search or prepare — it's just in us.
          </p>

          <p className="font-body text-base md:text-lg text-charcoal-light leading-relaxed text-center">
            Then the day you were very sad because of the result, thinking "kaise batau uncle ko" — and it went good. Then I confessed 🥰
          </p>

          <p className="font-body text-base md:text-lg text-charcoal-light leading-relaxed text-center">
            I think the best decision I have ever made was that. Maine nhi socha tha ki mai kr paunga, but I did. Then the first time we held hands — the experience I never felt before, that spark I never felt before. And it keeps on increasing 🥰
          </p>

          <p className="font-body text-base md:text-lg text-charcoal-light leading-relaxed text-center">
            I felt that peace around you — I never felt with anyone. The way you took care of me, that's something nobody did. Choti choti chizon ka dhyan dena related to me, jinko mai bhi ignore kr deta, unko bhi. You did that, and I am very grateful for that.
          </p>

          <p className="font-body text-base md:text-lg text-charcoal-light leading-relaxed text-center">
            I don't know where this year will take us, but I know God will do best. I always wished Him about your happiness and will always wish the same. When you are happy or when you laugh, I automatically become happy.
          </p>

          <p className="font-body text-base md:text-lg text-charcoal-light leading-relaxed text-center">
            At last, I just want to thank you — for helping me, for supporting me, for motivating me.
          </p>

          <p className="font-body text-base md:text-lg text-charcoal-light leading-relaxed text-center font-medium">
            May 2025 be the bestest year of your life. I will make sure I will always be there for you — from your lowest to highest, to entertain you, and to take care of my Bittuuu 🥰🤗
          </p>

          {/* Signature */}
          <div 
            className={`pt-8 text-center transition-all duration-700 ease-out delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="w-12 h-px bg-rose/40 mx-auto mb-6" />
            <p className="font-heading text-2xl text-foreground">
              Happy Happy Happy New Year! 🥰🥰🥰😘
            </p>
            <p className="font-body text-base text-muted-foreground mt-4 italic">
              With all my love, forever yours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoteSection;
