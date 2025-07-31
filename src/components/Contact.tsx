import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Github, Linkedin, Send, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const mailtoLink = `mailto:kavin2057@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Email client opened!",
      description: "Your default email client should open with the message pre-filled.",
    });

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kavin2057@gmail.com',
      href: 'mailto:kavin2057@gmail.com',
      color: 'text-neon-cyan'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-9746872057',
      href: 'tel:+919746872057',
      color: 'text-neon-green'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Tamil Nadu, India',
      href: '#',
      color: 'text-neon-purple'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/kavin',
      href: 'https://linkedin.com/in/kavin',
      color: 'text-neon-pink'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 ${inView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="bg-background/40 backdrop-blur-sm border border-neon-purple/20 rounded-2xl p-8 hover:border-neon-purple/40 hover:shadow-neon transition-all duration-500">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and innovation. Feel free to reach out!
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className={`flex items-center gap-4 p-4 bg-secondary rounded-xl hover:bg-accent transition-all duration-300 hover:scale-105 group ${
                      inView ? 'animate-scale-in' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <div className={`p-3 rounded-lg bg-gradient-primary`}>
                      <info.icon className="w-5 h-5 text-background" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{info.label}</div>
                      <div className={`text-sm ${info.color} group-hover:underline`}>{info.value}</div>
                    </div>
                    {info.href.startsWith('http') && (
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-neon-cyan transition-colors duration-300" />
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className={`bg-background/40 backdrop-blur-sm border border-neon-green/20 rounded-2xl p-8 hover:border-neon-green/40 hover:shadow-neon transition-all duration-1000 ${inView ? 'animate-scale-in animate-delay-300' : 'opacity-0'}`}>
              <h4 className="text-xl font-semibold mb-4 gradient-text">Find Me Online</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/kavin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary rounded-lg hover:bg-gradient-primary hover:text-background transition-all duration-300 hover:scale-110 group"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/kavin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary rounded-lg hover:bg-gradient-primary hover:text-background transition-all duration-300 hover:scale-110 group"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 ${inView ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
            <div className="bg-background/40 backdrop-blur-sm border border-neon-cyan/20 rounded-2xl p-8 hover:border-neon-cyan/40 hover:shadow-neon transition-all duration-500">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-secondary border-border focus:border-neon-cyan focus:ring-neon-cyan/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="bg-secondary border-border focus:border-neon-cyan focus:ring-neon-cyan/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="bg-secondary border-border focus:border-neon-cyan focus:ring-neon-cyan/20"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hello!"
                    rows={6}
                    required
                    className="bg-secondary border-border focus:border-neon-cyan focus:ring-neon-cyan/20 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-primary text-background hover:scale-105 transition-all duration-300 glow font-semibold"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>

              <div className="mt-6 p-4 bg-secondary rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  💡 <strong>Quick tip:</strong> This form opens your email client with the message pre-filled.
                  You can also email me directly at <span className="text-neon-cyan font-code">kavin2057@gmail.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;