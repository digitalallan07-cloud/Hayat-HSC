import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Award, Users, Globe, Apple } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ years: 0, countries: 0, apples: 0 });

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
            });
            
            if (step >= steps) clearInterval(timer);
          }, interval);
          
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Award, value: counters.years, suffix: '+', label: 'Years of Excellence' },
    { icon: Globe, value: counters.countries, suffix: '+', label: 'Countries Served' },
    { icon: Apple, value: counters.apples, suffix: 'M+', label: 'Apples Delivered' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-[var(--apple-off-white)] relative overflow-hidden">
      {/* Background Blob */}
      <div 
        className="absolute -left-40 top-1/4 w-96 h-96 bg-[var(--apple-red)]/10 rounded-full blur-3xl animate-blob"
      />
      
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            {/* Decorative Blob Behind */}
            <div 
              className="absolute -inset-4 bg-gradient-to-br from-[var(--apple-red)]/20 to-[var(--apple-green)]/20 rounded-[2rem] -z-10"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(-10deg)',
                transition: 'all 0.8s var(--ease-apple-bounce)',
              }}
            />
            
            {/* Main Image */}
            <div 
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{
                opacity: isVisible ? 1 : 0,
                clipPath: isVisible 
                  ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' 
                  : 'polygon(0 0, 0 0, 0 100%, 0 100%)',
                transition: 'all 1s var(--ease-smooth-glide) 0.2s',
              }}
            >
              <img
                src="/images/about-orchard.jpg"
                alt="Apple Orchard"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Floating Stats Card */}
            <div 
              className="absolute -bottom-8 -right-4 lg:right-8 bg-white rounded-2xl p-6 shadow-xl"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
                transition: 'all 0.6s var(--ease-elastic-snap) 0.8s',
              }}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-green rounded-xl flex items-center justify-center">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-[var(--apple-black)]">500+</p>
                  <p className="text-sm text-[var(--apple-medium-gray)]">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right - Content */}
          <div className="space-y-6">
            {/* Eyebrow */}
            <span 
              className="inline-block text-[var(--apple-red)] font-semibold text-sm uppercase tracking-wider"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                transition: 'all 0.4s var(--ease-smooth-glide) 0.3s',
              }}
            >
              About AppleKing
            </span>
            
            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl font-bold font-['Poppins'] text-[var(--apple-black)] leading-tight">
              {'Growing Quality for Over Two Decades'.split(' ').map((word, index) => (
                <span
                  key={index}
                  className="inline-block mr-3"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                    transition: `all 0.5s var(--ease-power-out) ${0.4 + index * 0.08}s`,
                  }}
                >
                  {word}
                </span>
              ))}
            </h2>
            
            {/* Body Text */}
            <div className="space-y-4">
              <p 
                className="text-[var(--apple-dark-gray)] leading-relaxed"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.6s var(--ease-smooth-glide) 0.7s',
                }}
              >
                Founded in 2003, AppleKing has grown from a small family orchard to a leading 
                global apple distributor. Our commitment to quality, sustainability, and customer 
                satisfaction drives everything we do.
              </p>
              <p 
                className="text-[var(--apple-dark-gray)] leading-relaxed"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.6s var(--ease-smooth-glide) 0.85s',
                }}
              >
                We partner with the finest orchards across Washington, New Zealand, Chile, and 
                Italy to bring you apples that meet our exacting standards. Every apple is 
                hand-selected, carefully inspected, and delivered with the care it deserves.
              </p>
            </div>
            
            {/* Stats Grid */}
            <div 
              className="grid grid-cols-3 gap-4 pt-4"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s var(--ease-smooth-glide) 1s',
              }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-white rounded-2xl shadow-card">
                  <stat.icon className="w-6 h-6 text-[var(--apple-red)] mx-auto mb-2" />
                  <p className="text-2xl font-bold text-[var(--apple-black)]">
                    {stat.value}{stat.suffix}
                  </p>
                  <p className="text-xs text-[var(--apple-medium-gray)]">{stat.label}</p>
                </div>
              ))}
            </div>
            
            {/* CTA */}
            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.9)',
                transition: 'all 0.5s var(--ease-elastic-snap) 1s',
              }}
            >
              <Button
                size="lg"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-red text-white hover:shadow-apple-lg gap-2 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 group"
              >
                Learn Our Story
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
