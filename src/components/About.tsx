import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Award, Coffee, Heart, Code2, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('story');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Calendar, label: 'Years Experience', value: 'Fresher', color: 'text-blue-600' },
    { icon: Award, label: 'Projects Completed', value: '30+', color: 'text-green-600' },
    { icon: Coffee, label: 'Cups of Coffee', value: '∞', color: 'text-yellow-600' },
    { icon: MapPin, label: 'Based in', value: 'Gurgaon', color: 'text-purple-600' },
  ];

  const tabs = [
    { id: 'story', label: 'My Story', icon: Heart },
    { id: 'philosophy', label: 'Philosophy', icon: Lightbulb },
    { id: 'focus', label: 'Current Focus', icon: Code2 }
  ];

  const tabContent = {
    story: {
      title: "The Journey",
      content: [
        "I'm an AI-driven developer with a strong foundation in machine learning, full-stack web development, and generative AI. My journey began with a fascination for how machines interpret images and text, and it has grown into a mission to build intelligent, accessible, and high-impact digital experiences.",
        "I believe that true innovation happens at the intersection of intelligence and usability. I strive to create solutions that are not only technically sound—leveraging tools like TensorFlow, PyTorch, FastAPI, and React—but also intuitive, scalable, and impactful for real-world users.",
        "When I'm not building or deploying AI models, you can find me exploring new LLM frameworks, fine-tuning pretrained models, contributing to open-source projects, or mapping out new ideas over a cup of coffee with my sketchpad by my side."
      ]
    },
    philosophy: {
      title: "Design Philosophy",
      content: [
        "\"AI is not just about automation, it's about augmentation.\" – Satya Nadella",
        "I believe in building intelligent systems that enhance human experiences—whether through conversational interfaces, predictive analytics, or personalized recommendations. Every model, API, and interface I create is meant to empower the end user.",
        "My approach blends precision with creativity—training models with care, structuring APIs with clarity, and designing frontends that feel intuitive. I strive to craft solutions that are not only accurate and scalable, but also memorable and human-centered."
      ]
    },
    focus: {
      title: "What I'm Working On",
      content: [
        "Currently focused on building AI Agents and fine-tuning LLMs to solve real-world problems through autonomous, goal-driven systems.",
        "Exploring advanced GenAI frameworks like LangChain and OpenAI APIs to develop context-aware, task-oriented agents that can interact, reason, and take actions.",
        "Integrating multi-modal capabilities—vision, language, and logic—into AI systems that can understand and respond to complex user inputs across various domains."
      ]
    }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Content */}
          <div>
            <div className="overflow-hidden mb-6">
              <h2 className={`text-4xl md:text-5xl font-bold text-slate-900 dark:text-white transition-transform duration-1000 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
                About Me
              </h2>
            </div>

            {/* Sliding Tab Navigation */}
            <div className="flex gap-2 mb-8 overflow-hidden">
              {tabs.map((tab, index) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-500 hover:scale-105 ${
                      activeTab === tab.id
                        ? 'bg-purple-600 text-white shadow-lg scale-105'
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                    } ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                    style={{ transitionDelay: `${200 + index * 100}ms` }}
                  >
                    <Icon size={16} />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Sliding Content Window */}
            <div className="relative min-h-[400px] overflow-hidden">
              {Object.entries(tabContent).map(([key, content]) => (
                <div
                  key={key}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    activeTab === key 
                      ? 'translate-x-0 opacity-100' 
                      : activeTab > key 
                        ? '-translate-x-full opacity-0' 
                        : 'translate-x-full opacity-0'
                  }`}
                >
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                    {content.title}
                  </h3>
                  <div className="space-y-4 text-slate-600 dark:text-slate-300">
                    {content.content.map((paragraph, index) => (
                      <p key={index} className={`transition-all duration-500 ${
                        activeTab === key ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`} style={{ transitionDelay: `${index * 200}ms` }}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Stats and Visual Elements */}
          <div className="relative">
            {/* Animated Stats Grid */}
            <div className={`relative z-10 bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-2xl transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div 
                      key={stat.label} 
                      className={`text-center group transition-all duration-500 hover:scale-105 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                      }`}
                      style={{ transitionDelay: `${400 + index * 150}ms` }}
                    >
                      <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon size={32} className={`${stat.color} dark:text-purple-400`} />
                      </div>
                      <div className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                        {stat.value}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Sliding Skills Preview */}
              <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
                  Core Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Devops', 'NLP and GenAI', 'Computer Vision', 'Python', 'ML and DL'].map((tech, index) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium transition-all duration-500 hover:scale-105 ${
                        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                      }`}
                      style={{ transitionDelay: `${800 + index * 100}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 transform rotate-3 opacity-10">
              <div className={`w-full h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl transition-all duration-1000 ${isVisible ? 'scale-100 rotate-3' : 'scale-95 rotate-6'}`}></div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;