import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download, Code, Palette, Zap } from 'lucide-react';
import { useCursor } from '../contexts/CursorContext';

const Hero: React.FC = () => {
  const { setCursorVariant } = useCursor();
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { icon: Code, text: "AIML Developer", color: "from-blue-500 to-purple-600" },
    { icon: Palette, text: "UI/UX Designer", color: "from-purple-500 to-pink-600" },
    { icon: Zap, text: "GenAI Explorer", color: "from-green-500 to-blue-600" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/10 rounded-full blur-2xl animate-ping"></div>
      </div>

      {/* Sliding Window Background */}
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-gradient-to-br ${slide.color} opacity-5 transition-transform duration-1000 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : index < currentSlide ? '-translate-x-full' : 'translate-x-full'
            }`}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Sliding Role Display */}
          <div className="mb-8 h-20 flex items-center justify-center overflow-hidden">
            <div className="relative">
              {slides.map((slide, index) => {
                const Icon = slide.icon;
                return (
                  <div
                    key={index}
                    className={`absolute inset-0 flex items-center gap-4 transition-all duration-700 ease-in-out ${
                      index === currentSlide 
                        ? 'translate-y-0 opacity-100' 
                        : index < currentSlide 
                          ? '-translate-y-full opacity-0' 
                          : 'translate-y-full opacity-0'
                    }`}
                  >
                    <Icon size={32} className={`bg-gradient-to-r ${slide.color} bg-clip-text text-transparent`} />
                    <span className={`text-2xl font-semibold bg-gradient-to-r ${slide.color} bg-clip-text text-transparent`}>
                      {slide.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">
            <span className="block overflow-hidden">
              <span className={`block transition-transform duration-1000 delay-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
                Hello, I'm
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className={`block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent transition-transform duration-1000 delay-500 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
                Pratham Jain
              </span>
            </span>
          </h1>
          
          <div className="overflow-hidden mb-8">
            <p className={`text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto transition-transform duration-1000 delay-700 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
              AI Developer passionate about building AI models and Agents
              that solve real-world problems. I specialize in creating intuitive user interfaces.
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-1000 delay-900 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* View My Work - Redirect to GitHub */}
            <a
              href="https://github.com/prathamj937?tab=repositories" // 🔁 Your GitHub repo link
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setCursorVariant('pointer')}
              onMouseLeave={() => setCursorVariant('default')}
              className="group bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg relative overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>

            {/* Download Resume */}
            <a
              href="/resume-final.pdf" // This must match the file name exactly!
              download="Pratham_Jain_Resume.pdf" // Optional: custom file name on download
              onMouseEnter={() => setCursorVariant('pointer')}
              onMouseLeave={() => setCursorVariant('default')}
              className="group border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 relative overflow-hidden"
            >
              <Download size={20} className="relative z-10 transition-colors duration-300 group-hover:text-white" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Download Resume
              </span>
              <div className="absolute inset-0 bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"></div>
            </a>

          </div>



          <div className={`flex items-center justify-center gap-6 transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {[
              { href: "https://github.com/prathamj937", icon: Github },
              { href: "https://www.linkedin.com/in/pratham-j-467469250/", icon: Linkedin },
              { href: "prathamj937@gmail.com", icon: Mail }
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setCursorVariant('pointer')}
                  onMouseLeave={() => setCursorVariant('default')}
                  className="group p-3 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-300 hover:scale-110 relative overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon size={24} className="relative z-10 transition-transform duration-300 group-hover:rotate-12" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <button
        onClick={scrollToProjects}
        onMouseEnter={() => setCursorVariant('pointer')}
        onMouseLeave={() => setCursorVariant('default')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 animate-bounce hover:scale-110"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;