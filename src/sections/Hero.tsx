import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Floating apple particles
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    interface Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      rotation: number;
      rotationSpeed: number;
      opacity: number;
    }
    
    const particles: Particle[] = [];
    const particleCount = 15;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 20 + Math.random() * 40,
        speedY: 0.3 + Math.random() * 0.5,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        opacity: 0.05 + Math.random() * 0.1,
      });
    }
    
    let animationId: number;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        particle.y -= particle.speedY;
        particle.rotation += particle.rotationSpeed;
        
        if (particle.y < -particle.size) {
          particle.y = canvas.height + particle.size;
          particle.x = Math.random() * canvas.width;
        }
        
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = '#FFFFFF';
        
        // Draw apple shape
        ctx.beginPath();
        ctx.arc(0, particle.size * 0.3, particle.size * 0.4, 0, Math.PI * 2);
        ctx.arc(-particle.size * 0.15, -particle.size * 0.1, particle.size * 0.35, 0, Math.PI * 2);
        ctx.arc(particle.size * 0.15, -particle.size * 0.1, particle.size * 0.35, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-hero">
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />
      
      {/* Animated Blobs */}
      <div 
        className="absolute top-20 left-10 w-96 h-96 bg-white/10 rounded-full animate-blob"
        style={{ zIndex: 2, filter: 'blur(60px)' }}
      />
      <div 
        className="absolute bottom-20 right-20 w-80 h-80 bg-[var(--apple-green)]/20 rounded-full animate-blob"
        style={{ 
          zIndex: 2, 
          filter: 'blur(60px)',
          animationDelay: '-4s'
        }}
      />
      <div 
        className="absolute top-1/2 left-1/3 w-64 h-64 bg-[var(--apple-red-dark)]/20 rounded-full animate-blob"
        style={{ 
          zIndex: 2, 
          filter: 'blur(50px)',
          animationDelay: '-2s'
        }}
      />
      
      {/* Content Container */}
      <div 
        className="relative z-10 w-full min-h-screen flex items-center"
        style={{ perspective: '1200px' }}
      >
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              {/* Headline */}
              <div className="space-y-2">
                <h1 
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold font-['Poppins'] leading-tight"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                    transition: 'all 0.8s var(--ease-power-out) 0.4s',
                  }}
                >
                  Nature's Perfect
                </h1>
                <h1 
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold font-['Poppins'] leading-tight"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                    transition: 'all 0.8s var(--ease-power-out) 0.55s',
                  }}
                >
                  Snack,
                </h1>
                <h1 
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold font-['Poppins'] leading-tight text-[var(--apple-green-light)]"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                    transition: 'all 0.8s var(--ease-power-out) 0.7s',
                  }}
                >
                  Delivered Fresh
                </h1>
              </div>
              
              {/* Subheadline */}
              <p 
                className="text-lg sm:text-xl text-white/90 max-w-xl leading-relaxed"
                style={{
                  opacity: isVisible ? 1 : 0,
                  filter: isVisible ? 'blur(0)' : 'blur(10px)',
                  transition: 'all 0.6s var(--ease-smooth-glide) 0.9s',
                }}
              >
                Premium apples sourced from the finest orchards worldwide. 
                From farm to table, we deliver crisp, juicy perfection every time.
              </p>
              
              {/* CTA Buttons */}
              <div 
                className="flex flex-wrap gap-4"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.6s var(--ease-smooth-glide) 1.1s',
                }}
              >
                <Button
                  size="lg"
                  onClick={() => scrollToSection('#products')}
                  className="bg-white text-[var(--apple-red)] hover:bg-white/90 gap-2 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                >
                  Explore Our Products
                  <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('#about')}
                  className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 gap-2 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 group"
                >
                  <Play className="w-5 h-5" />
                  Watch Our Story
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div 
                className="flex items-center gap-8 pt-4"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transition: 'opacity 0.5s var(--ease-smooth-glide) 1.3s',
                }}
              >
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-[var(--apple-red)] to-[var(--apple-red-dark)] flex items-center justify-center text-white text-xs font-bold"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-white/80 text-sm">
                  <span className="font-bold text-white">500+</span> Happy Clients Worldwide
                </div>
              </div>
            </div>
            
            {/* Right Content - Hero Image */}
            <div 
              className="relative flex justify-center lg:justify-end"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'rotateY(0deg) translateZ(0)' : 'rotateY(45deg) translateZ(-200px)',
                transition: 'all 1s var(--ease-power-out) 0.6s',
              }}
            >
              {/* Decorative Ring */}
              <div 
                className="absolute inset-0 flex items-center justify-center"
                style={{ zIndex: 1 }}
              >
                <div className="w-[90%] h-[90%] rounded-full border-2 border-white/20 animate-spin-slow" />
              </div>
              
              {/* Main Image */}
              <div className="relative animate-float" style={{ zIndex: 2 }}>
                <img
                  src="/images/hero-apples.png"
                  alt="Fresh Apples"
                  className="w-full max-w-lg lg:max-w-xl drop-shadow-2xl"
                />
              </div>
              
              {/* Floating Badges */}
              <div 
                className="absolute top-10 left-0 lg:-left-10 bg-white rounded-2xl p-4 shadow-xl animate-float-slow"
                style={{ 
                  zIndex: 3,
                  animationDelay: '-2s'
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-green rounded-xl flex items-center justify-center">
                    <span className="text-white text-2xl">🌿</span>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--apple-medium-gray)]">100% Organic</p>
                    <p className="font-bold text-[var(--apple-black)]">Certified</p>
                  </div>
                </div>
              </div>
              
              <div 
                className="absolute bottom-20 right-0 lg:-right-5 bg-white rounded-2xl p-4 shadow-xl animate-float"
                style={{ 
                  zIndex: 3,
                  animationDelay: '-1s'
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-red rounded-xl flex items-center justify-center">
                    <span className="text-white text-2xl">⭐</span>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--apple-medium-gray)]">Quality Rating</p>
                    <p className="font-bold text-[var(--apple-black)]">4.9/5.0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0" style={{ zIndex: 5 }}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
