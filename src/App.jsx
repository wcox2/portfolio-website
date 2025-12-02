import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, FileText, Code } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Project Alpha",
      description: "Coming soon - An innovative solution currently in development. This space will showcase cutting-edge technology and creative problem-solving.",
      tech: ["React", "Node.js", "PostgreSQL", "AWS"],
      status: "In Progress"
    },
    {
      id: 2,
      title: "Project Beta",
      description: "Coming soon - A transformative application being carefully crafted. Stay tuned for updates on this exciting venture.",
      tech: ["Python", "TensorFlow", "Docker", "MongoDB"],
      status: "In Progress"
    },
    {
      id: 3,
      title: "Project Gamma",
      description: "Coming soon - An ambitious project in early stages. More details will be revealed as development progresses.",
      tech: ["TypeScript", "Next.js", "GraphQL", "Redis"],
      status: "In Progress"
    },
    {
      id: 4,
      title: "Project Delta",
      description: "Coming soon - A game-changing initiative under active development. Watch this space for exciting announcements.",
      tech: ["Vue.js", "Django", "Kubernetes", "MySQL"],
      status: "In Progress"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-2xl font-bold tracking-tight">
              Portfolio
            </a>
            <div className="flex gap-8">
              <a href="#projects" className="text-sm hover:text-gray-600 transition-colors">
                Projects
              </a>
              <a href="#resume" className="text-sm hover:text-gray-600 transition-colors">
                Resume
              </a>
              <a href="#contact" className="text-sm hover:text-gray-600 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-5xl w-full">
          <div className="space-y-6">
            <div className="overflow-hidden">
              <h1 
                className="text-8xl md:text-9xl font-bold leading-none tracking-tighter"
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  animation: 'slideUp 0.8s ease-out'
                }}
              >
                Your Name
              </h1>
            </div>
            <div className="overflow-hidden">
              <p 
                className="text-2xl md:text-3xl text-gray-600 font-light tracking-wide"
                style={{ 
                  fontFamily: "'Outfit', sans-serif",
                  animation: 'slideUp 0.8s ease-out 0.2s backwards'
                }}
              >
                Software Developer & Creative Technologist
              </p>
            </div>
            <div 
              className="pt-8"
              style={{ animation: 'fadeIn 0.8s ease-out 0.4s backwards' }}
            >
              <div className="flex gap-6">
                <a 
                  href="#projects" 
                  className="px-8 py-4 bg-black text-white hover:bg-gray-800 transition-all duration-300 text-sm tracking-wider"
                >
                  VIEW WORK
                </a>
                <a 
                  href="#contact" 
                  className="px-8 py-4 border-2 border-black hover:bg-black hover:text-white transition-all duration-300 text-sm tracking-wider"
                >
                  GET IN TOUCH
                </a>
              </div>
            </div>
          </div>

          {/* Decorative element */}
          <div className="mt-20 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-sm tracking-widest text-gray-500 uppercase">Featured Work</span>
            <h2 
              className="text-6xl md:text-7xl font-bold mt-4 tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Projects
            </h2>
            <div className="mt-6 w-24 h-1 bg-black" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-white p-8 hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-black ${
                  isVisible['projects'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transition: 'all 0.6s ease-out',
                  transitionDelay: `${index * 0.1}s`
                }}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center text-sm font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 tracking-wider">
                    {project.status}
                  </span>
                </div>

                <h3 
                  className="text-3xl font-bold mb-4 group-hover:text-gray-600 transition-colors"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 border border-gray-300 text-gray-700 tracking-wide hover:border-black hover:bg-black hover:text-white transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button className="text-sm flex items-center gap-2 hover:gap-3 transition-all duration-300 text-gray-600 hover:text-black">
                      <Code size={16} />
                      <span>View Code</span>
                    </button>
                    <button className="text-sm flex items-center gap-2 hover:gap-3 transition-all duration-300 text-gray-600 hover:text-black">
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </button>
                  </div>
                </div>

                <div className="mt-6 h-px bg-gradient-to-r from-gray-300 to-transparent group-hover:from-black transition-all duration-500" />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
              More projects coming soon. This portfolio is actively being developed.
            </p>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="min-h-screen py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20">
            <span className="text-sm tracking-widest text-gray-500 uppercase">Background</span>
            <h2 
              className="text-6xl md:text-7xl font-bold mt-4 tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Resume
            </h2>
            <div className="mt-6 w-24 h-1 bg-black" />
          </div>

          <div className="space-y-16">
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold mb-8 tracking-wide">Experience</h3>
              <div className="space-y-8 pl-8 border-l-2 border-gray-200">
                <div className="relative">
                  <div className="absolute -left-[41px] w-4 h-4 bg-black rounded-full" />
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-xl font-bold">Position Title</h4>
                      <p className="text-gray-600">Company Name</p>
                    </div>
                    <span className="text-sm text-gray-500">Year - Year</span>
                  </div>
                  <p className="text-gray-600 mt-2 leading-relaxed">
                    Experience details will be added here. Currently updating this section with relevant work history and accomplishments.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-8 tracking-wide">Education</h3>
              <div className="space-y-8 pl-8 border-l-2 border-gray-200">
                <div className="relative">
                  <div className="absolute -left-[41px] w-4 h-4 bg-black rounded-full" />
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-xl font-bold">Degree Name</h4>
                      <p className="text-gray-600">University Name</p>
                    </div>
                    <span className="text-sm text-gray-500">Year</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold mb-8 tracking-wide">Skills & Technologies</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold mb-3 text-sm tracking-wider uppercase text-gray-500">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {['JavaScript', 'Python', 'TypeScript'].map((skill) => (
                      <span key={skill} className="text-sm px-3 py-1 bg-gray-100 text-gray-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-3 text-sm tracking-wider uppercase text-gray-500">Frameworks</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'Django'].map((skill) => (
                      <span key={skill} className="text-sm px-3 py-1 bg-gray-100 text-gray-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-3 text-sm tracking-wider uppercase text-gray-500">Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'Docker', 'AWS'].map((skill) => (
                      <span key={skill} className="text-sm px-3 py-1 bg-gray-100 text-gray-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Download Resume */}
            <div className="pt-8">
              <button className="px-8 py-4 bg-black text-white hover:bg-gray-800 transition-all duration-300 text-sm tracking-wider inline-flex items-center gap-3">
                <FileText size={18} />
                DOWNLOAD FULL RESUME
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-32 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20">
            <span className="text-sm tracking-widest text-gray-500 uppercase">Get In Touch</span>
            <h2 
              className="text-6xl md:text-7xl font-bold mt-4 tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Contact
            </h2>
            <div className="mt-6 w-24 h-1 bg-black" />
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
                I'm currently open to new opportunities and collaborations. Feel free to reach out if you'd like to work together or just want to connect.
              </p>

              <div className="space-y-6">
                <a 
                  href="mailto:your.email@example.com" 
                  className="flex items-center gap-4 text-lg hover:translate-x-2 transition-transform duration-300 group"
                >
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                    <Mail size={20} />
                  </div>
                  <span>your.email@example.com</span>
                </a>

                <a 
                  href="https://github.com/yourusername" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-lg hover:translate-x-2 transition-transform duration-300 group"
                >
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                    <Github size={20} />
                  </div>
                  <span>github.com/yourusername</span>
                </a>

                <a 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-lg hover:translate-x-2 transition-transform duration-300 group"
                >
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                    <Linkedin size={20} />
                  </div>
                  <span>linkedin.com/in/yourusername</span>
                </a>
              </div>
            </div>

            <div className="bg-white p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Send a Message
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2 tracking-wide">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 tracking-wide">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 tracking-wide">Message</label>
                  <textarea 
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors resize-none"
                    rows="6"
                    placeholder="Your message..."
                  />
                </div>
                <button className="w-full px-8 py-4 bg-black text-white hover:bg-gray-800 transition-all duration-300 text-sm tracking-wider">
                  SEND MESSAGE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-sm tracking-wider">
            © 2024 Your Name. All rights reserved. Portfolio in progress.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Outfit:wght@300;400;500;600;700&display=swap');

        * {
          scroll-behavior: smooth;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        body {
          font-family: 'Outfit', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;