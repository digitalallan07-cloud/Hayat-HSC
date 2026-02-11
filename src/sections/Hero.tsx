import { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1574856344991-aaa31b6f4ce3?w=1920&q=80&auto=format&fit=crop';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Eyebrow */}
          <p
            className="font-sans-elegant text-xs sm:text-sm uppercase tracking-[0.3em] text-white/80"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s var(--ease-power) 0.3s',
            }}
          >
            Est. Since Generations
          </p>

          {/* Main Heading */}
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-semibold text-white leading-[1.1]"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 1s var(--ease-power) 0.5s',
            }}
          >
            The Finest Apples,{' '}
            <span className="italic text-[var(--hayat-red-light)]">Grown with Care</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto font-body leading-relaxed"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s var(--ease-power) 0.8s',
            }}
          >
            From our orchards to your table — Hayat HSC delivers premium quality apples
            with a legacy of excellence, sustainability, and unmatched freshness.
          </p>

          {/* Decorative Line */}
          <div
            className="flex items-center justify-center gap-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.6s var(--ease-power) 1s',
            }}
          >
            <div className="w-16 h-[1px] bg-[var(--hayat-gold)]" />
            <div className="w-2 h-2 bg-[var(--hayat-gold)] rounded-full" />
            <div className="w-16 h-[1px] bg-[var(--hayat-gold)]" />
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s var(--ease-power) 1.1s',
            }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('#vision')}
              className="bg-[var(--hayat-red)] hover:bg-[var(--hayat-red-dark)] text-white gap-2 px-10 py-6 text-sm font-sans-elegant uppercase tracking-[0.15em] rounded-none transition-all duration-300 hover:shadow-lg group"
            >
              Explore Our Harvest
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('#about')}
              className="border border-white/40 text-white hover:bg-white/10 gap-2 px-10 py-6 text-sm font-sans-elegant uppercase tracking-[0.15em] rounded-none transition-all duration-300 bg-transparent"
            >
              Our Story
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.6s var(--ease-power) 1.5s',
        }}
      >
        <span className="text-[10px] font-sans-elegant uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-float" />
      </div>
    </section>
  );
};

export default Hero;
