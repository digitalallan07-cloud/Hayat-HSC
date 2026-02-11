import { useEffect, useRef, useState } from 'react';

const STATS_BG = 'https://drive.google.com/thumbnail?id=1Eg6zinbaCO9tVnCUXrMQk2o_0_iYpY58&sz=w1920';

const Stats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    years: 0,
    countries: 0,
    apples: 0,
    satisfaction: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          const duration = 2000;
          const steps = 60;
          const interval = duration / steps;
          let step = 0;
          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCounters({
              years: Math.floor(20 * easeOut),
              countries: Math.floor(30 * easeOut),
              apples: Math.floor(50 * easeOut),
              satisfaction: Math.floor(99 * easeOut),
            });
            if (step >= steps) clearInterval(timer);
          }, interval);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: counters.years, suffix: '+', label: 'Years of Excellence' },
    { value: counters.countries, suffix: '+', label: 'Countries Served' },
    { value: counters.apples, suffix: 'M+', label: 'Apples Delivered' },
    { value: counters.satisfaction, suffix: '%', label: 'Client Satisfaction' },
  ];

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('${STATS_BG}')` }}
      />
      <div className="absolute inset-0 bg-[var(--hayat-green-dark)]/85" />

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.7s var(--ease-power) ${0.2 + index * 0.12}s`,
              }}
            >
              <p className="text-5xl sm:text-6xl font-heading font-semibold text-white mb-2">
                {stat.value}{stat.suffix}
              </p>
              <div className="w-8 h-[1px] bg-[var(--hayat-gold)] mx-auto mb-3" />
              <p className="text-white/70 text-xs font-sans-elegant uppercase tracking-[0.2em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
