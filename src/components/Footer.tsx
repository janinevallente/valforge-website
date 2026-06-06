import { Mail, Facebook, Instagram } from "lucide-react";
import ValForgeIcon from "../assets/Images/valforge-icon.webp";

const Footer = () => {
  return (
    <footer className="relative bg-[hsl(220_15%_4%)] border-t border-border/50 overflow-hidden">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-15" />

      <div className="relative z-10 container mx-auto px-4 py-14">
        <div className="grid md:grid-cols-3 gap-10 items-start mb-12">

          {/* Brand block */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 border border-primary/40 flex items-center justify-center">
                <img src={ValForgeIcon} alt="ValForge" className="w-8 h-8 object-contain" />
                <span className="absolute top-0 left-0 w-1.5 h-1.5 bg-primary" />
                <span className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-primary" />
              </div>
              <div>
                <div className="font-teko font-bold text-2xl text-white tracking-[0.15em]">VALFORGE</div>
                <div className="font-mono-tech text-[9px] text-primary/60 tracking-widest">GUNPLA WORKSHOP</div>
              </div>
            </div>
            <p className="font-exo text-sm text-foreground/40 leading-relaxed max-w-xs">
              Precision Gunpla craftsmanship from the heart of Cebu City. 
              Straight builds and waterslide decal specialist.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div className="font-mono-tech text-[10px] text-foreground/25 tracking-widest mb-5">
              — NAVIGATION
            </div>
            <nav className="grid grid-cols-2 gap-2">
              {["HOME", "ABOUT", "COLLECTION", "COMMISSION"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="font-exo font-semibold text-xs tracking-widest text-foreground/40 hover:text-primary transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="w-3 h-px bg-current opacity-50" />
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Social + contact */}
          <div>
            <div className="font-mono-tech text-[10px] text-foreground/25 tracking-widest mb-5">
              — CONTACT
            </div>
            <div className="flex flex-col gap-3">
              {[
                { Icon: Mail, label: "valentinejnine@gmail.com", href: "mailto:valentinejnine@gmail.com" },
                { Icon: Facebook, label: "janinexvallente", href: "https://www.facebook.com/janinexvallente" },
                { Icon: Instagram, label: "val.mortel_", href: "https://www.instagram.com/val.mortel_/" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-exo text-sm text-foreground/40 hover:text-primary transition-colors duration-200 group"
                >
                  <Icon size={14} className="group-hover:scale-110 transition-transform" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="font-mono-tech text-[9px] text-foreground/20 tracking-widest">
            &copy; 2026 VALFORGE 2.0 — ALL RIGHTS RESERVED
          </div>
          <div className="font-mono-tech text-[9px] text-foreground/20 tracking-widest">
            機動戦士ガンダム — GUNPLA CRAFTSMANSHIP [DEVELOPED BY J9]
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;