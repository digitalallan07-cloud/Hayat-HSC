import { useEffect, useRef, useState } from 'react';
import { Calendar, Globe, Apple, ThumbsUp } from 'lucide-react';

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
          // Animate counters
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: Calendar,
      value: counters.years,
      suffix: '+',
      label: 'Years of Excellence',
    },
    {
      icon: Globe,
      value: counters.countries,
      suffix: '+',
      label: 'Countries Served',
    },
    {
      icon: Apple,
      value: counters.apples,
      suffix: 'M+',
      label: 'Apples Delivered',
    },
    {
      icon: ThumbsUp,
      value: counters.satisfaction,
      suffix: '%',
      label: 'Customer Satisfaction',
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-red relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10c-5 0-10 5-10 10 0 3 1 5 3 7-2 1-4 3-4 6 0 4 3 7 7 7h8c4 0 7-3 7-7 0-3-2-5-4-6 2-2 3-4 3-7 0-5-5-10-10-10z' fill='white' fill-opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
            animation: isVisible ? 'drift 30s linear infinite' : 'none',
          }}
        />
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${10 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${-Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
      
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.5)',
                transition: `all 0.8s var(--ease-power-out) ${0.3 + index * 0.15}s`,
              }}
            >
              {/* Icon */}
              <div 
                className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-2xl flex items-center justify-center"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.5s var(--ease-smooth-glide) ${0.5 + index * 0.15}s`,
                }}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Value */}
              <div 
                className="text-5xl sm:text-6xl font-bold text-white mb-2 animate-pulse-glow"
              >
                {stat.value}{stat.suffix}
              </div>
              
              {/* Label */}
              <div 
                className="text-white/80 text-sm sm:text-base font-medium"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.5s var(--ease-smooth-glide) ${0.8 + index * 0.15}s`,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes drift {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100px);
          }
        }
      `}</style>
    </section>
  );
};

export default Stats;
