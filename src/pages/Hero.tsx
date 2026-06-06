import heroImage from "@/assets/Images/gundam-hero.webp";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-[60px]"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Hero Gundam"
          className="w-full h-full object-cover object-center mt-5 lg:mt-12"
        />
        {/* Multi-layered overlay for Gundam dark aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220_15%_4%/0.97)] via-[hsl(220_15%_4%/0.75)] to-[hsl(220_15%_4%/0.3)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_15%_4%)] via-transparent to-[hsl(220_15%_4%/0.6)]" />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 z-0 grid-bg opacity-40" />

      {/* Scanline on right portion */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-transparent"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, hsl(0 0% 0% / 0.03) 3px, hsl(0 0% 0% / 0.03) 4px)"
          }}
        />
      </div>

      {/* Vertical accent line */}
      <div className="absolute left-[calc(50%-1px)] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent z-10 hidden lg:block" />

      {/* Left content */}
      <div className="relative z-20 container mx-auto px-4 md:px-8">
        <div className="max-w-2xl">

          {/* Status indicator */}
          <div className="flex items-center gap-3 mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
              <span className="font-mono-tech text-[10px] text-primary/80 tracking-widest uppercase">
                UNIT ACTIVE · CEBU CITY, PH
              </span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
          </div>

          {/* Japanese subtitle */}
          <div className="animate-fade-in-up mb-3" style={{ animationDelay: "0.2s" }}>
            <span className="font-mono-tech text-xs text-primary/60 tracking-[0.3em]">
              機動戦士ガンダム — GUNPLA CRAFTSMANSHIP
            </span>
          </div>

          {/* Main title */}
          <div className="animate-fade-in-up overflow-hidden" style={{ animationDelay: "0.3s" }}>
            <h3 className="font-teko font-bold leading-none tracking-[0.05em] text-white"
              style={{ fontSize: "clamp(4.5rem, 12vw, 9rem)" }}>
              VAL
              <span className="text-primary">FORGE</span>
            </h3>
          </div>

          {/* Tagline */}
          <div className="animate-fade-in-up mt-2 mb-8" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-primary" />
              <p className="font-exo font-light text-lg md:text-xl text-foreground/70 tracking-wider uppercase">
                Precision Gunpla Craftsmanship
              </p>
            </div>
          </div>

          {/* Description */}
          <p
            className="font-exo text-base text-foreground/50 leading-relaxed max-w-lg mb-10 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            Explore handcrafted Gundam model kits and commission services. Specializing in 
            straight builds and waterslide decals for that authentic, premium finish.
          </p>

          {/* Spec panel */}
          <div className="mt-14 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
            <div className="flex flex-wrap gap-8">
              {[
                { label: "SPECIALTY", value: "STRAIGHT BUILDS" },
                { label: "FINISH", value: "WATERSLIDE DECALS" },
                { label: "COMMUNITY", value: "GUNPLA CEBU COMMUNITY" },
              ].map((spec) => (
                <div key={spec.label} className="flex flex-col gap-1">
                  <span className="font-mono-tech text-[9px] text-primary/50 tracking-[0.25em]">
                    {spec.label}
                  </span>
                  <span className="font-exo font-semibold text-sm text-foreground/80 tracking-wider">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom HUD overlay */}
      <div className="absolute bottom-8 left-0 right-0 z-20 container mx-auto px-4 md:px-8 flex items-end justify-between">
        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-2">
          {/* <div className="w-px h-12 bg-gradient-to-b from-transparent to-primary/50" />
          <span className="font-mono-tech text-[9px] text-foreground/30 tracking-widest rotate-90 origin-center translate-y-0">
            SCROLL
          </span> */}
        </div>
        {/* Corner decoration */}
        <div className="hidden md:block font-mono-tech text-[9px] text-foreground/20 tracking-widest text-right">
          <div>UNIT: VALFORGE-001</div>
          <div>STATUS: OPERATIONAL</div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;