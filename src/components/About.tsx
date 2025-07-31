import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            About <span className="text-white">Me</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Passionate about creating innovative solutions and continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile & Info */}
          <div className={`transition-all duration-1000 ${inView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:border-white/40 transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-white" />
                  <span className="font-code text-white">kavin2057@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-white" />
                  <span className="text-white">Tamil Nadu, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-white" />
                  <span className="text-white">PSNA College of Engineering and Technology</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-white" />
                  <span className="text-white">Bachelor of Engineering in Computer Science</span>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="text-2xl font-semibold text-white">Education</h3>
              <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:border-white/40 transition-all duration-300">
                <h4 className="font-semibold text-lg mb-2 text-white">Computer Science and Engineering</h4>
                <p className="text-white/70 mb-2">PSNA College of Engineering and Technology (CGPA: 8.3)</p>
                <p className="text-sm text-white/60">2020 - 2024</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['Software Design', 'Data Structures', 'Algorithms', 'Distributed Systems', 'Computer Architecture', 'Cloud Computing'].map((course) => (
                    <span key={course} className="px-3 py-1 bg-black/40 backdrop-blur-sm border border-white/20 text-white rounded-lg text-sm font-code hover:border-white/40 transition-all duration-300">
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
              <h3 className="text-2xl font-semibold text-white">My Insights</h3>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  I'm a motivated software engineer with a passion for building world-class applications 
                  that solve real-world problems. I thrive on solving complex challenges and continuously 
                  learning new technologies.
                </p>
                <p>
                  My expertise spans full-stack development and Data Engineering, with experience in modern frameworks.I enjoy contributing to meaningful value that drive 
                  business value and create positive impact.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge with the developer community.
                </p>
              </div>
          
              <a
                href="https://drive.google.com/file/d/1Xtpf6ORMuJGda3Iuwkb9zW2du6aZXYsA/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black/40 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:border-white hover:bg-white hover:text-black transition-all duration-300 group"
              >
                View Resume
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;