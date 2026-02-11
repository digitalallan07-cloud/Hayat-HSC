import { useEffect, useRef, useState } from 'react';
import { MapPin, Mail, Facebook, Instagram, Twitter, Linkedin, ArrowRight, Send, MessageCircle } from 'lucide-react';
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
    if (sectionRef.current) observer.observe(sectionRef.current);
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
    { name: 'Our Orchard', href: '#vision' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const products = [
    { name: 'Honeycrisp', href: '#products' },
    { name: 'Granny Smith', href: '#products' },
    { name: 'Fuji', href: '#products' },
    { name: 'Gala', href: '#products' },
    { name: 'Red Delicious', href: '#products' },
    { name: 'Pink Lady', href: '#products' },
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
      {/* Newsletter */}
      <div
        className="bg-[var(--hayat-green-dark)] py-16"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.6s var(--ease-power)',
        }}
      >
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl sm:text-4xl font-heading text-white mb-3">
              Stay Connected
            </h3>
            <p className="text-white/60 font-sans-elegant text-sm mb-8">
              Subscribe to receive updates on seasonal harvests, new products, and exclusive offers.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-6 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:bg-white/15 focus:border-white/30 rounded-none font-sans-elegant text-sm"
                required
              />
              <Button
                type="submit"
                className="bg-[var(--hayat-red)] text-white hover:bg-[var(--hayat-red-dark)] gap-2 px-8 py-6 rounded-none font-sans-elegant text-xs uppercase tracking-wider transition-all duration-300"
              >
                {isSubscribed ? 'Subscribed' : 'Subscribe'}
                <Send className="w-3.5 h-3.5" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[var(--hayat-dark)] py-16">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} className="flex items-center gap-3 mb-6">
                <img src="/images/hayat-logo.png" alt="Hayat HSC" className="h-10 w-auto" />
                <div className="flex flex-col">
                  <span className="text-lg font-heading font-semibold text-white">Hayat HSC</span>
                  <span className="text-[9px] font-sans-elegant uppercase tracking-[0.25em] text-white/40">Premium Apple Farm</span>
                </div>
              </a>
              <p className="text-[var(--hayat-gray)] text-sm leading-relaxed mb-6">
                Your trusted partner for premium quality apples. From our orchards to your table, we deliver excellence in every harvest.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/50 hover:bg-[var(--hayat-red)] hover:border-[var(--hayat-red)] hover:text-white transition-all duration-200"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-sans-elegant text-xs uppercase tracking-[0.2em] mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                      className="text-[var(--hayat-gray)] text-sm hover:text-white transition-colors duration-200 inline-flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-white font-sans-elegant text-xs uppercase tracking-[0.2em] mb-6">Our Apples</h4>
              <ul className="space-y-3">
                {products.map((product) => (
                  <li key={product.name}>
                    <a
                      href={product.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(product.href); }}
                      className="text-[var(--hayat-gray)] text-sm hover:text-white transition-colors duration-200 inline-flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {product.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-sans-elegant text-xs uppercase tracking-[0.2em] mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-[var(--hayat-gray)] text-sm">
                  <MapPin className="w-4 h-4 text-[var(--hayat-red)] flex-shrink-0 mt-0.5" />
                  <a href="https://maps.app.goo.gl/ppSyLhxh3uJ1K7KW6?g_st=iwb" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
                    View on Google Maps
                  </a>
                </li>
                <li className="flex items-center gap-3 text-[var(--hayat-gray)] text-sm">
                  <MessageCircle className="w-4 h-4 text-[var(--hayat-green-light)] flex-shrink-0" />
                  <a href="https://wa.me/97152898823" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
                    +97152-8988232
                  </a>
                </li>
                <li className="flex items-center gap-3 text-[var(--hayat-gray)] text-sm">
                  <Mail className="w-4 h-4 text-[var(--hayat-red)] flex-shrink-0" />
                  <a href="mailto:Hello@hayathsc.com" className="hover:text-white transition-colors duration-200">
                    Hello@hayathsc.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[var(--hayat-gray)] text-xs font-sans-elegant">
              &copy; 2025 Hayat HSC. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-[var(--hayat-gray)] text-xs font-sans-elegant hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-[var(--hayat-gray)] text-xs font-sans-elegant hover:text-white transition-colors duration-200">
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
