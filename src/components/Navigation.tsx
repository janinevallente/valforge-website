import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ValForgeIcon from "../assets/Images/valforge-icon.webp";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "HOME", href: "#home", id: "home" },
    { label: "ABOUT", href: "#about", id: "about" },
    { label: "COLLECTION", href: "#collection", id: "collection" },
    { label: "COMMISSION", href: "#commission", id: "commission" }
  ];

  // Intersection Observer to detect which section is in view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -80% 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const handleNavClick = (href: string, event: React.MouseEvent) => {
    event.preventDefault();
    setMenuOpen(false);
    
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      if (targetId === 'home') {
        // For home section, animate only the hero content
        const heroContent = targetElement.querySelector('.hero-content');
        if (heroContent) {
          heroContent.classList.remove('animate-fade-in-up');
          // Use setTimeout to ensure the class removal is processed
          setTimeout(() => {
            heroContent.classList.add('animate-fade-in-up');
          }, 10);
        }
      } else {
        // For other sections, animate the entire section
        targetElement.classList.remove('animate-fade-in-up');
        setTimeout(() => {
          targetElement.classList.add('animate-fade-in-up');
        }, 10);
      }
      
      // Scroll to section
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // Update active section immediately
      setActiveSection(targetId);
    }
  };

  const isActive = (itemId: string) => activeSection === itemId;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            className="flex items-center gap-2"
            onClick={(e) => handleNavClick('#home', e)}
          >
            <div className="w-8 h-8">
              <img src={ValForgeIcon} alt="icon" className="object-contain" />
            </div>
            <span className="font-orbitron font-bold text-lg tracking-wider">
              VALFORGE
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-rajdhani text-sm tracking-wider">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative group transition-colors duration-300 ${
                  isActive(item.id) ? "text-primary" : "hover:text-primary"
                }`}
                onClick={(e) => handleNavClick(item.href, e)}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    isActive(item.id) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              className={`hidden md:inline-flex font-rajdhani font-bold tracking-wider ${
                isActive("commission") 
                  ? "bg-primary/90 shadow-[0_0_25px_hsl(var(--primary)/0.6)]" 
                  : "bg-primary hover:bg-primary/90 shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
              } text-primary-foreground transition-all duration-300`}
              onClick={(e) => handleNavClick('#contact-details', e)}
            >
              CONTACT ME
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            menuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-4 font-rajdhani text-sm tracking-wider">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={`transition-all duration-300 ${
                  isActive(item.id)
                    ? "text-primary font-semibold"
                    : "hover:text-primary"
                }`}
                style={{
                  transitionDelay: `${menuOpen ? index * 50 : 0}ms`,
                }}
                onClick={(e) =>
                  handleNavClick(item.href === '#commission' ? '#contact-details' : item.href, e)
                }
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;