const HeroSection = () => {
  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center px-6 py-16">
      <div className="text-center max-w-lg mx-auto">
        {/* Decorative element */}
        <div className="mb-8 section-fade-in">
          <span className="text-rose text-sm tracking-[0.3em] uppercase font-body font-light">
            ♥ 2025 → 2026 ♥
          </span>
        </div>

        {/* Main heading - Her name */}
        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground mb-4 section-fade-in-delayed leading-tight">
          Neelakshi
        </h1>

        {/* Nickname */}
        <p className="font-body text-lg md:text-xl text-rose font-light italic mb-6 section-fade-in-delayed">
          My Bittuuu 💕
        </p>

        {/* Subtle divider */}
        <div className="w-16 h-px bg-rose/40 mx-auto mb-6 section-fade-in-delayed" />

        {/* Subtitle */}
        <p className="font-body text-lg md:text-xl text-muted-foreground font-light leading-relaxed section-fade-in-delayed-2">
          The last message of 2025 & first of 2026 💕
        </p>

        {/* Scroll indicator */}
        <div className="mt-16 section-fade-in-delayed-2">
          <div className="w-6 h-10 rounded-full border-2 border-rose/30 mx-auto flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-rose/50 rounded-full animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
