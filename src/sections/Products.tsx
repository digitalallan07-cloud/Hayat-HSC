import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Products = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const products = [
    {
      name: 'Honeycrisp',
      tag: 'Best Seller',
      description: 'Exceptionally crisp and juicy with a perfect sweet-tart balance',
      image: '/images/apple-honeycrisp.jpg',
      color: 'from-red-500 to-red-600',
    },
    {
      name: 'Granny Smith',
      tag: 'Tart Favorite',
      description: 'Bright green skin with a sharp, refreshing tart flavor',
      image: '/images/apple-granny.jpg',
      color: 'from-green-500 to-green-600',
    },
    {
      name: 'Fuji',
      tag: 'Super Sweet',
      description: 'Incredibly sweet with dense, crunchy flesh',
      image: '/images/apple-fuji.jpg',
      color: 'from-red-400 to-red-500',
    },
    {
      name: 'Gala',
      tag: 'All Purpose',
      description: 'Mildly sweet and perfect for snacking or cooking',
      image: '/images/apple-gala.jpg',
      color: 'from-orange-400 to-red-400',
    },
    {
      name: 'Red Delicious',
      tag: 'Classic',
      description: "America's favorite with deep red color and mild sweetness",
      image: '/images/apple-red-delicious.jpg',
      color: 'from-red-600 to-red-700',
    },
    {
      name: 'Pink Lady',
      tag: 'Premium',
      description: 'Elegant blush skin with complex sweet-tart flavor',
      image: '/images/apple-pink-lady.jpg',
      color: 'from-pink-400 to-red-400',
    },
  ];

  return (
    <section id="products" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[var(--apple-red)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[var(--apple-green)]/5 rounded-full blur-3xl" />
      
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
          <div>
            <h2 
              className="text-4xl sm:text-5xl font-bold font-['Poppins'] text-[var(--apple-black)] mb-4"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.6s var(--ease-smooth-glide)',
              }}
            >
              Our Products
            </h2>
            <p 
              className="text-lg text-[var(--apple-medium-gray)] max-w-xl"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s var(--ease-smooth-glide) 0.1s',
              }}
            >
              Discover premium fresh produce for every need
            </p>
          </div>
          
          <a 
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 text-[var(--apple-red)] font-semibold hover:gap-3 transition-all duration-200 group"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.4s var(--ease-smooth-glide) 0.3s',
            }}
          >
            View All Products
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
        
        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="group relative bg-[var(--apple-off-white)] rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.9)',
                transition: `all 0.5s var(--ease-apple-bounce) ${0.1 + index * 0.1}s`,
              }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-110"
                />
                
                {/* Tag */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r ${product.color} text-white text-xs font-semibold flex items-center gap-1`}>
                  <Star className="w-3 h-3" />
                  {product.tag}
                </div>
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-['Poppins'] text-[var(--apple-black)] mb-2">
                  {product.name}
                </h3>
                <p className="text-[var(--apple-medium-gray)] text-sm leading-relaxed">
                  {product.description}
                </p>
                
                {/* CTA */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <a 
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="inline-flex items-center gap-2 text-[var(--apple-red)] font-semibold text-sm hover:gap-3 transition-all duration-200 group/link"
                  >
                    Order Now
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
              
              {/* Bottom Accent Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${product.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
