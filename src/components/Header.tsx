import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useCursor } from '../contexts/CursorContext';

const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const { setCursorVariant } = useCursor();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'projects', 'skills', 'about', 'journey', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'about', label: 'About' },
    { id: 'journey', label: 'Journey' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg shadow-lg translate-y-0' 
        : 'bg-transparent translate-y-0'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with sliding animation */}
          <div className="text-2xl font-bold text-slate-900 dark:text-white relative overflow-hidden">
            <span className={`inline-block transition-transform duration-700 ${isScrolled ? 'translate-y-0' : 'translate-y-0'}`}>
              <span className="text-purple-600">Port</span>
              <span className="inline-block transition-transform duration-300 hover:rotate-12">folio</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={() => setCursorVariant('pointer')}
                onMouseLeave={() => setCursorVariant('default')}
                className={`relative text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 font-medium group ${
                  activeSection === item.id ? 'text-purple-600 dark:text-purple-400' : ''
                }`}
              >
                {item.label}
                {/* Sliding underline */}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-purple-600 transform origin-left transition-transform duration-300 ${
                  activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </button>
            ))}
            
            {/* Theme Toggle with rotation animation */}
            <button
              onClick={toggleTheme}
              onMouseEnter={() => setCursorVariant('pointer')}
              onMouseLeave={() => setCursorVariant('default')}
              className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-300 hover:scale-110 group"
            >
              <div className="relative w-5 h-5">
                <Sun className={`absolute inset-0 transition-all duration-500 ${isDark ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} size={20} />
                <Moon className={`absolute inset-0 transition-all duration-500 ${isDark ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} size={20} />
              </div>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 transition-all duration-300 hover:scale-110"
            >
              <div className="relative w-5 h-5">
                <Sun className={`absolute inset-0 transition-all duration-500 ${isDark ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} size={20} />
                <Moon className={`absolute inset-0 transition-all duration-500 ${isDark ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} size={20} />
              </div>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 transition-all duration-300 hover:scale-110"
            >
              <div className="relative w-5 h-5">
                <Menu className={`absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} size={20} />
                <X className={`absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} size={20} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu with sliding animation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="mt-4 py-4 bg-white dark:bg-slate-800 rounded-lg shadow-lg">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200 transform ${
                  isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                } ${activeSection === item.id ? 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;