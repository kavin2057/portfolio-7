import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center">
      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Kavin</span>
            <br />
            <span className="text-white">Shanmugavel</span>
          </h1>
        </div>
        
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
          <p className="text-xl md:text-2xl text-white/90 mb-4">
            Software Engineer
          </p>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Motivated software engineer specializing in full-stack development, building world-class applications and solving complex problems
          </p>
        </div>


        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up animate-delay-300' : 'opacity-0'}`}>
          <button
            onClick={scrollToAbout}
            className="group flex items-center gap-2 mx-auto px-6 py-3 bg-black/40 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:border-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Explore My Work
            <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/80 rounded-full floating animate-delay-100"></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-white/60 rounded-full floating animate-delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white/90 rounded-full floating animate-delay-500"></div>
        <div className="absolute top-1/2 right-1/3 w-5 h-5 bg-white/70 rounded-full floating animate-delay-200"></div>
      </div>
    </section>
  );
};

export default Hero;