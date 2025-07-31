import { useInView } from 'react-intersection-observer';
import { Code, Database, Server, Palette, Brain, Globe } from 'lucide-react';

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: ['React.js', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind CSS']
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: ['Node.js', 'Python', 'Express.js', 'REST APIs', 'GraphQL']
    },
    {
      icon: Database,
      title: 'Database & Cloud',
      skills: ['MongoDB', 'PostgreSQL', 'AWS S3', 'Docker', 'Kubernetes']
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      skills: ['TensorFlow', 'PyTorch', 'OpenCV', 'Machine Learning', 'Deep Learning']
    },
    {
      icon: Palette,
      title: 'Tools & Design',
      skills: ['Git/GitHub', 'VS Code', 'Figma', 'Postman', 'Linux']
    },
    {
      icon: Globe,
      title: 'Frameworks & Libraries',
      skills: ['Next.js', 'Express.js', 'Flask', 'Bootstrap', 'Material-UI']
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
      {/* Moving dots background */}
      <div className="absolute inset-0 dots-background"></div>
      
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 hover:scale-105 transition-all duration-500 hover:shadow-lg hover:border-primary/30 ${
                inView ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-primary rounded-xl">
                  <category.icon className="w-6 h-6 text-background" />
                </div>
                <h3 className="text-xl font-semibold gradient-text">{category.title}</h3>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill}
                    className={`px-4 py-3 bg-secondary/50 rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300 ${
                      inView ? 'animate-scale-in' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` }}
                  >
                    <span className="font-medium text-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className={`mt-16 text-center transition-all duration-1000 ${inView ? 'animate-fade-in-up animate-delay-500' : 'opacity-0'}`}>
          <h3 className="text-2xl font-semibold mb-6 gradient-text">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Java', 'C++', 'PHP', 'Apache Kafka', 'Apache Spark', 'Airflow', 'Jenkins', 
              'Selenium', 'Jest', 'Cypress', 'Redux', 'Zustand', 'Socket.io', 'WebRTC'
            ].map((tech, index) => (
              <span
                key={tech}
                className={`px-4 py-2 bg-secondary border border-border rounded-lg font-code text-sm hover:bg-accent transition-colors duration-300 ${
                  inView ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${600 + (index * 50)}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;