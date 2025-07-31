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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            My <span className="text-white">Skills</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:scale-[1.02] hover:border-white/40 hover:shadow-neon transition-all duration-500 ${
                inView ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="p-3 bg-white rounded-xl">
                  <category.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill}
                     className={`px-4 py-3 bg-black/40 backdrop-blur-sm rounded-lg border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all duration-300 text-center ${
                       inView ? 'animate-scale-in' : 'opacity-0'
                     }`}
                     style={{ animationDelay: `${200 + (skillIndex * 50)}ms` }}
                   >
                     <span className="font-medium text-white text-sm">{skill}</span>
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