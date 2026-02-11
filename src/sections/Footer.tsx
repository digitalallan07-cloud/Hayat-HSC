import { useEffect, useRef, useState } from 'react';
import { Apple, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin, ArrowRight, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const products = [
    { name: 'Honeycrisp', href: '#products' },
    { name: 'Granny Smith', href: '#products' },
    { name: 'Fuji', href: '#products' },
    { name: 'Gala', href: '#products' },
    { name: 'Red Delicious', href: '#products' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" ref={sectionRef} className="relative">
      {/* Newsletter Section */}
      <div 
        className="bg-gradient-red py-16 relative overflow-hidden"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
          transition: 'all 0.6s var(--ease-smooth-glide)',
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25 5c-5 0-10 5-10 10 0 3 1 5 3 7-2 1-4 3-4 6 0 4 3 7 7 7h8c4 0 7-3 7-7 0-3-2-5-4-6 2-2 3-4 3-7 0-5-5-10-10-10z' fill='white'/%3E%3C/svg%3E")`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>
        
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h3 
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.5s var(--ease-smooth-glide) 0.2s',
              }}
            >
              Stay Fresh with Our Newsletter
            </h3>
            <p 
              className="text-white/80 mb-8"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.5s var(--ease-smooth-glide) 0.3s',
              }}
            >
              Get updates on new varieties, seasonal specials, and industry news.
            </p>
            
            <form 
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.4s var(--ease-smooth-glide) 0.4s',
              }}
            >
              <div className="flex-1 relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-6 rounded-full bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 focus:border-white/40 transition-all duration-200"
                  required
                />
              </div>
              <Button
                type="submit"
                className="bg-[var(--apple-black)] text-white hover:bg-[var(--apple-dark-gray)] gap-2 px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 group"
              >
                {isSubscribed ? 'Subscribed!' : 'Subscribe'}
                <Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="bg-[var(--apple-black)] py-16">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                transition: 'all 0.5s var(--ease-apple-bounce) 0.4s',
              }}
            >
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} className="flex items-center gap-2 mb-6">
                <div className="p-2 rounded-xl bg-gradient-red">
                  <Apple className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white font-['Poppins']">AppleKing</span>
              </a>
              <p className="text-[var(--apple-medium-gray)] mb-6 leading-relaxed">
                Your trusted partner for premium apples worldwide. Quality, freshness, and reliability in every bite.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[var(--apple-red)] hover:scale-110 hover:rotate-[10deg] transition-all duration-200"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'scale(1)' : 'scale(0)',
                      transition: `all 0.4s var(--ease-elastic-snap) ${0.6 + index * 0.1}s`,
                    }}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li 
                    key={link.name}
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                      transition: `all 0.3s var(--ease-smooth-glide) ${0.5 + index * 0.08}s`,
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                      className="text-[var(--apple-medium-gray)] hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Products */}
            <div>
              <h4 className="text-white font-bold mb-6">Products</h4>
              <ul className="space-y-3">
                {products.map((product, index) => (
                  <li 
                    key={product.name}
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                      transition: `all 0.3s var(--ease-smooth-glide) ${0.5 + index * 0.08}s`,
                    }}
                  >
                    <a
                      href={product.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(product.href); }}
                      className="text-[var(--apple-medium-gray)] hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                      {product.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="text-white font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li 
                  className="flex items-start gap-3 text-[var(--apple-medium-gray)]"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                    transition: 'all 0.3s var(--ease-smooth-glide) 0.5s',
                  }}
                >
                  <MapPin className="w-5 h-5 text-[var(--apple-red)] flex-shrink-0 mt-0.5" />
                  <span>123 Orchard Lane, Wenatchee, WA 98801</span>
                </li>
                <li 
                  className="flex items-center gap-3 text-[var(--apple-medium-gray)]"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                    transition: 'all 0.3s var(--ease-smooth-glide) 0.58s',
                  }}
                >
                  <Phone className="w-5 h-5 text-[var(--apple-red)] flex-shrink-0" />
                  <a href="tel:+15095550123" className="hover:text-white transition-colors duration-200">
                    +1 (509) 555-0123
                  </a>
                </li>
                <li 
                  className="flex items-center gap-3 text-[var(--apple-medium-gray)]"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                    transition: 'all 0.3s var(--ease-smooth-glide) 0.66s',
                  }}
                >
                  <Mail className="w-5 h-5 text-[var(--apple-red)] flex-shrink-0" />
                  <a href="mailto:hello@appleking.com" className="hover:text-white transition-colors duration-200">
                    hello@appleking.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Copyright Bar */}
          <div 
            className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.4s var(--ease-smooth-glide) 0.8s',
            }}
          >
            <p className="text-[var(--apple-medium-gray)] text-sm">
              © 2024 AppleKing. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-[var(--apple-medium-gray)] text-sm hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-[var(--apple-medium-gray)] text-sm hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
