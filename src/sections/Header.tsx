import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Our Orchard', href: '#vision' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-effect shadow-elegant py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
            className="flex items-center gap-3 group"
          >
            <img
              src="/images/hayat-logo.png"
              alt="Hayat HSC"
              className="h-10 w-auto"
            />
            <div className="flex flex-col">
              <span className={`text-xl font-heading font-semibold tracking-wide transition-colors duration-300 ${
                isScrolled ? 'text-[var(--hayat-green-dark)]' : 'text-white'
              }`}>
                Hayat HSC
              </span>
              <span className={`text-[10px] font-sans-elegant uppercase tracking-[0.25em] transition-colors duration-300 ${
                isScrolled ? 'text-[var(--hayat-gray)]' : 'text-white/70'
              }`}>
                Premium Apple Farm
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className={`relative text-sm font-sans-elegant font-medium uppercase tracking-[0.12em] transition-all duration-300 hover:opacity-80 ${
                  isScrolled ? 'text-[var(--hayat-charcoal)]' : 'text-white'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--hayat-red)] transition-all duration-300 hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              onClick={() => scrollToSection('#contact')}
              className={`gap-2 font-sans-elegant text-xs uppercase tracking-wider transition-all duration-300 rounded-none px-6 py-5 ${
                isScrolled
                  ? 'bg-[var(--hayat-red)] text-white hover:bg-[var(--hayat-red-dark)]'
                  : 'bg-white/10 text-white border border-white/30 hover:bg-white/20'
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors duration-200 ${
              isScrolled ? 'text-[var(--hayat-charcoal)]' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 glass-effect shadow-elegant-lg transition-all duration-400 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col p-6 gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
              className="px-4 py-3 text-[var(--hayat-charcoal)] font-sans-elegant text-sm uppercase tracking-wider hover:text-[var(--hayat-red)] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <Button
            onClick={() => scrollToSection('#contact')}
            className="mt-4 bg-[var(--hayat-red)] text-white gap-2 rounded-none font-sans-elegant text-xs uppercase tracking-wider"
          >
            <Phone className="w-3.5 h-3.5" />
            Get a Quote
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
