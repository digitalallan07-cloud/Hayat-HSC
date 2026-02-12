import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTA_IMAGE = 'https://shapesdefined.sirv.com/WP_we-demo.xyz/2023/05/Hayat%20HSC/ChatGPT%20Image%20Feb%2012%2C%202026%2C%2009_34_43%20PM.png';

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center lg:bg-fixed"
        style={{ backgroundImage: `url('${CTA_IMAGE}')` }}
      />
      <div className="absolute inset-0 bg-[var(--hayat-red-dark)]/80" />

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white space-y-8">
          <span
            className="inline-block text-[var(--hayat-gold-light)] font-sans-elegant text-xs uppercase tracking-[0.3em]"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.6s var(--ease-power) 0.2s',
            }}
          >
            Get In Touch
          </span>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-heading leading-tight"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s var(--ease-power) 0.3s',
            }}
          >
            Let&apos;s Discuss Your{' '}
            <span className="italic">Fresh Produce</span> Needs
          </h2>

          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-[1px] bg-[var(--hayat-gold)]" />
            <div className="w-2 h-2 bg-[var(--hayat-gold)] rounded-full" />
            <div className="w-16 h-[1px] bg-[var(--hayat-gold)]" />
          </div>

          <p
            className="text-lg text-white/85 max-w-xl mx-auto leading-relaxed"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.6s var(--ease-power) 0.5s',
            }}
          >
            Whether you need wholesale supply, export services, or custom packaging,
            our team is ready to craft the perfect solution for your business.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s var(--ease-power) 0.7s',
            }}
          >
            <Button
              size="lg"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-[var(--hayat-red)] hover:bg-white/90 gap-2 px-10 py-6 text-sm font-sans-elegant uppercase tracking-[0.15em] rounded-none transition-all duration-300 hover:shadow-lg group"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open('https://wa.me/97152898823', '_blank')}
              className="border border-white/40 text-white hover:bg-white/10 gap-2 px-10 py-6 text-sm font-sans-elegant uppercase tracking-[0.15em] rounded-none transition-all duration-300 bg-transparent"
            >
              <Phone className="w-4 h-4" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
