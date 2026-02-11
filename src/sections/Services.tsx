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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Truck,
      title: 'Wholesale Supply',
      description: 'Bulk orders for retailers, restaurants, and distributors with consistent quality and timely delivery.',
      color: 'from-[var(--apple-red)] to-[var(--apple-red-dark)]',
    },
    {
      icon: Globe,
      title: 'Export Services',
      description: 'International shipping to over 30 countries with proper cold chain management and customs handling.',
      color: 'from-[var(--apple-green)] to-[var(--apple-green-dark)]',
    },
    {
      icon: Package,
      title: 'Custom Packaging',
      description: 'Branded packaging solutions from retail bags to gift boxes, designed to your specifications.',
      color: 'from-[var(--apple-red)] to-[var(--apple-red-dark)]',
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--apple-red)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--apple-green)]/5 rounded-full blur-3xl" />
      
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 
            className="text-4xl sm:text-5xl font-bold font-['Poppins'] text-[var(--apple-black)] mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              clipPath: isVisible ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)',
              transition: 'all 0.8s var(--ease-smooth-glide)',
            }}
          >
            Our Services
          </h2>
          <p 
            className="text-lg text-[var(--apple-medium-gray)]"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s var(--ease-smooth-glide) 0.2s',
            }}
          >
            Comprehensive apple solutions tailored to your needs
          </p>
          <div 
            className="w-24 h-1 bg-gradient-red mx-auto mt-6 rounded-full"
            style={{
              transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
              transition: 'transform 0.5s var(--ease-power-out) 0.4s',
            }}
          />
        </div>
        
        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-3 border border-transparent hover:border-[var(--apple-red)]/10"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'rotateX(0deg) translateY(0)' : 'rotateX(-30deg) translateY(60px)',
                transition: `all 0.7s var(--ease-apple-bounce) ${0.3 + index * 0.15}s`,
              }}
            >
              {/* Icon */}
              <div 
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 transition-transform duration-400 group-hover:scale-110 group-hover:-translate-y-1`}
                style={{
                  transitionTimingFunction: 'var(--ease-elastic-snap)',
                }}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold font-['Poppins'] text-[var(--apple-black)] mb-3">
                {service.title}
              </h3>
              <p className="text-[var(--apple-medium-gray)] leading-relaxed">
                {service.description}
              </p>
              
              {/* Hover Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--apple-red)] to-[var(--apple-red-dark)] rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
