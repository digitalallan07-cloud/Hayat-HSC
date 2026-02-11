import { useEffect, useRef, useState } from 'react';
import { Eye, Target, Heart, Leaf } from 'lucide-react';

const ORCHARD_IMAGE = 'https://drive.google.com/thumbnail?id=1649WdJ1AqoR5gUfAXYXp_Aad3NAd9-Tw&sz=w1920';

const VisionMission = () => {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the world\'s most trusted apple farm, recognized for unparalleled quality, innovation in agriculture, and a commitment to nurturing both the land and the communities we serve.',
    },
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To deliver the freshest, most flavorful apples from our orchards to tables around the globe, using sustainable farming practices that honor the earth and exceed the expectations of every customer.',
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Integrity, excellence, and sustainability guide every decision we make. We believe in transparent partnerships, ethical farming, and creating a positive impact for future generations.',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Our orchards employ eco-friendly practices — from water conservation and organic soil management to biodiversity preservation — ensuring our farming leaves a positive footprint on the planet.',
    },
  ];

  return (
    <section id="vision" ref={sectionRef} className="relative overflow-hidden">
      {/* Full Width Image Banner */}
      <div className="relative h-[40vh] lg:h-[50vh]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url('${ORCHARD_IMAGE}')` }}
        />
        <div className="absolute inset-0 bg-[var(--hayat-green-dark)]/70" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div>
            <p
              className="font-sans-elegant text-xs uppercase tracking-[0.3em] text-[var(--hayat-gold-light)] mb-4"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.6s var(--ease-power) 0.2s',
              }}
            >
              What Drives Us
            </p>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-heading text-white leading-tight"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s var(--ease-power) 0.3s',
              }}
            >
              Rooted in <span className="italic">Purpose</span>
            </h2>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="w-16 h-[1px] bg-[var(--hayat-gold)]" />
              <div className="w-2 h-2 bg-[var(--hayat-gold)] rounded-full" />
              <div className="w-16 h-[1px] bg-[var(--hayat-gold)]" />
            </div>
          </div>
        </div>
      </div>

      {/* Values Cards */}
      <div className="bg-[var(--hayat-cream)] py-20 lg:py-24">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item, index) => (
              <div
                key={item.title}
                className="bg-white p-8 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 group text-center"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                  transition: `all 0.7s var(--ease-power) ${0.4 + index * 0.12}s`,
                }}
              >
                <div className="w-14 h-14 mx-auto mb-6 border border-[var(--hayat-gold)]/30 flex items-center justify-center group-hover:bg-[var(--hayat-red)] group-hover:border-[var(--hayat-red)] transition-all duration-300">
                  <item.icon className="w-6 h-6 text-[var(--hayat-gold)] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-[var(--hayat-charcoal)] mb-4">{item.title}</h3>
                <p className="text-sm text-[var(--hayat-gray)] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
