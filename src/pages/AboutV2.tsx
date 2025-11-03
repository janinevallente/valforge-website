import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import AboutMe from "../assets/Images/about-me-v2.png";

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="relative pt-32 pb-20 px-4">
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              ABOUT THE BUILDER
            </Badge>
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              MEET THE BUILDER
            </h1>
          </div>

          {/* Image above text */}
          <div className="flex flex-col items-center gap-10" style={{ animationDelay: "0.1s" }}>
            {/* Image */}
            <div className="w-full flex justify-center animate-fade-in-up">
              <img
                src={AboutMe}
                alt="about-the-builder"
                className="
                  rounded-lg 
                  shadow-lg 
                  w-full 
                  max-w-2xl 
                  sm:max-w-3xl 
                  lg:max-w-3xl 
                  object-cover 
                  transition-transform 
                  duration-500 
                  hover:scale-105
                "
              />
            </div>

            {/* Text */}
            <div className="w-full space-y-5 sm:space-y-6 text-center px-2 sm:px-0 animate-fade-in-up">
              <p className="font-rajdhani text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                Hi, I’m <span className="text-primary font-semibold">J9</span>, a Gunpla enthusiast and builder from the{" "}
                <span className="text-primary font-semibold">Gunpla Cebu Community</span>. My love for mechas began as a shared passion with my uncle,
                whose fascination with these inspired me to dive into the world of model building.
              </p>

              <p className="font-rajdhani text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                What started as a simple hobby has grown into a deep commitment to crafting premium,
                highly detailed Gunpla builds that bring Mobile Suits to life. I specialize in{" "}
                <span className="text-primary font-semibold">straight builds</span> and{" "}
                <span className="text-primary font-semibold">waterslide decal applications</span>, focusing on achieving that authentic, anime-accurate
                look every Gundam deserves. Each project I take on is treated with precision and care—from panel
                lining to final finish—ensuring that every model captures the soul and craftsmanship of the original design.
              </p>

              <p className="font-rajdhani text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                Whether you're looking to add a built Gunpla to your collection or need commission work done on your favorite Mobile Suit,
                I’m here to bring your vision to life with quality craftsmanship and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
