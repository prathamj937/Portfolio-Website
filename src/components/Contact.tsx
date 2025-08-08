import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle } from 'lucide-react';
import { useCursor } from '../contexts/CursorContext';

const Contact: React.FC = () => {
  const { setCursorVariant } = useCursor();
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success state after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'prathamj937@gmail.com',
      color: 'text-blue-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-7827055486',
      color: 'text-green-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Gurgaon, India',
      href: '#',
      color: 'text-purple-600'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/prathamj937', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/prathamj937', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/prathamj937', label: 'Twitter' }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="overflow-hidden">
            <h2 className={`text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 transition-transform duration-1000 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
              Let's Work Together
            </h2>
          </div>
          <div className="overflow-hidden">
            <p className={`text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto transition-transform duration-1000 delay-200 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
              Have a project in mind or just want to chat? I'd love to hear from you!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Info */}
          <div>
            <div className="overflow-hidden mb-8">
              <h3 className={`text-2xl font-bold text-slate-900 dark:text-white transition-transform duration-700 ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}>
                Get in Touch
              </h3>
            </div>
            
            {/* Sliding Contact Cards */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div 
                    key={info.label}
                    className={`flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 group ${
                      isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${400 + index * 150}ms` }}
                  >
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon size={24} className={`${info.color} dark:text-purple-400`} />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                        {info.label}
                      </p>
                      <a 
                        href={info.href}
                        className="text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Media Links with Sliding Animation */}
            <div className="overflow-hidden">
              <h4 className={`font-semibold text-slate-900 dark:text-white mb-4 transition-transform duration-700 delay-700 ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}>
                Follow Me
              </h4>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setCursorVariant('pointer')}
                    onMouseLeave={() => setCursorVariant('default')}
                    className={`w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-xl flex items-center justify-center hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-300 hover:scale-110 group ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${800 + index * 100}ms` }}
                  >
                    <Icon size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
            <form onSubmit={handleSubmit} className="space-y-6 relative">
              {/* Success Overlay */}
              {isSubmitted && (
                <div className="absolute inset-0 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center z-10 animate-in slide-in-from-bottom duration-500">
                  <div className="text-center">
                    <CheckCircle size={64} className="text-green-500 mx-auto mb-4 animate-in zoom-in duration-300" />
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Thank you for reaching out. I'll get back to you soon!
                    </p>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-900 dark:text-white mb-2 group-focus-within:text-purple-600 dark:group-focus-within:text-purple-400 transition-colors duration-200">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-all duration-200 hover:border-purple-400 dark:hover:border-purple-500"
                  />
                </div>
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-slate-900 dark:text-white mb-2 group-focus-within:text-purple-600 dark:group-focus-within:text-purple-400 transition-colors duration-200">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-all duration-200 hover:border-purple-400 dark:hover:border-purple-500"
                  />
                </div>
              </div>
              
              <div className="group">
                <label htmlFor="subject" className="block text-sm font-medium text-slate-900 dark:text-white mb-2 group-focus-within:text-purple-600 dark:group-focus-within:text-purple-400 transition-colors duration-200">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-all duration-200 hover:border-purple-400 dark:hover:border-purple-500"
                />
              </div>
              
              <div className="group">
                <label htmlFor="message" className="block text-sm font-medium text-slate-900 dark:text-white mb-2 group-focus-within:text-purple-600 dark:group-focus-within:text-purple-400 transition-colors duration-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-all duration-200 resize-none hover:border-purple-400 dark:hover:border-purple-500"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                onMouseEnter={() => setCursorVariant('pointer')}
                onMouseLeave={() => setCursorVariant('default')}
                className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                      Send Message
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;