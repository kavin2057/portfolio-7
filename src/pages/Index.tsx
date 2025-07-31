import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-black dots-background relative">
      <div className="connecting-line">
        <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      
        {/* Footer */}
        <footer className="py-8 px-6 border-t border-white/20 bg-black/80 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-white/80">
              © {new Date().getFullYear()} All rights reserved.
              <br />

            </p>
            <p className="text-sm text-white/60 mt-2">
              Designed by{' '}
              <a href="https://www.linkedin.com/in/kavin-shanmugavel/" target="_blank" rel="noopener noreferrer">Kavin</a>
              
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
