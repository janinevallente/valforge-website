import AboutMe from "../assets/Images/about-me.webp";

const About = () => {
  return (
    <section id="about" className="relative py-32 px-4 overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Left vertical accent */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-10 md:mb-16 section-enter">
          <div className="section-tag mb-4">PILOT PROFILE</div>
          <div className="flex items-end gap-6">
            <h2 className="font-teko font-bold text-4xl sm:text-6xl md:text-8xl tracking-[0.05em] text-white leading-none">
              MEET THE <span className="text-primary">BUILDER</span>
            </h2>
            <div className="hidden md:block mb-3 w-32 h-px bg-gradient-to-r from-primary/50 to-transparent" />
          </div>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-0 items-start">
          {/* Image col */}
          <div className="relative section-enter lg:pr-12">
            {/* Decorative frame */}
            <div className="relative inline-block w-full max-w-md">
              {/* Corner bracket top-left */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-primary z-10" />
              {/* Corner bracket bottom-right */}
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-primary z-10" />

              {/* Red stripe accent */}
              <div className="absolute top-0 left-0 w-1 h-full bg-primary/30" />

              <img
                src={AboutMe}
                alt="J9 — The Builder"
                className="w-full object-cover grayscale contrast-110 brightness-90 transition-all duration-500 hover:grayscale-0"
                style={{ clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)" }}
              />
            </div>
          </div>

          {/* Text col */}
          <div className="section-enter lg:pl-8 border-l border-border/50 mt-8 lg:mt-0">
            {/* Profile header */}
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-border/50">
              <div className="w-12 h-12 border border-primary/40 flex items-center justify-center bg-primary/5">
                <span className="font-teko font-bold text-xl text-primary">J9</span>
              </div>
              <div>
                <div className="font-teko font-bold text-2xl text-white tracking-wider">JANINE VALLENTE</div>
                <div className="font-mono-tech text-[10px] text-primary/60 tracking-widest mt-0.5">GUNPLA BUILDER · GUNPLA CEBU</div>
              </div>
            </div>

            {/* Bio paragraphs */}
            <div className="space-y-5">
              <p className="font-exo text-base text-foreground/60 leading-relaxed">
                Hi, I'm <span className="text-primary font-semibold">J9</span>, a Gunpla enthusiast and builder from the{" "}
                <span className="text-foreground/80 font-semibold">Gunpla Cebu Community</span>. My love for mechas 
                began as a shared passion with my uncle, whose fascination with these machines inspired me to dive 
                into the world of model building.
              </p>

              <p className="font-exo text-base text-foreground/60 leading-relaxed">
                What started as a simple hobby has grown into a deep commitment to crafting premium, highly detailed 
                Gunpla builds that bring Mobile Suits to life. I specialize in{" "}
                <span className="text-primary font-semibold">straight builds</span> and{" "}
                <span className="text-primary font-semibold">waterslide decal applications</span>, focusing on 
                achieving that authentic, anime-accurate look every Gundam deserves.
              </p>

              <p className="font-exo text-base text-foreground/60 leading-relaxed">
                Each project is treated with precision and care — from panel lining to final finish — ensuring 
                that every model captures the soul and craftsmanship of the original design.
              </p>
            </div>

            {/* Capability bars */}
            <div className="mt-10 space-y-4">
              <div className="font-mono-tech text-[10px] text-foreground/30 tracking-widest mb-4">
                — TECHNICAL CAPABILITIES
              </div>
              {[
                { skill: "STRAIGHT BUILD", level: 95 },
                { skill: "WATERSLIDE DECALS", level: 90 },
                { skill: "PANEL LINING", level: 88 },
                { skill: "TOP COAT FINISH", level: 82 },
              ].map((item) => (
                <div key={item.skill} className="flex items-center gap-4">
                  <span className="font-exo text-xs text-foreground/50 tracking-wider w-40 shrink-0">{item.skill}</span>
                  <div className="flex-1 h-[3px] bg-border overflow-hidden">
                    <div
                      className="h-full bg-primary"
                      style={{
                        width: `${item.level}%`,
                        boxShadow: "2px 0 8px hsl(0 85% 52% / 0.6)",
                      }}
                    />
                  </div>
                  <span className="font-mono-tech text-[10px] text-primary/60 w-8 text-right">{item.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;