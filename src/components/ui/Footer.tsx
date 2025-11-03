import { Mail, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row justify-center items-center gap-6">

        {/* Social Links */}
        <div className="flex items-center gap-4 text-primary">
          <a
            href="mailto:valentinejnine@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary/70 transition-colors"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://www.facebook.com/janinexvallente"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary/70 transition-colors"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://www.instagram.com/val.mortel_/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary/70 transition-colors"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>

      <div className="text-center text-xs text-muted-foreground pb-4">
        &copy; {new Date().getFullYear()} VALFORGE. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
