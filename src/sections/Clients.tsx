import { useEffect, useRef, useState } from 'react';
import { Building2 } from 'lucide-react';

const clients = [
  'Al Madina Supermarket',
  'Gulf Fresh Foods',
  'Desert Oasis Markets',
  'Emirates Fruit Co.',
  'Royal Harvest Trading',
  'Green Valley Exports',
  'Sunrise Grocers',
  'Palm Bay Distributors',
];

const Clients = () => {
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
    <section ref={sectionRef} className="py-24 bg-[var(--hayat-cream)] relative overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="inline-block text-[var(--hayat-gold)] font-sans-elegant text-xs uppercase tracking-[0.25em] mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.6s var(--ease-power)',
            }}
          >
            Trusted Partners
          </span>
          <h2
            className="text-4xl sm:text-5xl font-heading text-[var(--hayat-charcoal)]"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s var(--ease-power) 0.1s',
            }}
          >
            Our Valued <span className="italic text-[var(--hayat-green)]">Clients</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-16 h-[1px] bg-[var(--hayat-gold)]" />
            <div className="w-2 h-2 bg-[var(--hayat-gold)] rounded-full" />
            <div className="w-16 h-[1px] bg-[var(--hayat-gold)]" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {clients.map((client, index) => (
            <div
              key={client}
              className="bg-white p-6 sm:p-8 flex flex-col items-center justify-center gap-3 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s var(--ease-power) ${0.2 + index * 0.06}s`,
              }}
            >
              <Building2 className="w-8 h-8 text-[var(--hayat-green)] opacity-60" />
              <p className="text-xs sm:text-sm font-sans-elegant text-[var(--hayat-charcoal)] text-center font-medium leading-tight">
                {client}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
