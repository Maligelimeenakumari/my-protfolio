import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Database, Server, Globe, Calendar, ChevronRight, Download, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  const skills = {
    frontend: ['React.js', 'JavaScript (ES6)', 'HTML5', 'CSS3', 'Tailwind CSS', 'ShadCN'],
    backend: ['Node.js', 'Express.js', 'Python', 'FastAPI', 'WebSockets', 'RESTful APIs'],
    database: ['MongoDB', 'PostgreSQL'],
    tools: ['Git', 'Postman', 'JWT', 'Cloudinary', 'GitHub API']
  };

  const projects = [
    {
      title: "Task Management System",
      description: "A comprehensive project & task tracking system with role-based access control and team collaboration features. Integrated GitHub API for automated repository management.",
      tech: ["React.js", "Node.js", "MongoDB", "Cloudinary", "JWT", "GitHub API"],
      highlights: ["50% reduction in manual effort", "Real-time updates with Socket.io", "File storage integration"]
    },
    {
      title: "Real-time Document Management",
      description: "Collaborative document editing platform similar to Google Docs with WebSocket integration for real-time synchronization.",
      tech: ["React.js", "Node.js", "Socket.io"],
      highlights: ["50% improvement in collaboration speed", "Real-time synchronization", "Multi-user editing"]
    },
    {
      title: "Asset Management System",
      description: "Automated asset request approval system with integrated notifications for real-time tracking and updates.",
      tech: ["React.js", "Node.js", "MongoDB"],
      highlights: ["40% reduction in processing time", "Email & Telegram notifications", "Automated approvals"]
    },
    {
      title: "Employee Management Portal",
      description: "Centralized platform for comprehensive employee data management, time tracking, leave management, and payroll operations.",
      tech: ["React.js", "Node.js", "MongoDB"],
      highlights: ["Centralized employee data", "Performance tracking", "Administrative automation"]
    },
    {
      title: "Nithiskha Dental Clinic Website",
      description: "Responsive website with admin panel for managing patient appointments, inquiries, and medical records.",
      tech: ["React.js", "Node.js", "MongoDB"],
      highlights: ["60% streamlined operations", "Appointment scheduling", "Patient record management"]
    },
    {
  title: "CIM CFA LOS",
  description: "Backend-driven Loan Origination System for managing loan applications, approvals, and workflow automation with secure admin controls.",
  tech: ["JavaScript", "Node.js"],
  highlights: [
    "Loan application creation and processing",
    "Workflow automation and role-based access",
    "Improved operational efficiency"
  ]
}

  ];

  const experience = [
    {
      title: "Associate Solution Engineer",
      company: "M2p Solutions privated limited",
      duration: "Jul 2025 - Present",
      description: "Backend-focused developer building scalable fintech applications. Specialized in Loan Origination Systems (LOS), API development, schedulers, and workflow automation.",
      achievements: [
        "Developed and enhanced LOS backend modules for loan creation and application processing",
        "Implemented API integrations and automation jobs to streamline loan workflows",
        "Worked on secure, role-based backend logic for financial applications"
      ]
    },
    {
      title: "Software Engineer",
      company: "Think AI Labs",
      duration: "Dec 2023 - Jun 2025",
      description: "Building scalable applications and optimizing workflows. Specialized in real-time applications and automation.",
      achievements: [
        "Developed task and project management system with role-based access control",
        "Integrated GitHub API and Cloudinary for project automation",
        "Specialized in real-time applications and automation"
      ]
    },
    {
      title: "Frontend Developer(Intern)",
      company: "Spanni Technologies Private Limited",
      duration: "Mar 2023 - May 2023",
      description: "Developed front-end features and enhancements for various projects in a collaborative environment.",
      achievements: [
        "Developed front-end features for multiple projects",
        "Collaborated with development team for timely delivery",
        "Enhanced user interfaces and user experience"
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const NavLink = ({ href, children, mobile = false }) => (
    <button
      onClick={() => scrollToSection(href)}
      className={`${
        mobile ? 'block w-full text-left px-4 py-2' : 'px-4 py-2'
      } text-gray-300 hover:text-blue-400 transition-colors duration-300 ${
        activeSection === href ? 'text-blue-400 border-b-2 border-blue-400' : ''
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Meenakumari
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <NavLink href="home">Home</NavLink>
              <NavLink href="about">About</NavLink>
              <NavLink href="experience">Experience</NavLink>
              <NavLink href="projects">Projects</NavLink>
              <NavLink href="skills">Skills</NavLink>
              <NavLink href="contact">Contact</NavLink>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-gray-800 rounded-lg mt-2 py-2">
              <NavLink href="home" mobile>Home</NavLink>
              <NavLink href="about" mobile>About</NavLink>
              <NavLink href="experience" mobile>Experience</NavLink>
              <NavLink href="projects" mobile>Projects</NavLink>
              <NavLink href="skills" mobile>Skills</NavLink>
              <NavLink href="contact" mobile>Contact</NavLink>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-4xl font-bold">
              MM
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Maligeli Meenakumari
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Full-Stack Software Developer
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Passionate developer specializing in React.js, Node.js, and MongoDB. 
              I build scalable applications, optimize workflows, and create seamless user experiences.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://github.com/Maligelimeenakumari"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/maligeli-meenakumari-a52981211"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="mailto:meenakumarimaligeli@gmail.com"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Mail size={20} />
              Email
            </a>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            Explore My Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I am a passionate and results-driven Software Developer with a strong foundation in full-stack web development. 
                My expertise spans across modern technologies including React.js, Node.js, and MongoDB.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I excel in building scalable applications, enhancing system efficiency, optimizing workflows, 
                and implementing seamless API integrations. My approach combines technical excellence with 
                creative problem-solving to deliver impactful solutions.
              </p>
              <div className="flex items-center gap-2 text-gray-400 mb-2">
                <MapPin size={18} />
                <span>Based in Hyderabad, India</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 mb-2">
                <Phone size={18} />
                <span>+91 9963615214</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail size={18} />
                <span>meenakumarimaligeli@gmail.com</span>
              </div>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Education</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-xl font-semibold text-blue-400">B.Tech in Mechanical Engineering</h4>
                  <p className="text-gray-300">SKUCET</p>
                  <p className="text-gray-400">Aug 2018 – May 2022 | 77.57%</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-xl font-semibold text-purple-400">Intermediate (MPC)</h4>
                  <p className="text-gray-300">SSGS Junior College</p>
                  <p className="text-gray-400">Aug 2016 – May 2018 | 94.3%</p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-semibold text-green-400">SSC</h4>
                  <p className="text-gray-300">ZPH School, Nelagonda</p>
                  <p className="text-gray-400">Aug 2015 – May 2016 | 85%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-all duration-300 hover:scale-105">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-2">{exp.title}</h3>
                    <p className="text-xl text-gray-300 mb-2">{exp.company}</p>
                  </div>
                  <div className="flex items-center text-gray-400 bg-gray-700 px-4 py-2 rounded-full">
                    <Calendar size={16} className="mr-2" />
                    {exp.duration}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                <div className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <ChevronRight size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-all duration-300 hover:scale-105 group">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{project.description}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Highlights:</h4>
                  <div className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-300">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-700 text-xs rounded-full text-gray-300 hover:bg-gray-600 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-6 rounded-2xl hover:bg-gray-750 transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <Globe className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-bold text-blue-400">Frontend</h3>
              </div>
              <div className="space-y-2">
                {skills.frontend.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-2xl hover:bg-gray-750 transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <Server className="text-green-400 mr-3" size={24} />
                <h3 className="text-xl font-bold text-green-400">Backend</h3>
              </div>
              <div className="space-y-2">
                {skills.backend.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-2xl hover:bg-gray-750 transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <Database className="text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-bold text-purple-400">Database</h3>
              </div>
              <div className="space-y-2">
                {skills.database.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-2xl hover:bg-gray-750 transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <Code className="text-orange-400 mr-3" size={24} />
                <h3 className="text-xl font-bold text-orange-400">Tools & Others</h3>
              </div>
              <div className="space-y-2">
                {skills.tools.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8"></div>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can work together!
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a
              href="mailto:meenakumarimaligeli@gmail.com"
              className="bg-gray-800 p-6 rounded-2xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 group"
            >
              <Mail className="text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-300">meenakumarimaligeli@gmail.com</p>
            </a>

            <a
              href="tel:+919963615214"
              className="bg-gray-800 p-6 rounded-2xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 group"
            >
              <Phone className="text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-300">+91 9963615214</p>
            </a>

            <div className="bg-gray-800 p-6 rounded-2xl">
              <MapPin className="text-purple-400 mx-auto mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-300">Hyderabad, India</p>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Maligeli"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 p-4 rounded-full transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/maligeli-meenakumari-a52981211"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 p-4 rounded-full transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:meenakumarimaligeli@gmail.com"
              className="bg-green-600 hover:bg-green-700 p-4 rounded-full transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 px-4 text-center">
        <p className="text-gray-400">
          © 2025 Maligeli Meenakumari. Built with React, Vite & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;