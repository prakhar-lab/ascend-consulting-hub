import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  onOpenContact: () => void;
}

const navLinks = [
  { label: "Services", href: "#solutions" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Our Process", href: "#process" },
  { label: "About", href: "#why-us" },
];

export function Header({ onOpenContact }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-subtle py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="text-xl font-display font-bold text-foreground">
          Indieverse Labs
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={onOpenContact}
            className="text-muted-foreground hover:text-foreground"
          >
            Contact Us
          </Button>
          <Button
            size="sm"
            onClick={onOpenContact}
            className="btn-glow bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Book Discovery Call →
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-subtle mt-2 mx-4 rounded-xl overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-3 border-t border-border/50">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    onOpenContact();
                    setIsMobileMenuOpen(false);
                  }}
                  className="justify-start text-muted-foreground"
                >
                  Contact Us
                </Button>
                <Button
                  size="sm"
                  onClick={() => {
                    onOpenContact();
                    setIsMobileMenuOpen(false);
                  }}
                  className="btn-glow bg-primary text-primary-foreground"
                >
                  Book Discovery Call →
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
