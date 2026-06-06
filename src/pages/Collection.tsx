import { useState, useEffect } from "react";
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

const gundams = [
  {
    id: "VF-001",
    name: "Gundam Epyon Sturm Und Drang",
    grade: "RG 1/144",
    series: "Gundam Wing: Endless Waltz",
    image: Epyon,
    classification: "CLOSE COMBAT",
    status: "DISPLAYED",
    description:
      "An enhanced version of the iconic close-combat Gundam Epyon, upgraded with the powerful third-party Sturm Und Drang add-on. Massive wing units and additional weapon systems create an even more menacing and dynamic appearance.",
  },
  {
    id: "VF-002",
    name: "Wing Gundam Zero (EW)",
    grade: "RG 1/144",
    series: "Gundam Wing: Endless Waltz",
    image: GundamWingZero,
    classification: "ALL-RANGE",
    status: "DISPLAYED",
    description:
      "An elegant and powerful Mobile Suit piloted by Heero Yuy. Known for its angelic wings and signature Twin Buster Rifle. Majestic feathered wings and a sleek white armor finish capture the essence of grace and power.",
  },
  {
    id: "VF-003",
    name: "Bocata's Gelgoog",
    grade: "HG 1/144",
    series: "Mobile Suit Gundam: GQuuuuuux",
    image: BocataGelgoog,
    classification: "GENERAL PURPOSE",
    status: "DISPLAYED",
    description:
      "A versatile mass-produced machine adopted by Zeon forces. Bocata's machine has been repainted for Clan Battle, featuring a unique color scheme primarily using light grey, green and white.",
  },
  {
    id: "VF-004",
    name: "Char Aznable's Zaku II",
    grade: "HG 1/144",
    series: "Mobile Suit Gundam",
    image: CharZaku,
    classification: "HIGH MOBILITY",
    status: "DISPLAYED",
    description:
      "A high-mobility custom Zaku II used by Char Aznable, the Red Comet. Updated proportions and articulation while maintaining the classic red color scheme. Speed and precision in battle.",
  },
  {
    id: "VF-005",
    name: "AMS-123X-X Moon Gundam",
    grade: "HG 1/144",
    series: "Mobile Suit: Moon Gundam",
    image: MoonGundam,
    classification: "ORBITAL COMBAT",
    status: "DISPLAYED",
    description:
      "A heavily armed prototype designed for orbital combat. Featuring a variety of beam weapons and high-speed thrusters, showcasing a balance between firepower and mobility.",
  },
  {
    id: "VF-006",
    name: "Gundam Schwarzette",
    grade: "HG 1/144",
    series: "The Witch from Mercury",
    image: Schwarzette,
    classification: "VARIABLE TYPE",
    status: "DISPLAYED",
    description:
      "A sleek, modern Mobile Suit from 'The Witch from Mercury'. Elegant black-and-silver design, sharp articulation, and impressive transformation capabilities emphasize aesthetic appeal.",
  },
];

