import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-background dots-background">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border bg-card/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Kavin Shanmugavel. Built with React, TypeScript & Tailwind CSS.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Designed with <span className="text-neon-pink">♥</span> for the modern web
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
