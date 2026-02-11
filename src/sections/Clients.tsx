import { useEffect, useRef, useState } from 'react';

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
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
            Our Clients
          </h2>
          <p
            className="text-lg text-[var(--apple-medium-gray)]"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s var(--ease-smooth-glide) 0.2s',
            }}
          >
            Trusted by leading businesses worldwide
          </p>
          <div
            className="w-24 h-1 bg-gradient-red mx-auto mt-6 rounded-full"
            style={{
              transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
              transition: 'transform 0.5s var(--ease-power-out) 0.4s',
            }}
          />
        </div>

        {/* Client Collage Image */}
        <div
          className="max-w-4xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0.9)',
            transition: 'all 0.8s var(--ease-apple-bounce) 0.3s',
          }}
        >
          <img
            src="/images/clients-collage.png"
            alt="Our Clients"
            className="w-full rounded-3xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
