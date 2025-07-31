import { useInView } from 'react-intersection-observer';
import { MapPin, Calendar, GraduationCap, Mail } from 'lucide-react';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section id="about" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="neon-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about creating innovative solutions and continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile & Info */}
          <div className={`transition-all duration-1000 ${inView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="bg-card border border-border rounded-2xl p-8 glow">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-neon-cyan" />
                  <span className="font-code">kavin2057@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-neon-green" />
                  <span>Tamil Nadu, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-neon-purple" />
                  <span>PSNA College of Engineering and Technology</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-neon-pink" />
                  <span>Bachelor of Engineering in Computer Science</span>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="text-2xl font-semibold neon-text">Education</h3>
              <div className="bg-card border border-border rounded-xl p-6">
                <h4 className="font-semibold text-lg mb-2">Computer Science and Engineering</h4>
                <p className="text-muted-foreground mb-2">PSNA College of Engineering and Technology (CGPA: 8.3)</p>
                <p className="text-sm text-muted-foreground">2020 - 2024</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['Software Design', 'Data Structures', 'Algorithms', 'Distributed Systems', 'Computer Architecture', 'Cloud Computing'].map((course) => (
                    <span key={course} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-lg text-sm font-code">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bio & Description */}
          <div className={`transition-all duration-1000 ${inView ? 'animate-fade-in-up animate-delay-300' : 'opacity-0'}`}>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold neon-text">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a motivated software engineer with a passion for building world-class applications 
                  that solve real-world problems. I thrive on solving complex challenges and continuously 
                  learning new technologies.
                </p>
                <p>
                  My expertise spans full-stack development, with experience in modern frameworks like 
                  React.js, Node.js, and Python. I enjoy contributing to meaningful projects that drive 
                  business value and create positive impact.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge with the developer community.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-card border border-border rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold neon-text">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="bg-card border border-border rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold neon-text">10+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="bg-card border border-border rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold neon-text">5+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
                <div className="bg-card border border-border rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold neon-text">100%</div>
                  <div className="text-sm text-muted-foreground">Dedication</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;