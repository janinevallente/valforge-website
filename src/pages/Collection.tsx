import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Epyon from "../assets/Images/epyon.webp";
import GundamWingZero from "../assets/Images/wing-zero.webp";
import BocataGelgoog from "../assets/Images/bocata-gelgoog.webp";
import CharZaku from "../assets/Images/char-zaku2.webp";
import MoonGundam from "../assets/Images/moon-gundam.webp";
import Schwarzette from "../assets/Images/schwarzette.webp";
import { useEffect, useState } from "react";

const Collection = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const gundams = [
    {
      name: "Gundam Epyon Sturm Und Drang",
      grade: "RG 1/144",
      series: "Gundam Wing: Endless Waltz",
      images: [Epyon],
      description:
        "The Gundam Epyon Sturm Und Drang is an enhanced version of the iconic close-combat Mobile Suit from Endless Waltz. Built for intense melee engagements, it features the original Epyon’s signature red armor, heat rod, and beam sword — now upgraded with the third-party Sturm Und Drang add-on. This expansion kit amplifies its design with massive wing units and additional weapon systems, giving the Epyon an even more menacing and dynamic appearance worthy of its name.",
    },
    {
      name: "Wing Gundam Zero (EW)",
      grade: "RG 1/144",
      series: "Gundam Wing: Endless Waltz",
      images: [GundamWingZero],
      description:
        "An elegant and powerful Mobile Suit piloted by Heero Yuy. Known for its angelic wings and signature Twin Buster Rifle, the Wing Zero symbolizes freedom and resolve. Its design features majestic feathered wings and a sleek white armor finish that captures the essence of grace and power.",
    },
    {
      name: "Bocata's Gelgoog",
      grade: "HG 1/144",
      series: "Mobile Suit Gundam: GQuuuuuux",
      images: [BocataGelgoog],
      description:
        "A mass-produced machine officially adopted by the Principality of Zeon forces, developed based on data from the Gundam. It boasts excellent versatility. Bocata's machine has been repainted for Clan Battle, featuring a unique color scheme primarily using light grey, green and white.",
    },
    {
      name: "Char Aznable's Zaku II (Revive)",
      grade: "HG 1/144",
      series: "Mobile Suit Gundam",
      images: [CharZaku],
      description:
        "A high-mobility custom Zaku II used by Char Aznable, the Red Comet himself. This revived HG kit features updated proportions and articulation while maintaining the classic red color scheme. Known for its speed and precision in battle, it remains one of the most iconic Mobile Suits in the Universal Century.",
    },
    {
      name: "AMS-123X-X Moon Gundam",
      grade: "HG 1/144",
      series: "Mobile Suit: Moon Gundam",
      images: [MoonGundam],
      description:
        "The Moon Gundam is a heavily armed prototype designed for orbital combat. Featuring a variety of beam weapons and high-speed thrusters, this kit showcases a balance between firepower and mobility, perfect for creating dynamic poses and display-worthy details.",
    },
    {
      name: "Gundam Schwarzette",
      grade: "HG 1/144",
      series: "Mobile Suit Gundam: The Witch from Mercury",
      images: [Schwarzette],
      description:
        "The Gundam Schwarzette is a sleek, modern Mobile Suit from 'The Witch from Mercury' series. Known for its elegant black-and-silver design, sharp articulation, and impressive transformation capabilities, this model emphasizes both aesthetic appeal and versatile posing options for display.",
    },
  ];

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <main className="min-h-screen bg-background">
      <section id="collection" className="relative pt-32 pb-20 px-4">
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              MOBILE SUIT COLLECTION
            </Badge>
            <h1 className="text-4xl md:text-7xl font-orbitron font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              MY GUNPLA ARSENAL
            </h1>
            <p className="text-xl text-muted-foreground font-rajdhani max-w-2xl mx-auto">
              Explore my personal collection of meticulously built Gundam model kits
            </p>
          </div>

          <Carousel
            setApi={setApi}
            opts={{
              loop: true, // makes the carousel loop back to the start
            }}
            plugins={[
              Autoplay({
                delay: 10000, //10 seconds
                stopOnInteraction: false,
              }),
            ]}
            className="relative w-full"
          >
            <CarouselContent>
              {gundams.map((gundam, index) => (
                <CarouselItem key={index}>
                  <Card
                    className={`overflow-hidden border-border/50 hover:border-primary transition-all duration-500 ${
                      current === index + 1
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5 pointer-events-none"
                    }`}
                  >
                    <div className="flex flex-col lg:flex-row items-center gap-10 p-4 sm:p-6 transition-all duration-700 ease-in-out">
                      <div className="w-full lg:w-1/2 flex justify-center">
                        <div className="relative overflow-hidden rounded-lg aspect-[4/3] sm:aspect-square md:aspect-[5/4]">
                          <img
                            src={gundam.images[0]}
                            alt={gundam.name}
                            className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
                          />
                        </div>
                      </div>

                      <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
                        <h3 className="text-xl sm:text-2xl md:text-4xl font-orbitron font-bold text-foreground">
                          {gundam.name}
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-rajdhani">
                          {gundam.series}
                        </p>
                        <p className="text-sm sm:text-base font-rajdhani text-muted-foreground leading-relaxed">
                          {gundam.description}
                        </p>
                        <div className="flex items-center justify-center lg:justify-start gap-3 pt-2">
                          <Badge variant="outline" className="border-primary/50 text-primary text-xs sm:text-sm">
                            {gundam.grade}
                          </Badge>
                          <span className="text-[10px] sm:text-xs text-muted-foreground font-rajdhani uppercase tracking-wider">
                            Built
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Arrows */}
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
          </Carousel>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  current === index + 1
                    ? "bg-primary scale-125 shadow-md"
                    : "bg-muted-foreground/30 hover:bg-primary/60"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Collection;
