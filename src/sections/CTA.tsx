import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-green relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='2' fill='white'/%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>
      
      {/* Decorative Blobs */}
      <div className="absolute -left-20 top-1/2 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -right-20 bottom-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            {/* Eyebrow */}
            <span 
              className="inline-block text-white/80 font-semibold text-sm uppercase tracking-wider"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
                transition: 'all 0.5s var(--ease-smooth-glide) 0.3s',
              }}
            >
              Ready to Get Started?
            </span>
            
            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl font-bold font-['Poppins'] leading-tight">
              {"Let's Discuss Your Apple Needs".split(' ').map((word, index) => (
                <span
                  key={index}
                  className="inline-block mr-3"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                    transition: `all 0.6s var(--ease-power-out) ${0.4 + index * 0.1}s`,
                  }}
                >
                  {word}
                </span>
              ))}
            </h2>
            
            {/* Body */}
            <p 
              className="text-lg text-white/90 max-w-xl leading-relaxed"
              style={{
                opacity: isVisible ? 1 : 0,
                filter: isVisible ? 'blur(0)' : 'blur(5px)',
                transition: 'all 0.6s var(--ease-smooth-glide) 0.7s',
              }}
            >
              Whether you're looking for wholesale supply, export services, or custom packaging, 
              we're here to help. Contact us today for a personalized quote.
            </p>
            
            {/* CTA Buttons */}
            <div 
              className="flex flex-wrap gap-4 pt-4"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0)',
                transition: 'all 0.6s var(--ease-elastic-snap) 0.9s',
              }}
            >
              <Button
                size="lg"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-[var(--apple-green)] hover:bg-white/90 gap-2 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                Get Your Free Quote
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open('tel:+15095550123', '_self')}
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 gap-2 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </Button>
            </div>
          </div>
          
          {/* Right - Image */}
          <div 
            className="relative flex justify-center lg:justify-end"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'rotateY(0deg) translateX(0)' : 'rotateY(30deg) translateX(100px)',
              transition: 'all 0.8s var(--ease-apple-bounce) 0.4s',
            }}
          >
            <div className="relative animate-float">
              <img
                src="/images/cta-apples.png"
                alt="Fresh Apples"
                className="w-full max-w-md drop-shadow-2xl"
              />
              
              {/* Floating Badge */}
              <div 
                className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-xl animate-float-slow"
                style={{ animationDelay: '-1s' }}
              >
                <div className="text-center">
                  <p className="text-2xl font-bold text-[var(--apple-green)]">24/7</p>
                  <p className="text-xs text-[var(--apple-medium-gray)]">Support</p>
                </div>
              </div>
              
              {/* Floating Badge 2 */}
              <div 
                className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl animate-float"
                style={{ animationDelay: '-2s' }}
              >
                <div className="text-center">
                  <p className="text-2xl font-bold text-[var(--apple-red)]">Free</p>
                  <p className="text-xs text-[var(--apple-medium-gray)]">Shipping</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
