import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ValForgeIcon from "../assets/Images/valforge-icon.webp";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "HOME", href: "#home", id: "home" },
    { label: "ABOUT", href: "#about", id: "about" },
    { label: "COLLECTION", href: "#collection", id: "collection" },
    { label: "COMMISSION", href: "#commission", id: "commission" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { root: null, rootMargin: "-20% 0px -80% 0px", threshold: 0 }
    );
    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });
    return () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleNavClick = (href: string, event: React.MouseEvent) => {
    event.preventDefault();
    setMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(targetId);
    }
  };

  return (
    <>
      {/* Top ticker bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-7 bg-primary overflow-hidden flex items-center">
        <div className="animate-ticker whitespace-nowrap flex items-center gap-16 font-mono-tech text-[10px] text-white/90">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="flex items-center gap-8">
              <span>■ VALFORGE GUNPLA CRAFTSMANSHIP</span>
              <span>◆ PRECISION BUILDS · WATERSLIDE DECALS</span>
              <span>■ GUNPLA CEBU COMMUNITY</span>
              <span>◆ COMMISSIONS OPEN</span>
              <span>■ 機動戦士ガンダム</span>
            </span>
          ))}
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`fixed top-7 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[hsl(220_15%_5%/0.97)] border-b border-primary/30 shadow-[0_4px_30px_hsl(207_68%_30%/0.15)]"
            : "bg-[hsl(220_15%_5%/0.8)]"
        } backdrop-blur-md`}
      >
        {/* Red accent top line */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />

        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center gap-3 group"
              onClick={(e) => handleNavClick("#home", e)}
            >
              <div className="relative w-9 h-9 border border-primary/60 flex items-center justify-center group-hover:border-primary transition-colors duration-300">
                <img src={ValForgeIcon} alt="ValForge" className="w-7 h-7 object-contain" />
                {/* Corner dots */}
                <span className="absolute top-0 left-0 w-1 h-1 bg-primary" />
                <span className="absolute bottom-0 right-0 w-1 h-1 bg-primary" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-teko text-xl font-bold tracking-[0.15em] text-white">
                  VALFORGE
                </span>
                <span className="font-mono-tech text-[9px] text-primary/80 tracking-widest">
                  GUNPLA WORKSHOP
                </span>
              </div>
            </a>

            {/* Desktop nav items */}
            <div className="hidden md:flex items-center gap-0">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.href, e)}
                  className={`relative px-5 py-5 font-exo font-semibold text-[11px] tracking-[0.2em] transition-all duration-200 ${
                    activeSection === item.id
                      ? "text-primary"
                      : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary" />
                  )}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#contact-details"
                onClick={(e) => handleNavClick("#contact-details", e)}
                className="relative group px-6 py-2 bg-primary font-exo font-bold text-[11px] tracking-[0.2em] text-white clip-diagonal-right overflow-hidden transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_20px_hsl(207_68%_30%/0.5)]"
              >
                CONTACT ME
                <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden relative w-9 h-9 flex items-center justify-center border border-border hover:border-primary transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={18} className="text-primary" /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ${
            menuOpen ? "max-h-80 border-t border-border/50" : "max-h-0"
          }`}
        >
          <div className="bg-[hsl(220_15%_6%)] px-4 py-6 flex flex-col gap-1">
            {navItems.map((item, i) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(item.href, e)}
                className={`flex items-center gap-3 py-3 border-b border-border/30 font-exo font-semibold text-sm tracking-widest transition-colors ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-foreground/60 hover:text-foreground"
                }`}
                style={{ transitionDelay: `${menuOpen ? i * 40 : 0}ms` }}
              >
                <span className="font-mono-tech text-primary/50 text-xs">0{i + 1}</span>
                {item.label}
              </a>
            ))}
            <a
              href="#contact-details"
              onClick={(e) => handleNavClick("#contact-details", e)}
              className="mt-4 w-full py-3 bg-primary text-white font-exo font-bold text-sm tracking-widest text-center hover:bg-primary/90 transition-colors"
            >
              CONTACT ME
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;