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
      title: 'Skills',
      skills: [
        'Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL', 'C#',
        'REST APIs', 'API Integration', 'ETL Pipelines', 'Data Modeling',
        'Machine Learning', 'GenAI', 'LLMs', 'CNN', 'NLP', 'TensorFlow', 'PyTorch', 'AI Modeling',
        'Node.js', 'Express', 'React.js', 'React Native',
        'TailwindCSS', 'Bootstrap', 'Apache Spark', 'Kafka', 'Airflow',
        'MySQL', 'Sequelize', 'MongoDB', 'PostgreSQL',
        'AWS (S3, EC2, Lambda)', 'Docker'
      ]
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

        <div className="max-w-4xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 hover:scale-[1.02] transition-all duration-500 hover:shadow-lg hover:border-primary/30 ${
                inView ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="p-3 bg-gradient-primary rounded-xl">
                  <category.icon className="w-8 h-8 text-background" />
                </div>
                <h3 className="text-2xl font-bold gradient-text">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill}
                    className={`px-4 py-3 bg-secondary/50 rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300 text-center ${
                      inView ? 'animate-scale-in' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${200 + (skillIndex * 50)}ms` }}
                  >
                    <span className="font-medium text-foreground text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;