const Collection = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  const active = gundams[current];

  return (
    <section id="collection" className="relative py-32 px-4 overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-25" />

      {/* Right vertical accent */}
      <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="mb-16 section-enter">
          <div className="section-tag mb-4">MOBILE SUIT DATABASE</div>
          <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8">
            <h2 className="font-teko font-bold text-6xl md:text-8xl tracking-[0.05em] text-white leading-none">
              MY GUNPLA
              <br />
              <span className="text-primary">ARSENAL</span>
            </h2>
            <div className="md:mb-4 font-exo text-base text-foreground/40 max-w-xs">
              Personal collection of meticulously built Gundam model kits
            </div>
          </div>
        </div>

        {/* Main layout: unit list + carousel */}
        <div className="grid lg:grid-cols-[240px_1fr] gap-0 items-start">

          {/* Unit list sidebar */}
          <div className="hidden lg:block border-r border-border/50 pr-0 section-enter">
            <div className="font-mono-tech text-[10px] text-foreground/30 tracking-widest px-4 pb-3 border-b border-border/30">
              UNIT REGISTRY · {count} ENTRIES
            </div>
            {gundams.map((g, i) => (
              <button
                key={g.id}
                onClick={() => api?.scrollTo(i)}
                className={`w-full text-left px-4 py-4 border-b border-border/20 transition-all duration-200 group ${
                  current === i
                    ? "bg-primary/8 border-l-2 border-l-primary"
                    : "hover:bg-muted/50 border-l-2 border-l-transparent"
                }`}
              >
                <div className={`font-mono-tech text-[9px] tracking-widest mb-0.5 ${current === i ? "text-primary/70" : "text-foreground/25"}`}>
                  {g.id}
                </div>
                <div className={`font-exo font-semibold text-xs leading-snug ${current === i ? "text-white" : "text-foreground/50 group-hover:text-foreground/70"}`}>
                  {g.name}
                </div>
                <div className={`font-exo text-[10px] mt-0.5 ${current === i ? "text-primary/60" : "text-foreground/25"}`}>
                  {g.grade}
                </div>
              </button>
            ))}
          </div>

          {/* Carousel area */}
          <div className="section-enter lg:pl-8">
            <Carousel
              setApi={setApi}
              opts={{ loop: true }}
              plugins={[Autoplay({ delay: 9000, stopOnInteraction: false })]}
              className="relative w-full"
            >
              <CarouselContent>
                {gundams.map((gundam, index) => (
                  <CarouselItem key={index}>
                    <div className="grid md:grid-cols-[1fr_1fr] gap-0 min-h-[480px]">
                      {/* Image side */}
                      <div className="relative overflow-hidden bg-[hsl(220_15%_7%)]"
                        style={{ clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)" }}>
                        <img
                          src={gundam.image}
                          alt={gundam.name}
                          className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105 min-h-[300px] md:min-h-full"
                          style={{ maxHeight: "520px" }}
                        />
                        {/* Image overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_15%_7%/0.4)] to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[hsl(220_15%_7%/0.15)]" />

                        {/* Classification badge */}
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/90 font-mono-tech text-[9px] text-white tracking-[0.2em]">
                            ■ {gundam.classification}
                          </span>
                        </div>

                        {/* Grade badge */}
                        <div className="absolute bottom-4 right-4">
                          <span className="px-3 py-1 border border-white/20 bg-black/40 font-mono-tech text-[9px] text-white/70 tracking-widest">
                            {gundam.grade}
                          </span>
                        </div>
                      </div>

                      {/* Info side */}
                      <div className="bg-[hsl(220_15%_7%)] border border-border/50 border-l-0 p-7 flex flex-col justify-between">
                        {/* Top: unit info */}
                        <div>
                          <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/50">
                            <div className="font-mono-tech text-[9px] text-primary/60 tracking-widest">{gundam.id}</div>
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-glow-pulse" />
                              <span className="font-mono-tech text-[9px] text-foreground/30 tracking-widest">{gundam.status}</span>
                            </div>
                          </div>

                          <div className="mb-2">
                            <span className="font-mono-tech text-[10px] text-foreground/30 tracking-widest">{gundam.series}</span>
                          </div>

                          <h3 className="font-teko font-bold text-3xl md:text-4xl text-white leading-tight tracking-wide mb-5">
                            {gundam.name}
                          </h3>

                          <p className="font-exo text-sm text-foreground/50 leading-relaxed">
                            {gundam.description}
                          </p>
                        </div>

                        {/* Bottom: specs */}
                        <div className="mt-8 pt-6 border-t border-border/50">
                          <div className="grid grid-cols-2 gap-4">
                            {[
                              { label: "GRADE", value: gundam.grade },
                              { label: "TYPE", value: gundam.classification },
                              { label: "SCALE", value: "1/144" },
                              { label: "STATUS", value: gundam.status },
                            ].map((spec) => (
                              <div key={spec.label}>
                                <div className="font-mono-tech text-[9px] text-foreground/30 tracking-widest mb-1">
                                  {spec.label}
                                </div>
                                <div className="font-exo font-semibold text-xs text-foreground/70 tracking-wider">
                                  {spec.value}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Custom nav */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  {gundams.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => api?.scrollTo(i)}
                      className={`transition-all duration-300 ${
                        current === i
                          ? "w-6 h-1 bg-primary shadow-[0_0_6px_hsl(0_85%_52%/0.7)]"
                          : "w-1 h-1 bg-foreground/20 hover:bg-foreground/40"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <CarouselPrevious className="static transform-none w-10 h-10 border-border/50 hover:border-primary hover:bg-primary/10 rounded-none" />
                  <CarouselNext className="static transform-none w-10 h-10 border-border/50 hover:border-primary hover:bg-primary/10 rounded-none" />
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;