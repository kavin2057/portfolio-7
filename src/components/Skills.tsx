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
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
      ]
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Express.js', level: 85 },
        { name: 'REST APIs', level: 90 },
        { name: 'GraphQL', level: 75 },
      ]
    },
    {
      icon: Database,
      title: 'Database & Cloud',
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'AWS S3', level: 85 },
        { name: 'Docker', level: 70 },
        { name: 'Kubernetes', level: 65 },
      ]
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      skills: [
        { name: 'TensorFlow', level: 75 },
        { name: 'PyTorch', level: 70 },
        { name: 'OpenCV', level: 80 },
        { name: 'Machine Learning', level: 75 },
        { name: 'Deep Learning', level: 70 },
      ]
    },
    {
      icon: Palette,
      title: 'Tools & Design',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 70 },
        { name: 'Postman', level: 85 },
        { name: 'Linux', level: 80 },
      ]
    },
    {
      icon: Globe,
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'Next.js', level: 80 },
        { name: 'Express.js', level: 85 },
        { name: 'Flask', level: 75 },
        { name: 'Bootstrap', level: 90 },
        { name: 'Material-UI', level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="neon-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`bg-card border border-border rounded-2xl p-6 glow hover:scale-105 transition-all duration-500 ${
                inView ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-primary rounded-lg">
                  <category.icon className="w-6 h-6 text-background" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-primary rounded-full transition-all duration-1000 ${
                          inView ? 'animate-progress' : 'w-0'
                        }`}
                        style={{ 
                          '--progress-width': `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                        } as React.CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className={`mt-16 text-center transition-all duration-1000 ${inView ? 'animate-fade-in-up animate-delay-500' : 'opacity-0'}`}>
          <h3 className="text-2xl font-semibold mb-6 neon-text">Additional Technologies</h3>
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