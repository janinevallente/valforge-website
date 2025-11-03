import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ValForgeIcon from "../assets/Images/valforge-icon.webp";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Determine the current path for active link styling
  const currentPath =
    location.pathname === "/" ? "home" : location.pathname.replace("/", "");

  const navItems = ["HOME", "ABOUT", "COLLECTION", "COMMISSION"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8">
              <img src={ValForgeIcon} alt="icon" className="object-contain" />
            </div>
            <span className="font-orbitron font-bold text-lg tracking-wider">
              VALFORGE
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-rajdhani text-sm tracking-wider">
            {navItems.map((item) => {
              const path = item === "HOME" ? "home" : item.toLowerCase();
              const isActive = currentPath === path;
              return (
                <Link
                  key={item}
                  to={`/${item === "HOME" ? "" : item.toLowerCase()}`}
                  className={`relative group transition-colors duration-300 ${
                    isActive ? "text-primary" : "hover:text-primary"
                  }`}
                >
                  {item}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            {/* Contact Me button — visible only on large screens */}
            <Button
              size="sm"
              className="hidden md:inline-flex font-rajdhani font-bold tracking-wider bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
              asChild
            >
              <Link to="/commission">CONTACT ME</Link>
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

        {/* Mobile Dropdown Menu with animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            menuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-4 font-rajdhani text-sm tracking-wider">
            {navItems.map((item, index) => {
              const path = item === "HOME" ? "home" : item.toLowerCase();
              const isActive = currentPath === path;
              return (
                <Link
                  key={item}
                  to={`/${item === "HOME" ? "" : item.toLowerCase()}`}
                  className={`transition-all duration-300 ${
                    isActive
                      ? "text-primary font-semibold"
                      : "hover:text-primary"
                  }`}
                  style={{
                    transitionDelay: `${menuOpen ? index * 50 : 0}ms`,
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
