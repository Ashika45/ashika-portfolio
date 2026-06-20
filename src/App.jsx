import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiGithub, 
  FiLinkedin, 
  FiMail, 
  FiCheckCircle, 
  FiMenu, 
  FiX, 
  FiArrowDown,
  FiSend,
  FiFileText,
  FiSmartphone,
  FiCode,
  FiServer,
  FiDatabase,
  FiCpu,
  FiCloud,
  FiCheck,
  FiAlertCircle,
  FiBookOpen
} from 'react-icons/fi';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

import myPhoto from './assets/me.png';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  
  // Notification states
  const [showNotification, setShowNotification] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Handle Form Submission
  const handleSendMessage = (e) => {
    e.preventDefault();
    
    // Trigger simulated success notification
    setShowNotification(true);
    
    // Clear form inputs
    setFormData({ name: '', email: '', message: '' });

    // Automatically dismiss toast after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  const scrollAnimation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.15 },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  const services = [
    {
      icon: <FiCode />,
      title: "Frontend Development",
      desc: "Crafting beautiful, modern, and highly responsive user interfaces using HTML, CSS, JavaScript, and React.js synchronized with clean Tailwind configurations."
    },
    {
      icon: <FiServer />,
      title: "Backend Development",
      desc: "Building highly efficient, scalable server-side systems and logical layers utilizing Node.js, Express.js, and Java workflows."
    },
    {
      icon: <FiDatabase />,
      title: "Database Management",
      desc: "Designing secure, structured, and optimized data layers using MongoDB alongside RESTful API architecture patterns."
    },
    {
      icon: <FiCpu />,
      title: "AI & Optimization",
      desc: "Integrating advanced AI productivity tools and writing performance-optimized code backed by core Data Structures & Algorithms principles."
    }
  ];

  const projects = [
    { 
      icon: <FiCpu />, 
      title: "AI Interview Screening System", 
      desc: "An intelligent platform designed to streamline recruitment by screening candidate responses using automated processing models.",
      link: "#"
    },
    { 
      icon: <FiSmartphone />, 
      title: "Fitness Tracker App", 
      desc: "A dynamic mobile-responsive application to log daily workout schedules, track caloric metrics, and monitor consistency over time.",
      link: "#"
    },
    { 
      icon: <FiCloud />, 
      title: "Weather Application", 
      desc: "A real-time weather tracking interface that fetches current atmospheric conditions and forecasts using external API integration.",
      link: "#"
    },
    { 
      icon: <FiCheckCircle />, 
      title: "Advanced To-Do List", 
      desc: "A highly interactive task management application complete with task prioritization, filtering capabilities, and local state persistence.",
      link: "#"
    }
  ];

  return (
    <div className="bg-[#F5EBE6] text-[#3D2C1F] font-sans selection:bg-[#E3D5CA] selection:text-[#3D2C1F] min-h-screen overflow-x-hidden relative">
      
      {/* ─── FLOATING NOTIFICATION POPUP ─── */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -30, x: '-50%' }}
            className="fixed top-6 left-1/2 z-[100] flex items-center space-x-3 bg-[#3D2C1F] text-[#F5EBE6] px-6 py-4 rounded-2xl shadow-2xl border border-[#8B5E3C]/30 min-w-[280px] sm:min-w-[340px]"
          >
            <div className="text-xl text-[#E3D5CA] bg-[#4A3525] p-2 rounded-xl">
              <FiAlertCircle />
            </div>
            <div>
              <h4 className="text-sm font-bold tracking-wide">Message Sent!</h4>
              <p className="text-xs text-[#F5EBE6]/70 mt-0.5">Thank you for reaching out.</p>
            </div>
            <button 
              onClick={() => setShowNotification(false)}
              className="ml-auto text-sm text-[#F5EBE6]/50 hover:text-[#F5EBE6] p-1 transition-colors"
            >
              <FiX />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. HEADER / NAVIGATION */}
      <nav className="sticky top-0 z-50 bg-[#F5EBE6]/90 backdrop-blur-md px-6 py-4 border-b border-[#E3D5CA] transition-all">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold tracking-tight"
          >
            Ashika <span role="img" aria-label="hijabi">🧕</span>
          </motion.h1>

          <div className="hidden md:flex space-x-8 font-medium">
            {['Home', 'About', 'Skills', 'Services', 'Qualifications', 'Projects', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#8B5E3C] transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl focus:outline-none text-[#3D2C1F]">
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#F5EBE6] border-t border-[#E3D5CA] mt-3 py-4 flex flex-col space-y-4 px-2"
            >
              {['Home', 'About', 'Skills', 'Services', 'Qualifications', 'Projects', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="block font-medium hover:text-[#8B5E3C] transition-colors px-2"
                >
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 2. HERO SECTION */}
      <section id="home" className="max-w-6xl mx-auto px-6 py-20 min-h-[85vh] flex flex-col justify-between relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center my-auto">
          
          <div className="hidden md:flex md:col-span-1 flex-col space-y-6 text-xl text-[#3D2C1F]/70">
            <a href="https://github.com/Ashika45" target="_blank" rel="noreferrer" className="hover:text-[#3D2C1F] transition-colors"><FiGithub /></a>
            <a href="https://www.linkedin.com/in/ashika-a43a76288/" target="_blank" rel="noreferrer" className="hover:text-[#3D2C1F] transition-colors"><FiLinkedin /></a>
            <a href="https://leetcode.com/u/ASHIKA_64/" target="_blank" rel="noreferrer" className="hover:text-[#3D2C1F] transition-colors"><SiLeetcode className="text-lg" /></a>
            <a href="https://www.geeksforgeeks.org/profile/ashikagk0r" target="_blank" rel="noreferrer" className="hover:text-[#3D2C1F] transition-colors"><SiGeeksforgeeks /></a>
          </div>

          <motion.div {...scrollAnimation} className="md:col-span-6 space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#3D2C1F]">
                Ashika <span role="img" aria-label="wave">👋</span>
              </h1>
              <h3 className="text-xl md:text-2xl font-medium text-[#3D2C1F]/80">Software Developer</h3>
            </div>
            <p className="text-base md:text-lg text-[#3D2C1F]/80 leading-relaxed max-w-md">
              I'm a passionate software developer dedicated to crafting clean, user-focused digital solutions. I enjoy blending logic with seamless functionality across everything I build.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center space-x-2 bg-[#3D2C1F] text-[#F5EBE6] px-6 py-3 rounded-xl hover:bg-[#4A3525] transition-all hover:shadow-md font-medium"
            >
              <span>Say Hello</span>
              <FiSend />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -15, 0] }}
            transition={{
              opacity: { duration: 0.6 },
              y: { duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
            }}
            className="md:col-span-5 flex justify-center"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] border-8 border-[#E3D5CA] overflow-hidden shadow-xl bg-[#E3D5CA] animate-[morph_8s_ease-in-out_infinite] transition-all">
              <img src={myPhoto} alt="Ashika Profile" className="w-full h-full object-cover scale-105" />
            </div>
          </motion.div>
        </div>

        <div className="flex justify-center md:justify-start md:pl-24 pt-8 text-[#3D2C1F]/60">
          <a href="#about" className="flex items-center space-x-2 hover:text-[#3D2C1F] transition-colors">
            <FiSmartphone className="animate-bounce" />
            <span className="text-sm font-medium">Scroll Down</span>
            <FiArrowDown className="text-xs" />
          </a>
        </div>
      </section>

      {/* 3. ABOUT ME SECTION */}
      <section id="about" className="bg-[#E3D5CA]/30 py-24 border-t border-b border-[#E3D5CA]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="text-sm text-[#3D2C1F]/60 tracking-wider uppercase mt-1">Introduction</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <motion.div {...scrollAnimation} className="md:col-span-5 flex justify-center">
              <div className="rounded-3xl overflow-hidden shadow-lg border border-[#E3D5CA] w-72 h-80 bg-[#E3D5CA]">
                <img src={myPhoto} alt="About portrait" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            <motion.div {...scrollAnimation} className="md:col-span-7 space-y-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#E3D5CA] p-4 rounded-2xl text-center shadow-sm">
                  <FiGithub className="mx-auto text-xl mb-2 text-[#3D2C1F]" />
                  <h4 className="text-xs font-bold text-[#3D2C1F]">GitHub Repo</h4>
                  <p className="text-[11px] text-[#3D2C1F]/70 mt-0.5">Continuous Commits</p>
                </div>
                <div className="bg-[#E3D5CA] p-4 rounded-2xl text-center shadow-sm">
                  <FiCheckCircle className="mx-auto text-xl mb-2 text-[#3D2C1F]" />
                  <h4 className="text-xs font-bold text-[#3D2C1F]">MERN Stack</h4>
                  <p className="text-[11px] text-[#3D2C1F]/70 mt-0.5">Development Focus</p>
                </div>
                <div className="bg-[#E3D5CA] p-4 rounded-2xl text-center shadow-sm">
                  <FiLinkedin className="mx-auto text-xl mb-2 text-[#3D2C1F]" />
                  <h4 className="text-xs font-bold text-[#3D2C1F]">Network</h4>
                  <p className="text-[11px] text-[#3D2C1F]/70 mt-0.5">1K+ Followers</p>
                </div>
              </div>

              <p className="text-[#3D2C1F]/80 leading-relaxed text-sm md:text-base">
                I am a tech professional skilled in structuring logic platforms and designing application frontends. Deeply focused on algorithms, optimization tracks, and modern software design concepts, I consistently leverage full stack environments and AI tools to craft refined user ecosystems.
              </p>

              {/* Set up with a target file attribute for your future PDF upload */}
              <a 
                href="/Ashika_Resume.pdf" 
                download="Ashika_Resume.pdf"
                className="inline-flex items-center space-x-2 bg-[#3D2C1F] text-[#F5EBE6] px-5 py-2.5 rounded-xl hover:bg-[#4A3525] transition-colors text-sm font-medium"
              >
                <span>Download CV</span>
                <FiFileText />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. SKILLS SECTION */}
      <section id="skills" className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Skills</h2>
          <p className="text-sm text-[#3D2C1F]/60 tracking-wider uppercase mt-1">My Technical Level</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Languages", items: ["Java", "C", "JavaScript", "HTML / CSS"] },
            { title: "Web Technologies", items: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"] },
            { title: "Tools & Coding", items: ["Data Structures & Algorithms", "AI Productivity Tools", "LeetCode & GFG", "Git & GitHub"] }
          ].map((group, idx) => (
            <motion.div 
              key={idx}
              {...scrollAnimation}
              className="bg-[#E3D5CA]/50 p-8 rounded-3xl border border-[#E3D5CA] shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-bold mb-6 text-center text-[#3D2C1F] border-b border-[#E3D5CA] pb-2">{group.title}</h3>
              <div className="grid grid-cols-1 gap-4">
                {group.items.map((skill, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <FiCheckCircle className="text-[#3D2C1F] shrink-0 text-sm" />
                    <span className="text-sm font-medium text-[#3D2C1F]/90">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. SERVICES SECTION */}
      <section id="services" className="bg-[#E3D5CA]/30 py-24 border-t border-b border-[#E3D5CA]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Services</h2>
            <p className="text-sm text-[#3D2C1F]/60 tracking-wider uppercase mt-1">What I Offer</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                {...scrollAnimation}
                className="bg-[#F5EBE6] border border-[#E3D5CA] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center space-y-4"
              >
                <div className="text-3xl text-[#8B5E3C] bg-[#E3D5CA]/50 p-3 rounded-xl">
                  {service.icon}
                </div>
                <h3 className="text-base font-bold text-[#3D2C1F]">{service.title}</h3>
                <p className="text-xs text-[#3D2C1F]/80 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. QUALIFICATIONS SECTION */}
      <section id="qualifications" className="py-24 border-b border-[#E3D5CA]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Qualification</h2>
            <p className="text-sm text-[#3D2C1F]/60 tracking-wider uppercase mt-1">My Personal Journey</p>
          </div>

          <motion.div {...scrollAnimation} className="relative border-l-2 border-[#3D2C1F]/30 ml-4 md:ml-32 space-y-12">
            <div className="relative pl-8">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#3D2C1F] border-4 border-[#F5EBE6]" />
              <h3 className="text-lg font-bold text-[#3D2C1F]">Bachelor of Computer Applications (BCA)</h3>
              <p className="text-sm text-[#3D2C1F]/70 font-medium mt-1">Completed Undergraduate Studies</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#3D2C1F] border-4 border-[#F5EBE6]" />
              <h3 className="text-lg font-bold text-[#3D2C1F]">Master of Computer Applications (MCA)</h3>
              <p className="text-sm text-[#3D2C1F]/70 font-medium mt-1">Postgraduate Preparation Track</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. MY PROJECTS CAROUSEL SECTION */}
      <section id="projects" className="py-24 max-w-6xl mx-auto px-6 overflow-hidden">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-[#3D2C1F]">My Projects</h2>
          <p className="text-sm text-[#3D2C1F]/60 mt-2">Some of my work</p>
        </div>

        <div className="relative flex flex-col items-center justify-center">
          <div className="w-full max-w-4xl px-4 flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProjectIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
              >
                {projects.slice(currentProjectIndex * 2, (currentProjectIndex * 2) + 2).map((project, idx) => (
                  <div 
                    key={idx}
                    className="bg-[#D9C9BD] border border-[#CDBBAF] rounded-3xl p-8 h-[360px] flex flex-col justify-between items-center text-center shadow-sm"
                  >
                    <div className="flex flex-col items-center space-y-4 pt-4">
                      <div className="text-3xl text-[#3D2C1F]/80">
                        {project.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-[#3D2C1F]">{project.title}</h3>
                      <p className="text-sm text-[#3D2C1F]/80 leading-relaxed max-w-xs">{project.desc}</p>
                    </div>
                    <div className="pb-4">
                      <a 
                        href={project.link}
                        target={project.link === "#" ? "_self" : "_blank"} 
                        rel="noreferrer" 
                        className="inline-flex items-center space-x-2 text-sm font-bold tracking-wide text-[#3D2C1F] hover:text-[#5C4331] transition-colors"
                      >
                        <span>{project.link === "#" ? "Link Coming Soon" : "View on GitHub"}</span>
                        <FiGithub />
                      </a>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex space-x-3 mt-10">
            {[0, 1].map((dotIndex) => (
              <button
                key={dotIndex}
                onClick={() => setCurrentProjectIndex(dotIndex)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentProjectIndex === dotIndex ? 'w-8 bg-[#3D2C1F]' : 'w-2.5 bg-[#3D2C1F]/30'
                }`}
                aria-label={`Go to slide group ${dotIndex + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 8. CONTACT ME SECTION */}
      <section id="contact" className="bg-[#E3D5CA]/20 py-24 border-t border-[#E3D5CA]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Get in touch</h2>
            <p className="text-sm text-[#3D2C1F]/60 tracking-wider uppercase mt-1">Contact Me</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <motion.div {...scrollAnimation} className="md:col-span-5 space-y-4">
              <h3 className="text-base font-bold tracking-wide uppercase mb-6 text-center md:text-left">Talk to me</h3>
              
              <div className="bg-[#E3D5CA]/60 border border-[#E3D5CA] p-5 rounded-2xl text-center shadow-sm">
                <FiMail className="mx-auto text-xl mb-1" />
                <h4 className="text-sm font-bold">Email</h4>
                <p className="text-xs text-[#3D2C1F]/80 mt-0.5">ashika.a359@gmail.com</p>
                <a href="mailto:ashika.a359@gmail.com" className="inline-block text-xs font-semibold text-[#3D2C1F] hover:underline mt-2">Write me →</a>
              </div>

              <div className="bg-[#E3D5CA]/60 border border-[#E3D5CA] p-5 rounded-2xl text-center shadow-sm">
                <FiLinkedin className="mx-auto text-xl mb-1" />
                <h4 className="text-sm font-bold">LinkedIn</h4>
                <p className="text-xs text-[#3D2C1F]/80 mt-0.5">Professional Network</p>
                <a href="https://www.linkedin.com/in/ashika-a43a76288/" target="_blank" rel="noreferrer" className="inline-block text-xs font-semibold text-[#3D2C1F] hover:underline mt-2">Write me →</a>
              </div>
            </motion.div>

            <motion.div {...scrollAnimation} className="md:col-span-7">
              <h3 className="text-base font-bold tracking-wide uppercase mb-6 text-center md:text-left">Write me your projects</h3>
              <form onSubmit={handleSendMessage} className="space-y-5">
                <div className="relative">
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Insert your name" 
                    className="w-full bg-transparent border border-[#3D2C1F]/40 focus:border-[#3D2C1F] rounded-2xl px-5 py-4 text-sm outline-none transition-colors placeholder:text-[#3D2C1F]/40" 
                  />
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="Insert your email" 
                    className="w-full bg-transparent border border-[#3D2C1F]/40 focus:border-[#3D2C1F] rounded-2xl px-5 py-4 text-sm outline-none transition-colors placeholder:text-[#3D2C1F]/40" 
                  />
                </div>
                <div className="relative">
                  <textarea 
                    rows="5" 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Write your project details" 
                    className="w-full bg-transparent border border-[#3D2C1F]/40 focus:border-[#3D2C1F] rounded-2xl px-5 py-4 text-sm outline-none transition-colors placeholder:text-[#3D2C1F]/40 resize-none" 
                  />
                </div>
                <button type="submit" className="w-full md:w-auto inline-flex items-center justify-center space-x-2 bg-[#3D2C1F] text-[#F5EBE6] px-8 py-3.5 rounded-2xl hover:bg-[#4A3525] transition-colors font-medium shadow-sm">
                  <span>Send Message</span>
                  <FiSend className="text-xs" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-[#E3D5CA] py-12 text-center border-t border-[#3D2C1F]/10">
        <div className="max-w-6xl mx-auto px-6 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Ashika <span role="img" aria-label="dove">🕊️</span></h2>
          <div className="flex justify-center space-x-6 text-sm font-medium">
            <a href="#about" className="hover:text-[#8B5E3C] transition-colors">About</a>
            <a href="#services" className="hover:text-[#8B5E3C] transition-colors">Services</a>
            <a href="#qualifications" className="hover:text-[#8B5E3C] transition-colors">Qualification</a>
            <a href="#projects" className="hover:text-[#8B5E3C] transition-colors">Projects</a>
          </div>
          
          <div className="flex justify-center space-x-4 text-lg text-[#3D2C1F]/80">
            <a href="https://www.linkedin.com/in/ashika-a43a76288/" target="_blank" rel="noreferrer" className="bg-[#F5EBE6] p-2.5 rounded-full hover:scale-105 transition-transform"><FiLinkedin /></a>
            <a href="https://github.com/Ashika45" target="_blank" rel="noreferrer" className="bg-[#F5EBE6] p-2.5 rounded-full hover:scale-105 transition-transform"><FiGithub /></a>
            <a href="https://leetcode.com/u/ASHIKA_64/" target="_blank" rel="noreferrer" className="bg-[#F5EBE6] p-2.5 rounded-full hover:scale-105 transition-transform"><SiLeetcode /></a>
            <a href="https://www.geeksforgeeks.org/profile/ashikagk0r" target="_blank" rel="noreferrer" className="bg-[#F5EBE6] p-2.5 rounded-full hover:scale-105 transition-transform"><SiGeeksforgeeks /></a>
          </div>
          
          <p className="text-xs text-[#3D2C1F]/60 pt-4">&copy; Ashika. All rights reserved</p>
        </div>
      </footer>

    </div>
  );
}