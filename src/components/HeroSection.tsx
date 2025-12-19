import { Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-brownie.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-chocolate">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-coral/20 blob-shape animate-float" />
      <div className="absolute bottom-40 left-10 w-24 h-24 bg-cream/10 blob-shape-2 animate-float-delayed" />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-caramel/20 rounded-full animate-float" />
      
      {/* Content */}
      <div className="container mx-auto px-4 py-12 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center min-h-screen">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left py-12 lg:py-0 z-10">
            <div className="animate-fade-up">
              <span className="inline-block px-4 py-2 bg-coral/20 text-coral-light rounded-full text-sm font-medium mb-6">
                100% Homemade with Love
              </span>
            </div>
            
            <h1 className="font-script text-5xl md:text-7xl lg:text-8xl text-cream mb-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Brown Art
            </h1>
            
            <p className="font-display text-2xl md:text-3xl lg:text-4xl text-coral mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Sizzling Brownie
            </p>
            
            <p className="text-cream/80 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 mb-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              Experience the magic of freshly baked brownies, decadent shakes, 
              and aromatic cold coffee. Where every bite tells a story of passion.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <a 
                href="#menu" 
                className="inline-flex items-center justify-center px-8 py-4 bg-coral text-cream font-medium rounded-full hover:bg-coral-light transition-all duration-300 shadow-glow hover:scale-105"
              >
                Explore Menu
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-cream/30 text-cream font-medium rounded-full hover:bg-cream/10 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </a>
            </div>
            
            {/* Quick Info */}
            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center text-cream/70">
                <MapPin className="w-5 h-5 text-coral mr-2" />
                <span>Gandhinagar, Gujarat</span>
              </div>
              <div className="flex items-center text-cream/70">
                <Phone className="w-5 h-5 text-coral mr-2" />
                <span>99046 24888</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Hero Image */}
          <div className="flex-1 relative z-10 animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Decorative circle behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-coral/30 to-caramel/20 rounded-full scale-90 blur-3xl" />
              
              <img 
                src={heroImage} 
                alt="Delicious sizzling brownie with ice cream and chocolate sauce" 
                className="relative w-full max-w-xl mx-auto rounded-3xl shadow-elevated object-cover"
              />
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-cream px-6 py-4 rounded-2xl shadow-elevated">
                <p className="font-script text-2xl text-chocolate">By Dhara Patel</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path 
            d="M0 120L48 110C96 100 192 80 288 75C384 70 480 80 576 85C672 90 768 90 864 85C960 80 1056 70 1152 70C1248 70 1344 80 1392 85L1440 90V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" 
            fill="hsl(30 25% 96%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
