import React, { useState, useEffect } from 'react';
import { Code, Palette, Smartphone, Database, Globe, Zap, TrendingUp, Award } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skills progressively
          setTimeout(() => {
            skills.forEach((skill, index) => {
              setTimeout(() => {
                setAnimatedSkills(prev => new Set([...prev, skill.name]));
              }, index * 200);
            });
          }, 500);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skills: Skill[] = [
  { name: 'Python', level: 90, category: 'programming' },
  { name: 'R', level: 70, category: 'programming' },
  { name: 'Shell Scripting (basic)', level: 60, category: 'programming' },
  { name: 'React', level: 75, category: 'frontend' },
  { name: 'MySQL', level: 85, category: 'database' },
  { name: 'Scikit-Learn', level: 85, category: 'ml' },
  { name: 'PyTorch', level: 75, category: 'ml' },
  { name: 'TensorFlow', level: 80, category: 'ml' },
  { name: 'OpenCV', level: 70, category: 'ml' },
  { name: 'Transfer Learning', level: 80, category: 'ml' },
  { name: 'NLTK', level: 75, category: 'nlp' },
  { name: 'Transformers', level: 80, category: 'nlp' },
  { name: 'LangChain', level: 70, category: 'llm' },
  { name: 'RAG', level: 85, category: 'llm' },
  { name: 'Git & GitHub', level: 85, category: 'tools' },
  { name: 'Pandas', level: 85, category: 'analysis' },
  { name: 'NumPy', level: 85, category: 'analysis' },
  { name: 'Matplotlib', level: 80, category: 'analysis' },
  { name: 'Docker', level: 80, category: 'devops' },
  { name: 'AWS', level: 70, category: 'devops' },
  { name: 'Triton Inference Server', level: 70, category: 'devops' },
  { name: 'Linux', level: 85, category: 'os' },
  { name: 'Windows', level: 90, category: 'os' },
  { name: 'Flask', level: 80, category: 'backend' },
];

  const categories = [
  { name: 'programming', label: 'Programming', icon: Code, color: 'text-blue-600', bgColor: 'bg-blue-100 dark:bg-blue-900/30' },
  { name: 'frontend', label: 'Frontend', icon: Palette, color: 'text-pink-600', bgColor: 'bg-pink-100 dark:bg-pink-900/30' },
  { name: 'database', label: 'Databases', icon: Database, color: 'text-green-600', bgColor: 'bg-green-100 dark:bg-green-900/30' },
  { name: 'ml', label: 'Machine Learning', icon: TrendingUp, color: 'text-purple-600', bgColor: 'bg-purple-100 dark:bg-purple-900/30' },
  { name: 'nlp', label: 'NLP', icon: Zap, color: 'text-yellow-600', bgColor: 'bg-yellow-100 dark:bg-yellow-900/30' },
  { name: 'llm', label: 'LLMs & RAG', icon: Globe, color: 'text-indigo-600', bgColor: 'bg-indigo-100 dark:bg-indigo-900/30' },
  { name: 'tools', label: 'Collaboration Tools', icon: Smartphone, color: 'text-red-600', bgColor: 'bg-red-100 dark:bg-red-900/30' },
  { name: 'analysis', label: 'Data Analysis', icon: Award, color: 'text-orange-600', bgColor: 'bg-orange-100 dark:bg-orange-900/30' },
  { name: 'devops', label: 'DevOps', icon: Database, color: 'text-teal-600', bgColor: 'bg-teal-100 dark:bg-teal-900/30' },
  { name: 'os', label: 'Operating Systems', icon: Code, color: 'text-gray-600', bgColor: 'bg-gray-100 dark:bg-gray-900/30' },
  { name: 'backend', label: 'Backend', icon: Code, color: 'text-blue-600', bgColor: 'bg-blue-100 dark:bg-blue-900/30' }
];

  const filteredSkills = skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="overflow-hidden">
            <h2 className={`text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 transition-transform duration-1000 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
              Skills & Expertise
            </h2>
          </div>
          <div className="overflow-hidden">
            <p className={`text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto transition-transform duration-1000 delay-200 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
              A comprehensive overview of my technical skills and areas of expertise
            </p>
          </div>
        </div>

        {/* Sliding Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 overflow-hidden">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={category.name} className="overflow-hidden">
                <button
                  onClick={() => setActiveCategory(category.name)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-medium transition-all duration-500 hover:scale-105 ${
                    activeCategory === category.name
                      ? `${category.bgColor} ${category.color} shadow-lg scale-105`
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                  } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <Icon size={20} />
                  <span>{category.label}</span>
                </button>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills Progress Section */}
          <div className="relative">
            <div className="overflow-hidden mb-8">
              <h3 className={`text-2xl font-bold text-slate-900 dark:text-white transition-transform duration-700 ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}>
                {categories.find(cat => cat.name === activeCategory)?.label} Skills
              </h3>
            </div>
            
            <div className="space-y-6">
              {filteredSkills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className={`font-medium text-slate-900 dark:text-white transition-all duration-500 ${
                      isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                    }`} style={{ transitionDelay: `${600 + index * 100}ms` }}>
                      {skill.name}
                    </span>
                    <span className={`text-sm text-slate-600 dark:text-slate-400 transition-all duration-500 ${
                      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                    }`} style={{ transitionDelay: `${600 + index * 100}ms` }}>
                      {skill.level}%
                    </span>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden ${
                          categories.find(cat => cat.name === activeCategory)?.bgColor.replace('100', '500').replace('900/30', '500')
                        }`}
                        style={{
                          width: animatedSkills.has(skill.name) ? `${skill.level}%` : '0%',
                          transitionDelay: `${800 + index * 150}ms`
                        }}
                      >
                        {/* Sliding shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats and Achievements Section */}
          <div className="space-y-6">
            <div className="overflow-hidden">
              <h3 className={`text-2xl font-bold text-slate-900 dark:text-white mb-8 transition-transform duration-700 delay-300 ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}>
                Achievements & Stats
              </h3>
            </div>
            
            {/* Sliding Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: TrendingUp, label: 'Projects', value: '30+', delay: 400 },
                { icon: Award, label: 'Certifications', value: '10', delay: 500 },
                { icon: Code, label: 'Languages', value: '3+', delay: 600 },
                { icon: Globe, label: 'Frameworks', value: '10+', delay: 700 }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className={`p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg text-center transition-all duration-700 hover:scale-105 hover:shadow-xl ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${stat.delay}ms` }}
                  >
                    <Icon size={32} className="mx-auto mb-3 text-purple-600 dark:text-purple-400" />
                    <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Key Strengths with Sliding Animation */}
            <div className="space-y-4">
              {[
                {
                  title: "Problem Solving",
                  description: "Analytical thinking and creative problem-solving approach to complex challenges",
                  delay: 800
                },
                {
                  title: "Team Collaboration",
                  description: "Effective communication and collaboration in cross-functional teams",
                  delay: 900
                },
                {
                  title: "Continuous Learning",
                  description: "Staying updated with the latest technologies and industry best practices",
                  delay: 1000
                }
              ].map((strength, index) => (
                <div
                  key={strength.title}
                  className={`p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg transition-all duration-700 hover:shadow-xl group ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${strength.delay}ms` }}
                >
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {strength.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    {strength.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;