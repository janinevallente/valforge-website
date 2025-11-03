import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import AboutMe from "../assets/Images/about-me.webp";

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <section id="about" className="relative pt-32 pb-20 px-4">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              ABOUT THE BUILDER
            </Badge>
            <h1 className="text-4xl md:text-7xl font-orbitron font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              MEET THE BUILDER
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16"
            style={{ animationDelay: "0.1s" }}>
            <div
              className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-fade-in-up">
              <img
                src={AboutMe}
                alt="about-the-builder"
                className="rounded-lg shadow-lg w-full max-w-sm sm:max-w-md object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-5 sm:space-y-6 text-center lg:text-left px-2 sm:px-0 animate-fade-in-up">
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
