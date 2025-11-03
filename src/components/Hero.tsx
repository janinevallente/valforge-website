import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/Images/gundam-hero.webp"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
      <div className="relative z-20 container mx-auto px-4 text-center mt-20 md:mt-10">
        <div className="animate-fade-in-up">
          {/* Japanese Subtitle */}
          <p className="text-primary font-rajdhani text-sm md:text-base tracking-widest mb-4 animate-glow-pulse">
            機動戦士ガンダム
          </p>
          
          {/* Main Title */}
          <h1 className="font-orbitron font-black text-5xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            VALFORGE
          </h1>
          
          {/* Subtitle */}
          <h2 className="font-rajdhani text-2xl md:text-3xl lg:text-4xl font-light text-muted-foreground mb-8 tracking-wide">
            MOBILE SUIT COLLECTION
          </h2>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground mb-12 font-rajdhani">
            Explore my Gundam collection and gunpla commission services. 
            Specializing in straight builds and waterslide decals for that authentic, premium finish.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="group relative font-orbitron font-bold text-base md:text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_50px_hsl(var(--primary)/0.8)] transition-all duration-300"
              asChild
            >
              <Link to="/collection">
                VIEW COLLECTION
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="group relative font-orbitron font-bold text-base md:text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.6)] transition-all duration-300"
              asChild
            >
              <Link to="/commission">
                COMMISSION WORK
              </Link>
            </Button>
          </div>
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-left">
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
