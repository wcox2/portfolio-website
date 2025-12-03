import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, FileText, Code, Twitter, X, Instagram } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:willchriscox2@gmail.com?subject=${subject}&body=${body}`;
    
    // Reset form after opening email client
    setFormData({ name: '', email: '', message: '' });
  };

  const projects = [
    {
      id: 1,
      title: "Flick Finder",
      description: "Led a 4-person Scrum team as Product Owner and developer for a personalized movie recommendation web app. Designed and implemented a full-stack application integrating a content-based ML model with a responsive ReactJS frontend and Flask backend. Trained and deployed a recommendation engine on a dataset of 45,000 movies to deliver tailored suggestions to users.",
      tech: ["Python/Flask", "ReactJS", "MySQL", "Scikit-learn", "NumPy", "Pandas", "Bootstrap"],
      status: "Completed",
      date: "Feb 2024 - May 2024"
    },
    {
      id: 2,
      title: "UFC Bout Predictor",
      description: "Engineered and evaluated multiple ML models (KNN, SVM, Random Forest) to predict UFC fight outcomes with over 70% accuracy. Scraped and preprocessed structured data from UFCstats.com to build a robust training dataset. Presented findings at the Verna Miller Case Symposium, demonstrating effective model interpretation and data storytelling.",
      tech: ["Python", "NumPy", "Pandas", "Scikit-learn", "Git"],
      status: "Completed",
      date: "March 2023 - May 2023"
    },
    {
      id: 3,
      title: "Mind Madness",
      description: "Designed and implemented core gameplay mechanics including player movement, puzzle interactions, and physics-based challenges in Unity using C#. Developed a modular architecture using object-oriented programming to support reusable puzzle components and scalable level design.",
      tech: ["Unity", "C#", "Figma", "Git"],
      status: "Completed",
      date: "March 2023 - May 2023"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-2xl font-bold tracking-tight">
              WC
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
                William Cox
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
                Software Engineer
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
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 tracking-wider">
                      {project.status}
                    </span>
                    {project.date && (
                      <span className="text-xs text-gray-500">
                        {project.date}
                      </span>
                    )}
                  </div>
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
                      <h4 className="text-xl font-bold">Software Engineer</h4>
                      <p className="text-gray-600">Wells Fargo</p>
                      <p className="text-sm text-gray-500">Dallas, TX</p>
                    </div>
                    <span className="text-sm text-gray-500">July 2024 - Present</span>
                  </div>
                  <ul className="text-gray-600 mt-3 leading-relaxed space-y-2 list-disc list-inside">
                    <li>Led implementation of Cloud 9 voice recording infrastructure, integrating with Verba legacy system via custom API connections, data imports, and extension-to-metadata mapping—onboarded 400 regulated users and enabled compliance for 100,000 daily calls.</li>
                    <li>Automated 8 voice recording compliance controls with Python and Selenium, ensuring adherence for 1,000+ regulated users and reducing manual oversight by 20 hours weekly.</li>
                  </ul>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] w-4 h-4 bg-black rounded-full" />
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-xl font-bold">Software Engineering Intern</h4>
                      <p className="text-gray-600">Wells Fargo</p>
                      <p className="text-sm text-gray-500">Charlotte, NC</p>
                    </div>
                    <span className="text-sm text-gray-500">June 2022 - August 2023</span>
                  </div>
                  <ul className="text-gray-600 mt-3 leading-relaxed space-y-2 list-disc list-inside">
                    <li>Worked in an Agile team to develop and maintain a full stack application to replace an outdated and manual process of completing Service Requests.</li>
                    <li>Improved customer experience by reducing completion time for Service Requests by 75%.</li>
                    <li>Worked with Java, Javascript, HTML, CSS, and Mendix.</li>
                  </ul>
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
                      <h4 className="text-xl font-bold">Bachelor of Science in Computer Science</h4>
                      <p className="text-gray-600">Davidson College</p>
                      <p className="text-sm text-gray-500">Davidson, NC</p>
                    </div>
                    <span className="text-sm text-gray-500">Aug. 2020 - May 2024</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Athletics */}
            <div>
              <h3 className="text-2xl font-bold mb-8 tracking-wide">Intercollegiate Athletics</h3>
              <div className="space-y-8 pl-8 border-l-2 border-gray-200">
                <div className="relative">
                  <div className="absolute -left-[41px] w-4 h-4 bg-black rounded-full" />
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-xl font-bold">Davidson College Football</h4>
                      <p className="text-gray-600">NCAA Division 1 Scholar-Athlete</p>
                      <p className="text-sm text-gray-500">Charlotte, NC</p>
                    </div>
                    <span className="text-sm text-gray-500">August 2020 - December 2023</span>
                  </div>
                  <ul className="text-gray-600 mt-3 leading-relaxed space-y-2 list-disc list-inside">
                    <li>Committed 30+ hours weekly to team activities throughout the year, including practice, weights, film study, travel, and competition, in addition to a full-time course load.</li>
                    <li>Utilized film, statistics, and analytical data to study opponents prior to competitions, as well as during competitions to make real-time adjustments.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold mb-8 tracking-wide">Skills & Technologies</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <h4 className="font-bold mb-3 text-sm tracking-wider uppercase text-gray-500">Languages/Frameworks</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Java', 'Python/Flask', 'C#', 'JavaScript/React', 'HTML', 'CSS', 'R', 'MySQL'].map((skill) => (
                      <span key={skill} className="text-sm px-3 py-1 bg-gray-100 text-gray-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-3 text-sm tracking-wider uppercase text-gray-500">Developer Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'VS Code', 'Visual Studio', 'PyCharm', 'IntelliJ', 'Eclipse', 'Mendix', 'Unity Engine', 'DBeaver', 'MS 365'].map((skill) => (
                      <span key={skill} className="text-sm px-3 py-1 bg-gray-100 text-gray-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-3 text-sm tracking-wider uppercase text-gray-500">Libraries</h4>
                  <div className="flex flex-wrap gap-2">
                    {['pandas', 'NumPy', 'Matplotlib', 'SciKit Learn'].map((skill) => (
                      <span key={skill} className="text-sm px-3 py-1 bg-gray-100 text-gray-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="font-bold mb-3 text-sm tracking-wider uppercase text-gray-500">Certifications</h4>
                <div className="flex flex-wrap gap-2">
                  {['Cloud Fundamentals (AZ-900)', 'Microsoft 365 Fundamentals (MS-900)'].map((cert) => (
                    <span key={cert} className="text-sm px-3 py-1 bg-gray-100 text-gray-700">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Download Resume */}
            <div className="pt-8">
              <a 
                href="/will_aug_25.pdf" 
                download
                className="px-8 py-4 bg-black text-white hover:bg-gray-800 transition-all duration-300 text-sm tracking-wider inline-flex items-center gap-3"
              >
                <FileText size={18} />
                DOWNLOAD FULL RESUME
              </a>
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
                  href="mailto:willchriscox2@gmail.com" 
                  className="flex items-center gap-4 text-lg hover:translate-x-2 transition-transform duration-300 group"
                >
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                    <Mail size={20} />
                  </div>
                  <span>willchriscox2@gmail.com</span>
                </a>

                <a 
                  href="https://github.com/wcox2" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-lg hover:translate-x-2 transition-transform duration-300 group"
                >
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                    <Github size={20} />
                  </div>
                  <span>github.com/wcox2</span>
                </a>

                <a 
                  href="linkedin.com/in/william-cox-5a2b32185" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-lg hover:translate-x-2 transition-transform duration-300 group"
                >
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                    <Linkedin size={20} />
                  </div>
                  <span>linkedin.com/in/william-cox-5a2b32185</span>
                </a>

                <a 
                  href="x.com/cwidev" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-lg hover:translate-x-2 transition-transform duration-300 group"
                >
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                    <X size={20} />
                  </div>
                  <span>x.com/cwidev</span>
                </a>

                <a 
                  href="instagram.com/wcox2" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-lg hover:translate-x-2 transition-transform duration-300 group"
                >
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                    <Instagram size={20} />
                  </div>
                  <span>instagram.com/wcox2</span>
                </a>
              </div>
            </div>

            <div className="bg-white p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm mb-2 tracking-wide">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 tracking-wide">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 tracking-wide">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 focus:border-black focus:outline-none transition-colors resize-none"
                    rows="6"
                    placeholder="Your message..."
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full px-8 py-4 bg-black text-white hover:bg-gray-800 transition-all duration-300 text-sm tracking-wider"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-sm tracking-wider">
            © 2024 William Cox. All rights reserved.
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