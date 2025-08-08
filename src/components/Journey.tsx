import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Award, X, Play } from 'lucide-react';
import { useCursor } from '../contexts/CursorContext';
import hackathonImg from '../images/hackathon.jpg'; // adjust path accordingly
import ea from '../images/ea.png'; // adjust path accordingly
import flask from '../images/flask.png'; // adjust path accordingly
import python from '../images/python.png'; // adjust path accordingly
import cn from '../images/cn.png'; // adjust path accordingly
import tcs from '../images/tcs.png'; // adjust path accordingly

interface JourneyItem {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  category: 'education' | 'work'  | 'achievement' | 'Certification';
  tags: string[];
}

const Journey: React.FC = () => {
  const { setCursorVariant } = useCursor();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<JourneyItem | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('journey');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const journeyItems: JourneyItem[] = [
    {
      id: 1,
      title: "Started Computer Science at DCE",
      date: "September 2022",
      location: "Gurgaon, India",
      description: "Began my journey in computer science, focusing on software engineering and human-computer interaction. This was where my passion for creating user-centered digital experiences truly began.",
      image: "https://imgs.search.brave.com/n7auxb9b3fMlZLz6nEMe-kBD6kM0WCOLJcBYg_ZC2vY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29sbGVnZWJhdGNo/LmNvbS9zdGF0aWMv/Y2xnLWdhbGxlcnkv/ZHJvbmFjaGFyeWEt/Y29sbGVnZS1vZi1l/bmdpbmVlcmluZy1n/dXJnYW9uLTM1Mjc1/MS5qcGc",
      category: "education",
      tags: ["Computer Science", "Engineering", "Beginning"]
    },
    {
      id: 2,
      title: "First Internship at EY",
      date: "Summer 2025",
      location: "Gurgaon, India",
      description: "My first real-world experience as a GenAI intern. Worked on AI Agents and built md to docx converter for the company and learned the importance of clean, maintainable code in a fast-paced environment also developed a document classification system that classifies documents based on their content using AI.",
      image: "https://imgs.search.brave.com/VYwHPLqLpcrDJpDAA1GR72U9eJdCBP9e8v6EpIKRvX0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9vZmZp/Y2UtZXJuc3QteW91/bmctZXktYWNjb3Vu/dGFudHMtYWxvbmct/bWFhc2JvdWxldmFy/ZC1yb3R0ZXJkYW0t/bmV0aGVybGFuZHMt/c2V2ZXJhbC1mbGFn/cy1vZmZpY2UtMTI4/MjUxNzc5LmpwZw",
      category: "work",
      tags: ["Internship", "Big 4", "AI Agents", "GenAI"]
    },
    {
      id: 3,
      title: "Built My First Major Project",
      date: "Summer 2024",
      location: "Gurgaon, India",
      description: "Fashion AI is an intelligent system that provides personalized clothing recommendations and style suggestions based on user preferences, body features, and current fashion trends.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "project",
      tags: ["Full Stack", "AI", "Chatbots"]
    },
    {
      id: 4,
      title: "Completed my Senior schooling from AIS-43",
      date: "Spring 2016",
      location: "Gurgaon, India",
      description: "Studied at Amity International School Sector-43, where I developed a strong foundation in mathematics and science. This period ignited my interest in technology and problem-solving, leading me to pursue a career in computer science.",
      image: "https://imgs.search.brave.com/mE2kKp5TaLinsjcFonKxF9IhlJhHbwaBIc659yCWMsQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5pYXBwbHku/Y29tL3VwbG9hZHMv/Y29sbGVnZS9pbWFn/ZS81MDAvMjU5MC9B/bWl0eV9JbnRlcm5h/dGlvbmFsX1NjaG9v/bF8xMF9BbWl0eV9i/dWlsZGluZ19zZWN0/b3JfNDNfMy5wbmc",
      category: "education",
      tags: ["Study", "Science", "Maths"]
    },
  {
    id: 5,
    title: "Won Hackathon",
    date: "May 2025",
    location: "Gurgaon, India",
    description: "Led a team to victory in a 24-hour hackathon, developing a Fashion AI application that helps users find the perfect outfit based on their preferences and current trends. This experience taught me the value of teamwork and rapid prototyping.",
    image: hackathonImg, // ✅ Correct
    category: "achievement",
    tags: ["Hackathon", "AR", "Team Leadership"]
  },

    // {
    //   id: 6,
    //   title: "Software Engineer at Google",
    //   date: "June 2021",
    //   location: "Mountain View, CA",
    //   description: "Joined Google as a software engineer working on Chrome's user interface. Contributed to features used by millions of users worldwide and learned about large-scale system design.",
    //   image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   category: "work",
    //   tags: ["Google", "Chrome", "Large Scale"]
    // },
    {
      id: 7,
      title: "Completed Udemy's Python Course",
      date: "June 2023",
      location: "Gurgaon, India",
      description: "Completed a comprehensive course on Python programming, covering everything from basic syntax to advanced topics like data analysis and machine learning. This course solidified my understanding of Python as a versatile programming language.",
      image: python,
      category: "certification",
      tags: ["Python", "Programming", "Udemy Course"]
    },
    {
      id: 8,
      title: "Completed Udemy Flask Course",
      date: "Summer 2023",
      location: "Gurgaon, India",
      description: "Completed a comprehensive course on Flask, enhancing my backend development skills. This course covered everything from basic routing to advanced database integration.",
      image: flask,
      category: "certification",
      tags: ["Flask", "Backend Development", "Web Framework"]
    },
    {
      id: 9,
      title: "EA Virtual Internship at Forage",
      date: "May 2025",
      location: "Gurgaon, India",
      description: "Completed a virtual internship with EA, focusing on Data Structures implementation in Real World Applications.",
      image: ea,
      category: "certification",
      tags: ["Virtual Internship", "Forage"]
    },
    {
      id: 10,
      title: "AIR 16 in Aptitude Test organized by Coding Ninjas",
      date: " 2023",
      location: "Gurgaon, India",
      description: "Achieved All India Rank 16 in the Aptitude Test organized by Coding Ninjas, showcasing my problem-solving skills and understanding of algorithms and data structures.",
      image: cn,
      category: "achievement",
      tags: ["Coding Ninjas", "Aptitude Test", "Problem Solving"]
    },
    {
      id: 11,
      title: "TCS Virtual Internship at Forage",
      date: "May 2025",
      location: "Gurgaon, India",
      description: "Completed a virtual internship with TCS, focusing on Data Analysis with proper dashboards and visualizations using power BI.",
      image: tcs,
      category: "certification",
      tags: ["Virtual Internship", "Forage"]
    },
    
    

  ];

  const categories = [
    { id: 'all', label: 'All', icon: Play },
    { id: 'education', label: 'Education', icon: Award },
    { id: 'work', label: 'Work', icon: MapPin },
    { id: 'achievement', label: 'Achievements', icon: Award },
    { id: 'certification', label: 'Certifications', icon: MapPin },
  ];

  const filteredItems = activeCategory === 'all' 
    ? journeyItems 
    : journeyItems.filter(item => item.category === activeCategory);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(filteredItems.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(filteredItems.length / 3)) % Math.ceil(filteredItems.length / 3));
  };

  const getVisibleItems = () => {
    const itemsPerSlide = 3;
    const startIndex = currentSlide * itemsPerSlide;
    return filteredItems.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <section id="journey" className="py-20 bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="overflow-hidden">
            <h2 className={`text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 transition-transform duration-1000 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
              My Journey
            </h2>
          </div>
          <div className="overflow-hidden">
            <p className={`text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto transition-transform duration-1000 delay-200 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
              A visual story of my professional growth, achievements, and adventures
            </p>
          </div>
        </div>

        {/* Sliding Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 overflow-hidden">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={category.id} className="overflow-hidden">
                <button
                  onClick={() => {
                    setActiveCategory(category.id);
                    setCurrentSlide(0);
                  }}
                  onMouseEnter={() => setCursorVariant('pointer')}
                  onMouseLeave={() => setCursorVariant('default')}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-500 hover:scale-105 ${
                    activeCategory === category.id
                      ? 'bg-purple-600 text-white shadow-lg scale-105'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-md'
                  } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <Icon size={18} />
                  <span>{category.label}</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Sliding Window Gallery */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            onMouseEnter={() => setCursorVariant('pointer')}
            onMouseLeave={() => setCursorVariant('default')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300 group"
          >
            <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform duration-200" />
          </button>
          
          <button
            onClick={nextSlide}
            onMouseEnter={() => setCursorVariant('pointer')}
            onMouseLeave={() => setCursorVariant('default')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300 group"
          >
            <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>

          {/* Sliding Cards Container */}
          <div className="overflow-hidden mx-16">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(filteredItems.length / 3) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.slice(slideIndex * 3, slideIndex * 3 + 3).map((item, index) => (
                      <div
                        key={item.id}
                        className={`group cursor-pointer transition-all duration-700 hover:scale-105 ${
                          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                        }`}
                        style={{ transitionDelay: `${600 + index * 200}ms` }}
                        onClick={() => setSelectedItem(item)}
                        onMouseEnter={() => setCursorVariant('pointer')}
                        onMouseLeave={() => setCursorVariant('default')}
                      >
                        <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                          <div className="relative overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            
                            {/* Sliding Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                              <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex items-center gap-2 text-white text-sm mb-2">
                                  <Calendar size={14} />
                                  <span>{item.date}</span>
                                  <MapPin size={14} className="ml-2" />
                                  <span>{item.location}</span>
                                </div>
                                <p className="text-white text-sm opacity-90">
                                  Click to read more...
                                </p>
                              </div>
                            </div>

                            {/* Category Badge */}
                            <div className="absolute top-4 left-4">
                              <span className={`px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm ${
                                item.category === 'education' ? 'bg-blue-500/90 text-white' :
                                item.category === 'work' ? 'bg-green-500/90 text-white' :
                                item.category === 'project' ? 'bg-purple-500/90 text-white' :
                                item.category === 'achievement' ? 'bg-yellow-500/90 text-white' :
                                'bg-pink-500/90 text-white'
                              }`}>
                                {item.category}
                              </span>
                            </div>
                          </div>

                          <div className="p-6">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                              {item.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-2">
                              {item.description}
                            </p>
                            
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                              {item.tags.slice(0, 2).map((tag, tagIndex) => (
                                <span
                                  key={tag}
                                  className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-md text-xs font-medium"
                                >
                                  {tag}
                                </span>
                              ))}
                              {item.tags.length > 2 && (
                                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-md text-xs">
                                  +{item.tags.length - 2}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: Math.ceil(filteredItems.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-purple-600 scale-125' 
                    : 'bg-slate-300 dark:bg-slate-600 hover:bg-purple-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
            <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-in slide-in-from-bottom duration-500">
              <div className="relative">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200 group"
                >
                  <X size={24} className="text-white group-hover:rotate-90 transition-transform duration-200" />
                </button>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {selectedItem.title}
                  </h3>
                  <div className="flex items-center gap-4 text-white/90">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{selectedItem.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{selectedItem.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-lg">
                  {selectedItem.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {selectedItem.tags.map((tag, index) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium animate-in slide-in-from-left duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Journey;