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
    <section id="experience" className="py-20 px-6 relative overflow-hidden">
      {/* Moving dots background */}
      <div className="absolute inset-0 dots-background"></div>
      
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Work <span className="text-white">Experience</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            My professional journey and contributions to various organizations
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={`${exp.company}-${exp.period}`}
              className={`relative bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:scale-[1.02] hover:border-white/40 transition-all duration-500 ${
                inView ? 'animate-slide-in-left' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute -bottom-8 left-1/2 w-px h-8 bg-gradient-to-b from-white to-transparent"></div>
              )}

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left: Company Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg">
                      <Building className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-white">{exp.company}</h3>
                      <p className="text-sm text-white/70">{exp.type}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-white/70">
                      <Calendar className="w-4 h-4 text-white" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/70">
                      <MapPin className="w-4 h-4 text-white" />
                      {exp.location}
                    </div>
                  </div>

                  <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">{exp.role}</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.slice(0, 3).map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-black/40 backdrop-blur-sm border border-white/20 text-white rounded text-xs font-code">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Responsibilities */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-4 text-white">Key Responsibilities</h4>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-white/70">
                          <CheckCircle className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-white">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-black/40 backdrop-blur-sm border border-white/20 text-white rounded-lg text-sm font-code hover:border-white hover:bg-white hover:text-black transition-all duration-300"
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

      </div>
    </section>
  );
};

export default Experience;