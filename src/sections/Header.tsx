import { useState, useEffect } from 'react';
import { Menu, X, Apple, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled
          ? 'glass-effect shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
      style={{ transitionTimingFunction: 'var(--ease-smooth-glide)' }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
            className="flex items-center gap-2 group"
            style={{
              animation: 'flipIn 0.8s var(--ease-apple-bounce) forwards',
            }}
          >
            <div className={`p-2 rounded-xl transition-all duration-300 ${
              isScrolled ? 'bg-gradient-red' : 'bg-white/20'
            }`}>
              <Apple className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-white'}`} />
            </div>
            <span className={`text-xl font-bold font-['Poppins'] transition-colors duration-300 ${
              isScrolled ? 'text-[var(--apple-black)]' : 'text-white'
            }`}>
              AppleKing
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className={`relative text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 ${
                  isScrolled ? 'text-[var(--apple-dark-gray)]' : 'text-white'
                }`}
                style={{
                  animation: `slideDown 0.5s var(--ease-smooth-glide) ${100 + index * 80}ms forwards`,
                  opacity: 0,
                }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[var(--apple-red)] transition-all duration-200 group-hover:w-full group-hover:left-0" 
                  style={{ transform: 'translateX(-50%)' }}
                />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--apple-red)] transition-all duration-300 hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              onClick={() => scrollToSection('#contact')}
              className={`gap-2 transition-all duration-300 hover:scale-105 ${
                isScrolled
                  ? 'bg-gradient-red text-white hover:shadow-apple-lg'
                  : 'bg-white text-[var(--apple-red)] hover:bg-white/90'
              }`}
              style={{
                animation: 'scaleIn 0.6s var(--ease-elastic-snap) 0.5s forwards',
                opacity: 0,
              }}
            >
              <Phone className="w-4 h-4" />
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
              isScrolled ? 'text-[var(--apple-black)]' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 glass-effect shadow-lg transition-all duration-400 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ transitionTimingFunction: 'var(--ease-smooth-glide)' }}
      >
        <nav className="flex flex-col p-4 gap-2">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
              className="px-4 py-3 text-[var(--apple-dark-gray)] font-medium rounded-lg hover:bg-[var(--apple-light-gray)] transition-colors duration-200"
              style={{
                animation: isMobileMenuOpen ? `slideRight 0.3s var(--ease-smooth-glide) ${index * 80}ms forwards` : 'none',
                opacity: 0,
              }}
            >
              {link.name}
            </a>
          ))}
          <Button
            onClick={() => scrollToSection('#contact')}
            className="mt-2 bg-gradient-red text-white gap-2"
          >
            <Phone className="w-4 h-4" />
            Get a Quote
          </Button>
        </nav>
      </div>

      <style>{`
        @keyframes flipIn {
          from {
            opacity: 0;
            transform: perspective(400px) rotateY(-90deg);
          }
          to {
            opacity: 1;
            transform: perspective(400px) rotateY(0deg);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
