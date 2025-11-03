import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/Images/gundam-hero.webp"

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background"></div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 z-10 opacity-20">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Glowing Accent Lines */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-glow-pulse z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent animate-glow-pulse z-10" style={{ animationDelay: '1s' }}></div>

      {/* Content */}
      <div className="hero-content relative z-20 container mx-auto px-4 text-center mt-20 md:mt-10">
        <div className="animate-fade-in-up">
          {/* Japanese Subtitle */}
          <p className="text-primary font-rajdhani text-sm md:text-base tracking-widest mb-4 animate-glow-pulse">
            機動戦士ガンダム
          </p>
          
          {/* Main Title */}
          <h1 className="font-orbitron font-black text-4xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            VALFORGE
          </h1>
          
          {/* Subtitle */}
          <h2 className="font-rajdhani text-2xl md:text-3xl lg:text-4xl font-light text-muted-foreground mb-8 tracking-wide">
            PRECISION GUNPLA CRAFTSMANSHIP
          </h2>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground mb-12 font-rajdhani">
            Explore my Gundam collection and gunpla commission services. 
            Specializing in straight builds and waterslide decals for that authentic, premium finish.
          </p>
        </div>
      </div>

      {/* Scroll Indicator - Moved outside hero-content */}
      <div className="absolute bottom-8 md:bottom-20 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="font-rajdhani text-sm uppercase tracking-widest">Explore More</span>
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary/70 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;