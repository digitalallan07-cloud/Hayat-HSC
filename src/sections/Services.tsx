import { useEffect, useRef, useState } from 'react';
import { Truck, Globe, Package } from 'lucide-react';

const Services = () => {
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

  const services = [
    {
      icon: Truck,
      title: 'Wholesale Supply',
      description: 'Bulk orders for retailers, restaurants, and distributors with consistent quality and reliable, timely delivery to your doorstep.',
    },
    {
      icon: Globe,
      title: 'Export Services',
      description: 'International shipping to over 30 countries with proper cold chain management, customs handling, and quality assurance at every step.',
    },
    {
      icon: Package,
      title: 'Custom Packaging',
      description: 'Bespoke packaging solutions — from retail bags to premium gift boxes — designed to elevate your brand and protect every apple.',
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-24 lg:py-32 bg-[var(--hayat-cream)] relative overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="inline-block text-[var(--hayat-gold)] font-sans-elegant text-xs uppercase tracking-[0.25em] mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.6s var(--ease-power)',
            }}
          >
            What We Offer
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-heading text-[var(--hayat-charcoal)] mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s var(--ease-power) 0.1s',
            }}
          >
            Our <span className="italic text-[var(--hayat-green)]">Services</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-[1px] bg-[var(--hayat-gold)]" />
            <div className="w-2 h-2 bg-[var(--hayat-gold)] rounded-full" />
            <div className="w-16 h-[1px] bg-[var(--hayat-gold)]" />
          </div>
          <p
            className="text-[var(--hayat-gray)] text-base leading-relaxed"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.6s var(--ease-power) 0.2s',
            }}
          >
            Comprehensive apple supply solutions tailored to meet the unique needs of every partner.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white p-10 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 text-center"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: `all 0.7s var(--ease-power) ${0.3 + index * 0.12}s`,
              }}
            >
              <div className="w-16 h-16 mx-auto mb-8 border border-[var(--hayat-light-gray)] flex items-center justify-center group-hover:bg-[var(--hayat-green)] group-hover:border-[var(--hayat-green)] transition-all duration-300">
                <service.icon className="w-7 h-7 text-[var(--hayat-green)] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-[var(--hayat-charcoal)] mb-4">{service.title}</h3>
              <p className="text-sm text-[var(--hayat-gray)] leading-relaxed">{service.description}</p>
              <div className="w-8 h-[1px] bg-[var(--hayat-gold)] mx-auto mt-6 group-hover:w-16 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
