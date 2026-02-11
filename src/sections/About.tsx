import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ABOUT_IMAGE = 'https://drive.google.com/thumbnail?id=1tyhSTY-O-EOtzFBmHlu5vHhXc0eUT8xO&sz=w1200';

const About = () => {
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
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Image */}
          <div
            className="relative"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-60px)',
              transition: 'all 1s var(--ease-power) 0.2s',
            }}
          >
            <div className="relative overflow-hidden">
              <img
                src={ABOUT_IMAGE}
                alt="Hayat HSC Apple Orchard"
                className="w-full h-[550px] object-cover"
              />
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-4 lg:right-8 bg-white p-6 shadow-elegant-lg">
              <p className="text-4xl font-heading font-semibold text-[var(--hayat-red)]">20+</p>
              <p className="text-sm font-sans-elegant uppercase tracking-wider text-[var(--hayat-gray)] mt-1">Years of Excellence</p>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <span
              className="inline-block text-[var(--hayat-gold)] font-sans-elegant text-xs uppercase tracking-[0.25em]"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.6s var(--ease-power) 0.4s',
              }}
            >
              Our Heritage
            </span>

            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-heading text-[var(--hayat-charcoal)] leading-tight"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s var(--ease-power) 0.5s',
              }}
            >
              A Legacy of Growing{' '}
              <span className="italic text-[var(--hayat-green)]">Premium Apples</span>
            </h2>

            {/* Decorative Divider */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-[1px] bg-[var(--hayat-gold)]" />
              <div className="w-1.5 h-1.5 bg-[var(--hayat-gold)] rounded-full" />
            </div>

            <div
              className="space-y-4"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s var(--ease-power) 0.7s',
              }}
            >
              <p className="text-[var(--hayat-gray)] leading-relaxed text-base">
                Founded with a passion for delivering nature's finest, Hayat HSC has cultivated a reputation
                as one of the region's most trusted apple farms. Our orchards span acres of fertile land,
                where each tree is nurtured with care and expertise passed down through generations.
              </p>
              <p className="text-[var(--hayat-gray)] leading-relaxed text-base">
                We partner with the finest agricultural experts to ensure every apple meets our exacting
                standards. From blossom to harvest, our commitment to quality, sustainability, and
                freshness defines everything we do.
              </p>
            </div>

            {/* Stats Row */}
            <div
              className="grid grid-cols-3 gap-8 pt-6 border-t border-[var(--hayat-light-gray)]"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.8s var(--ease-power) 0.9s',
              }}
            >
              {[
                { value: '30+', label: 'Countries Served' },
                { value: '50M+', label: 'Apples Delivered' },
                { value: '500+', label: 'Happy Clients' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-heading font-semibold text-[var(--hayat-charcoal)]">{stat.value}</p>
                  <p className="text-xs font-sans-elegant uppercase tracking-wider text-[var(--hayat-gray)] mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[var(--hayat-green)] hover:bg-[var(--hayat-green-dark)] text-white gap-2 px-8 py-6 text-sm font-sans-elegant uppercase tracking-[0.12em] rounded-none transition-all duration-300 group mt-4"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.6s var(--ease-power) 1s',
              }}
            >
              Learn Our Story
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
