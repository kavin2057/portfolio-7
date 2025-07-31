import { useInView } from 'react-intersection-observer';
import { Building, Calendar, MapPin, CheckCircle } from 'lucide-react';

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const experiences = [
    {
      role: 'Software Engineer',
      company: 'Virtual Technology',
      location: 'Tamil Nadu, India',
      period: 'Dec 2024 - Present',
      type: 'Full-time',
      responsibilities: [
        'Contributed to the Professional Services Team by implementing automations, customizations, and integrations between Virtual Tech and multiple applications',
        'Gained solid expertise in backend development using Express.js',
        'Delivered tailored solutions to clients, addressing their specific business needs and improving operational processes',
        'Involved in developing user-centric solutions within our organization'
      ],
      skills: ['Express.js', 'Backend Development', 'API Integration', 'Client Solutions', 'Process Automation']
    },
    {
      role: 'Data Engineer',
      company: 'Sriyadika Graphics Universe',
      location: 'Tamil Nadu, India',
      period: 'Jul 2024 - Dec 2024',
      type: 'Internship',
      responsibilities: [
        'ETL Pipeline Development: developed and maintained ETL pipelines for processing data using Apache Kafka and Spark',
        'Data Architecture: designed robust data models and automated data flows to improve data architecture and data quality',
        'Scalability Focus: developed practical scalability solutions, always thinking about future growth and designing modular systems',
        'Collaborated in an Agile team environment, participated in sprint planning, and code reviews, and used Git/GitHub for version control'
      ],
      skills: ['Apache Kafka', 'Apache Spark', 'ETL Pipeline', 'Data Architecture', 'Git/GitHub', 'Agile Methodology']
    },
    {
      role: 'Full-Stack Developer Intern',
      company: 'VJH Soft Private Limited',
      location: 'Tamil Nadu, India',
      period: 'Oct 2022 - Jan 2023',
      type: 'Internship',
      responsibilities: [
        'Engineered scalable APIs with .NET and Kafka, deployed on Docker, optimizing firmware test execution effectively',
        'Automated firmware metadata pipelines across 30+ repositories, reducing manual processes by 90%, enhancing the deployment process'
      ],
      skills: ['.NET', 'Kafka', 'Docker', 'API Development', 'Automation', 'Firmware Testing']
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="neon-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and contributions to various organizations
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={`${exp.company}-${exp.period}`}
              className={`relative bg-card border border-border rounded-2xl p-8 glow hover:scale-[1.02] transition-all duration-500 ${
                inView ? 'animate-slide-in-left' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute -bottom-8 left-1/2 w-px h-8 bg-gradient-to-b from-neon-cyan to-transparent"></div>
              )}

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left: Company Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-primary rounded-lg">
                      <Building className="w-5 h-5 text-background" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{exp.company}</h3>
                      <p className="text-sm text-muted-foreground">{exp.type}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-neon-green" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-neon-purple" />
                      {exp.location}
                    </div>
                  </div>

                  <div className="bg-secondary rounded-lg p-4">
                    <h4 className="font-semibold text-neon-cyan mb-2">{exp.role}</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.slice(0, 3).map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-card text-card-foreground rounded text-xs font-code">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Responsibilities */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-4 text-neon-pink">Key Responsibilities</h4>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                          <CheckCircle className="w-5 h-5 text-neon-green mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-neon-yellow">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-secondary border border-border text-secondary-foreground rounded-lg text-sm font-code hover:border-neon-cyan/50 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className={`mt-16 grid md:grid-cols-4 gap-6 transition-all duration-1000 ${inView ? 'animate-fade-in-up animate-delay-500' : 'opacity-0'}`}>
          <div className="bg-card border border-border rounded-xl p-6 text-center glow">
            <div className="text-2xl font-bold neon-text">3+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center glow">
            <div className="text-2xl font-bold neon-text">3</div>
            <div className="text-sm text-muted-foreground">Companies</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center glow">
            <div className="text-2xl font-bold neon-text">15+</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center glow">
            <div className="text-2xl font-bold neon-text">100%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;