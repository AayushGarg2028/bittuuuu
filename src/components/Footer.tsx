const Footer = () => {
  return (
    <footer className="px-6 py-16 text-center">
      <div className="max-w-lg mx-auto">
        {/* Main message */}
        <p className="font-heading text-2xl md:text-3xl text-foreground mb-4">
          Happy New Year ✨
        </p>

        {/* Subtle divider */}
        <div className="w-8 h-px bg-rose/30 mx-auto mb-6" />

        {/* Signature */}
        <p className="font-body text-sm text-muted-foreground tracking-wide">
          Made with love
        </p>

        {/* Year */}
        <p className="font-body text-xs text-muted-foreground/60 mt-4 tracking-widest">
          2025 → 2026 ♥
        </p>
      </div>
    </footer>
  );
};

export default Footer;
