import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Calendar, Users, Zap, Brain } from 'lucide-react';

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const projects = [
    {
      title: 'PoseAI - Real-time Pose Correction',
      description: 'Developed PoseAI, a real-time pose correction tool using TensorFlow and CNN-based models, enabling accurate joint tracking and instant feedback for rehabilitation.',
      tech: ['TensorFlow', 'CNN', 'Python', 'OpenCV', 'Real-time Processing'],
      features: ['Real-time pose tracking', 'Joint analysis', 'Feedback system', 'Rehabilitation support'],
      icon: Brain,
      gradient: 'from-neon-cyan to-neon-purple',
      year: '2024'
    },
    {
      title: 'Deepfake Detection System',
      description: 'Designed a cutting-edge deep learning model using PyTorch and ResNet to classify real vs. fake videos through frame-wise feature extraction with automated reporting.',
      tech: ['PyTorch', 'ResNet', 'Deep Learning', 'Computer Vision', 'Python'],
      features: ['Frame-wise analysis', 'Feature extraction', 'Automated reporting', 'High accuracy detection'],
      icon: Zap,
      gradient: 'from-neon-purple to-neon-pink',
      year: '2024'
    },
    {
      title: 'VEcom - Multi-Purpose Platform',
      description: 'Contributed as backend developer in a team, built a Real-time full-stack e-commerce web app using React.js, Express.js, MySQL, featuring a book summary with AI integration.',
      tech: ['React.js', 'Express.js', 'MySQL', 'Sequelize', 'Frontend'],
      features: ['Real-time functionality', 'E-commerce features', 'Book summaries', 'AI integration'],
      icon: Users,
      gradient: 'from-neon-pink to-neon-green',
      year: '2023'
    },
    {
      title: 'Real-Time Stock Market API',
      description: 'Built an end-to-end pipeline that streams livestock data from various APIs with Apache Kafka, Apache Spark, Python, AWS S3 Data Lake, Apache Airflow.',
      tech: ['Apache Kafka', 'Apache Spark', 'Python', 'AWS S3', 'Apache Airflow'],
      features: ['Real-time data streaming', 'Data processing', 'Cloud storage', 'Automated workflows'],
      icon: Calendar,
      gradient: 'from-neon-green to-neon-yellow',
      year: '2023'
    },
    {
      title: 'Airline Data Ingestion Pipeline',
      description: 'Cloud-based data ingestion pipeline to collect, process, and store real-time airline flight data from various APIs using structured format for downstream analytics.',
      tech: ['Cloud Computing', 'Data Pipeline', 'APIs', 'Analytics', 'Real-time Processing'],
      features: ['Data collection', 'Real-time processing', 'Analytics ready', 'Scalable architecture'],
      icon: ExternalLink,
      gradient: 'from-neon-yellow to-neon-cyan',
      year: '2023'
    },
    {
      title: 'BookSky - Personal Book Management',
      description: 'Developed a Basic Book Management full-stack web app using React.js, Express.js and MySQL, featuring a book summary with advanced search operation.',
      tech: ['React.js', 'Express.js', 'MySQL', 'Full-Stack', 'Search'],
      features: ['Book management', 'Advanced search', 'Book summaries', 'User-friendly interface'],
      icon: Github,
      gradient: 'from-neon-cyan to-neon-purple',
      year: '2022'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A showcase of my technical expertise and problem-solving abilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:scale-105 hover:border-white/60 hover:shadow-neon transition-all duration-500 cursor-pointer ${
                inView ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-white`}>
                  <project.icon className="w-6 h-6 text-black" />
                </div>
                <span className="text-xs text-muted-foreground font-code px-2 py-1 bg-secondary rounded">
                  {project.year}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-white/90 transition-colors duration-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-white/70 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-white">Key Features:</h4>
                <ul className="text-xs text-white/70 space-y-1">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-white">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-black/40 text-white rounded text-xs font-code border border-white/20 group-hover:border-white/40 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 to-neon-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;