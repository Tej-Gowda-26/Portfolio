import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code, Database, Globe, ChevronDown, Download, Send, GraduationCap, BookOpen, School, Eye } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [emailJSLoaded, setEmailJSLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.async = true;
    script.onload = () => {
      window.emailjs.init('CSmh-asZ7GEr6X0iW');
      setEmailJSLoaded(true);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const projects = [
    {
      title: "AI Quiz Builder",
      tech: ["Next.js", "MongoDB", "NextAuth.js", "Tailwind CSS", "Gemini API"],
      description: "A full-stack web platform that leverages the Gemini API to generate interactive quizzes from user-provided topics or documents. Features secure authentication with NextAuth.js and MongoDB, an analytics dashboard for tracking quiz performance, and is deployed on Vercel for optimal scalability.",
      github: "https://github.com/Tej-Gowda-26/AI-Quiz-Builder",
      image: "images/AI_Quiz_Builder.png"
    },
    {
      title: "SMS Spam Classifier",
      tech: ["Python", "Scikit-learn", "Pandas", "NLTK", "Streamlit"],
      description: "A machine learning model using Logistic Regression with TF-IDF vectorization to classify SMS messages as spam or legitimate. Achieves 96% accuracy with high precision and recall through robust preprocessing and evaluation pipelines, featuring an interactive Streamlit interface for real-time message classification.",
      github: "https://github.com/Tej-Gowda-26/SMS-Spam-Detection",
      image: "images/SMS_Spam_Classifier.png"
    },
    {
      title: "University Management System",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      description: "A role-based web application designed to streamline student, faculty, and administrative workflows across university operations. Implements dedicated dashboards tailored to different user roles with optimized MySQL queries for efficient data management, tested and deployed locally using XAMPP.",
      github: "https://github.com/Tej-Gowda-26/University-Management-System",
      image: "images/UMS.png"
    }
  ];

  const skills = {
    "Programming Languages": ["Python", "Java", "JavaScript", "SQL"],
    "AI & Machine Learning": ["NumPy", "Pandas", "Scikit-learn", "TensorFlow"],
    "Web Development": ["React.js", "Next.js", "Tailwind CSS"],
    "Database & Cloud": ["MySQL", "MongoDB", "AWS"]
  };

  const getSkillIcon = (skill) => {
    const icons = {
      "Java": "☕",
      "Python": "🐍",
      "JavaScript": "⚡",
      "SQL": "🗄️",
      "React.js": "⚛️",
      "Next.js": "🔺",
      "Tailwind CSS": "🎨",
      "MySQL": "🐬",
      "MongoDB": "🍃",
      "AWS": "☁️",
      "TensorFlow": "🧠",
      "Scikit-learn": "📊",
      "NumPy": "🔢",
      "Pandas": "🐼"
    };
    return icons[skill] || "●";
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus('Please fill in all fields');
      setTimeout(() => setFormStatus(''), 3000);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus('Please enter a valid email address');
      setTimeout(() => setFormStatus(''), 3000);
      return;
    }

    if (!emailJSLoaded) {
      setFormStatus('Email service is loading, please try again...');
      setTimeout(() => setFormStatus(''), 3000);
      return;
    }

    setIsSending(true);
    setFormStatus('');

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    };

    window.emailjs.send(
      'service_2rjlt6x',
      'template_qnukcsa',
      templateParams
    )
      .then(() => {
        setIsSending(false);
        setFormStatus('Message sent! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus(''), 5000);
      })
      .catch((error) => {
        console.error('Email send failed:', error);
        setIsSending(false);
        setFormStatus('Failed to send message. Please try again.');
        setTimeout(() => setFormStatus(''), 5000);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-end">
            <div className="flex items-center gap-4 md:gap-8">
              <button onClick={() => scrollToSection('home')} className={`text-sm md:text-base transition-colors ${activeSection === 'home' ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'}`}>
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className={`text-sm md:text-base transition-colors ${activeSection === 'about' ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'}`}>
                About
              </button>
              <button onClick={() => scrollToSection('skills')} className={`text-sm md:text-base transition-colors ${activeSection === 'skills' ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'}`}>
                Skills
              </button>
              <button onClick={() => scrollToSection('projects')} className={`text-sm md:text-base transition-colors ${activeSection === 'projects' ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'}`}>
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className={`text-sm md:text-base transition-colors ${activeSection === 'contact' ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'}`}>
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 relative pt-20">
        <div className="relative z-10 text-center max-w-4xl">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center mb-6 shadow-2xl p-6">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-white">
                <circle cx="12" cy="8" r="4" />
                <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
              </svg>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600 bg-clip-text text-transparent leading-tight pb-3">
            Hi, I'm Tejas Gowda M S
          </h1>

          <p className="text-xl md:text-3xl text-cyan-200 mb-8">
            Aspiring SDE | AI & ML Enthusiast
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="mailto:tejasgowda2604@gmail.com" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm transition-all hover:scale-105">
              <Mail size={20} />
              <span>Email</span>
            </a>
            <a href="https://linkedin.com/in/tejasgowdams" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm transition-all hover:scale-105">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/Tej-Gowda-26" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm transition-all hover:scale-105">
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>

          <div className="mb-12">
            <a
              href="https://drive.google.com/file/d/1Z6ePWaIWnyNfNWImDlDbI59vHRVpIu1p/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all inline-flex items-center justify-center gap-3 mx-auto shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
            >
              <Eye size={24} />
              <span className="text-lg">View Resume</span>
            </a>
          </div>

          {
            activeSection === 'home' && (
              <div className="animate-bounce">
                <ChevronDown size={40} className="mx-auto text-cyan-300" />
              </div>
            )
          }
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-cyan-300">Education</h3>
              <div className="space-y-8 relative">
                <div className="absolute left-[15px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-600"></div>

                <div className="relative pl-10">
                  <div className="absolute left-0 top-1 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center border-4 border-slate-900">
                    <GraduationCap size={16} className="text-white" />
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-cyan-500/30">
                    <h4 className="text-lg font-semibold text-white mb-2">Bachelor of Technology in Information Science and Engineering</h4>
                    <p className="text-gray-400 text-sm mb-2">M. S. Ramaiah University of Applied Sciences | 2022 – 2026</p>
                    <span className="text-cyan-400 font-semibold text-sm">CGPA: 9.54/10.0</span>
                  </div>
                </div>

                <div className="relative pl-10">
                  <div className="absolute left-0 top-1 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center border-4 border-slate-900">
                    <BookOpen size={16} className="text-white" />
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-blue-500/30">
                    <h4 className="text-lg font-semibold text-white mb-2">Pre-University Course (PCMC)</h4>
                    <p className="text-gray-400 text-sm mb-2">KLE Independent PU College | 2020 – 2022</p>
                    <span className="text-blue-400 font-semibold text-sm">Percentage: 97.5%</span>
                  </div>
                </div>

                <div className="relative pl-10">
                  <div className="absolute left-0 top-1 w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center border-4 border-slate-900">
                    <School size={16} className="text-white" />
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-cyan-400/30">
                    <h4 className="text-lg font-semibold text-white mb-2">Secondary School (SSLC)</h4>
                    <p className="text-gray-400 text-sm mb-2">St. Lawrence High School | 2010 – 2020</p>
                    <span className="text-cyan-300 font-semibold text-sm">Percentage: 95.3%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-cyan-300 text-center">What Drives Me</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-500/30">
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">Software Development</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">Passionate about building clean, efficient applications with modern technologies. Focused on creating scalable, maintainable, and impactful solutions.</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-6 border border-blue-500/30">
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">AI & Technology</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">Exploring the intersection of artificial intelligence and software development. Driven by a curiosity to leverage emerging technologies for solving complex problems.</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-slate-500/10 to-cyan-500/10 rounded-xl p-6 border border-slate-500/30">
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">Learning & Growth</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">Continuously learning and adapting to new technologies. Enjoys tackling challenges that push technical boundaries and expand skill sets.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="space-y-4">
                <h3 className="text-xl font-bold text-cyan-300 mb-6 text-center">
                  {category}
                </h3>
                <div className="space-y-3">
                  {items.map((skill) => (
                    <div key={skill} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl text-white">
                          {getSkillIcon(skill)}
                        </span>
                        <span className="text-white font-medium">
                          {skill}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all hover:transform hover:scale-105 group">
                <div className="relative h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-tight">{project.title}</h3>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors flex-shrink-0">
                      <Github size={24} />
                    </a>
                  </div>

                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-cyan-500/10 text-cyan-300 rounded text-xs border border-cyan-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Get in Touch
          </h2>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-cyan-300">Send a Message</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name <span className="text-red-400">*</span>
                </label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-gray-400" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email <span className="text-red-400">*</span>
                </label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-gray-400" placeholder="your.email@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-gray-400 resize-none" placeholder="Your message..."></textarea>
              </div>
              <button 
                onClick={handleSubmit} 
                disabled={isSending}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send size={20} className={isSending ? 'animate-pulse' : ''} />
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
              {formStatus && (
                <div className={`text-center text-sm font-medium ${formStatus.includes('Please') || formStatus.includes('valid') || formStatus.includes('Failed') ? 'text-red-400' : 'text-green-400'}`}>
                  {formStatus}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-black/30 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">Let's build something amazing together!</p>
          <div className="flex justify-center gap-6">
            <a href="mailto:tejasgowda2604@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors hover:scale-110 transform">
              <Mail size={24} />
            </a>
            <a href="https://linkedin.com/in/tejasgowdams" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors hover:scale-110 transform">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/Tej-Gowda-26" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors hover:scale-110 transform">
              <Github size={24} />
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-6">© 2025 Tejas Gowda M S. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}