import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useCursor } from '../contexts/CursorContext';
import fashion from '../images/fashion.png'; // adjust path accordingly
import conversational from '../images/conversational.png'; // adjust path accordingly
import churn from '../images/churn.png'; // adjust path accordingly
import bankruptcy from '../images/bankruptcy.png'; // adjust path accordingly   

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  category: string;
}

const Projects: React.FC = () => {
  const { setCursorVariant } = useCursor();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "Fashion AI Recommendation System",
      description: "Modern React-based e-commerce solution with AI-driven recommendations and agents",
      longDescription: "A cutting-edge e-commerce platform built with React and TypeScript, featuring AI-driven product recommendations and a personalized shopping experience. Utilizes Langchain for intelligent agents and Redis for caching to enhance performance and user engagement.",
      technologies: ["CNN", "TypeScript", "React", "Firebase", "Langchain", "Flask"],
      image: "https://imgs.search.brave.com/uPIFg3Tdl7HgI1H_zOvfaHcL0C89befEJc6de-88QHs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zLmFs/aWNkbi5jb20vQGlt/Zy9pMS9PMUNOMDF3/RFliU1cxYm9ZM3F5/N3huNl8hITYwMDAw/MDAwMDM1MTItMi10/cHMtMTIwMC04MDAu/cG5n",
      category: "AI"
    },
    {
      id: 2,
      title: "Conversational Image Recognition Chatbot",
      description: "Conversational AI chatbot with image recognition",
      longDescription: "An innovative chatbot application that combines image recognition with natural language processing to provide users with a conversational interface for identifying and discussing images.",
      technologies: ["HTML and CSS", "CNN", "RAG", "Langchain", "Redis"],
      image: "https://imgs.search.brave.com/cA2o7lFAYtGzMXBGH5SkDqI3YDZc1_Z-ZRPRM6IcMjg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/dGlkaW8uY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy9jYXNwZXIt/bWFya2V0aW5nLWNo/YXRib3QtMS53ZWJw",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/prathamj937/Conversational-image-recognition-chatbot",
      category: "AI"
    },
    {
      id: 3,
      title: "Customer Churn prediction",
      description: "Predicts customer churn using Deep learning",
      longDescription: "An elegant weather dashboard featuring interactive charts, forecasts, and location-based weather data. Built with React and integrated with multiple weather APIs for accurate predictions.",
      technologies: ["React", "TypeScipt", "Neural Network", "Flask"],
      image: "https://imgs.search.brave.com/W7-CF8OMBChwoLlifT0Kf5KN7PGTTX-o_kten_CW2Nc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9jdXN0b21l/ci1jaHVybi1zaG93/bi11c2luZy10ZXh0/LTI2MG53LTI0NDM2/MjEwNTkuanBn",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/prathamj937/Customer-Churn-Prediction",
      category: "AI"
    },
    {
      id: 4,
      title: "Bankruptcy Prediction",
      description: "Machine learning model to predict bankruptcy of company",
      longDescription: "A sophisticated machine learning model designed to predict the likelihood of bankruptcy for companies based on financial data and historical trends. Utilizes advanced algorithms for accurate forecasting.",
      technologies: ["Machine Learning", "HTML and CSS", "Flask"],
      image: "https://imgs.search.brave.com/8t3pZ1C5yjhhmuhmA9txA4lovN79eq8hUqqJJFVOQBM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjMv/NjY5LzY5Mi9zbWFs/bC9iYW5rcnVwdGN5/LWNoYXB0ZXItMTMt/d3JpdGUtb24tYS1w/YXBlcndvcmstaXNv/bGF0ZWQtb24td29v/ZGVuLXRhYmxlLXBo/b3RvLkpQRw",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/prathamj937/Bankruptcy-Prediction",
      category: "AI"
    },
    {
      id: 6,
      title: "Static Site Server",
      description: "DevOps project to set up a static site server on AWS",
      longDescription: "set up a basic Linux server (Ubuntu) on AWS EC2 to serve a static website using Nginx, and how I deployed my site from my local machine",
      technologies: ["Nginx", "HTML and CSS", "AWS EC2", "Ubuntu"],
      image: "https://imgs.search.brave.com/Fi4iUbJNfZlOZvn97ZS9ohKTAMrNhPHiKOTdFR8xBlM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9raW5z/dGEuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE4LzAzL3do/YXQtaXMtbmdpbngt/MTAyNHg1MTIucG5n",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/prathamj937/Static-Site-Server",
      category: "Devops"
    },
    {
      id: 7,
      title: "Unemployment Analysis",
      description: "Data analysis project on unemployment trends",
      longDescription: "A comprehensive data analysis project that explores unemployment trends across different demographics and regions. Utilizes Python libraries for data visualization and statistical analysis.",
      technologies: ["Pandas", "Streamlit", "Seaborn", "Matplotlib"],
      image: "https://imgs.search.brave.com/zeKgk4XSe1m9r63p9f7S8cFHEyHzamC7DA7wIF7d2LI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/b25zLmdvdi51ay9l/bXBsb3ltZW50YW5k/bGFib3VybWFya2V0/L3Blb3BsZW5vdGlu/d29yay91bmVtcGxv/eW1lbnQvdGltZXNl/cmllcy9tZ3N4L2xt/cy9saW5lY2hhcnRp/bWFnZQ",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/prathamj937/Unemployment_Analysis",
      category: "Data Analysis"
    },
    {
      id: 8,
      title: "Intellisort",
      description: "Document Classification using OCR",
      longDescription: "Text is extracted from the document using Azure OCR and that text gets preprocessed and then it goes into the model for prediction",
      technologies: ["Python", "OCR", "Bert", "Supervised Learning"],
      image: "https://imgs.search.brave.com/hQAKx6ltW9NbsXiJPqKWViDDORmKDoD_Cazo1ISPTL0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzA2LzkxLzQ4/LzM2MF9GXzMwNjkx/NDg1MF9KbGN2cmV2/VjE5V1ZKZkFGRjlD/VzNXNVpzbUFMcGtF/ei5qcGc",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/prathamj937/IntelliSort",
      category: "AI"
    },
    {
      id: 9,
      title: "HR Data Analysis",
      description: "Data analysis project on HR metrics",
      longDescription: "An insightful data analysis project focusing on HR metrics, employee performance, and retention strategies. Utilizes advanced data visualization techniques to present findings.",
      technologies: ["Pandas", "SQL", "Matplotlib"],
      image: "https://imgs.search.brave.com/6N6mfygmU6oR1eM0dtfmHpZ6Zh_luzCR-Fs8wZasg0s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzQv/MDM5LzczNS9zbWFs/bC9zdGF0aXN0aWNz/LWFuZC1kYXRhLWFu/YWx5c2lzLWludmVz/dG1lbnQtYnVzaW5l/c3MtYW5hbHlzaXMt/dXNpbmctY2hhcnRz/LWFuZC1ncmFwaHMt/bWFuLW1ha2luZy1k/aWFncmFtcy1nZW5l/cmF0ZWQtYnktYXJ0/aWZpY2lhbC1pbnRl/bGxpZ2VuY2UtZnJl/ZS1waG90by5qcGc",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/prathamj937/HR-Data-Analysis",
      category: "Data Analysis"
    },
    {
      id: 10,
      title: "On-Chain Credit Scoring for Aave V2 Wallets",
      description: "Credit scoring project for Aave V2 wallets",
      longDescription: "Developed a machine learning-based credit scoring system for Aave V2 wallets by analyzing historical DeFi transaction data. The objective was to assign a credit score (0–1000) to each wallet to distinguish reliable users from those exhibiting risky, exploitative, or bot-like behavior, in the absence of traditional financial indicators.",
      technologies: ["Machine Learning", "Python"],
      image: "https://imgs.search.brave.com/qEwmg0zj469i6Riv1V4ptOI2oisBbUC-jS_nwZEMnCs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG5p/Lmljb25zY291dC5j/b20vaWxsdXN0cmF0/aW9uL3ByZW1pdW0v/dGh1bWIvY3JlZGl0/LXNjb3JlLWlsbHVz/dHJhdGlvbi1kb3du/bG9hZC1pbi1zdmct/cG5nLWdpZi1maWxl/LWZvcm1hdHMtLWZp/bmFuY2lhbC1zY29y/aW5nLWhpc3Rvcnkt/ZGFzaGJvYXJkLW9u/bGluZS1iYW5raW5n/LWxvb3B5LTAxLXBh/Y2stcGVvcGxlLWls/bHVzdHJhdGlvbnMt/NjA1OTI0Ny5wbmc",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/prathamj937/credit_score_model",
      category: "AI"  
    },
    {
      id: 11,
      title: "MdDoc",
      description: "Converts Markdown files to docx without any formatting issues",
      longDescription: "All the LLMs produce outputs in md format so to when we try to convert that md format into docx there are lot of formatting issues like table disruptions and text mmisalignment to resolve that issue I have  build this fastapi",
      technologies: ["FastApi", "Python","lua"],
      image: "https://imgs.search.brave.com/6UAlCWN87j6B74moIIe7EPd4cvLmuHEO6ts9IXOsnS8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmVydG9wYWwuY29t/L3N0YXRpYy91aS9p/bWFnZS9jb252ZXJ0/ZXIvY29udmVydC1t/ZC10by1kb2N4Lndl/YnA",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/prathamj937/Markdown-Files-to-Docx-Converter",
      category: "Web"  
    },
    {
      id: 12,
      title: "Wine Prediction",
      description: "Build a NN to predict the type of wine",
      longDescription: "Basically this is a neural network model that takes in the chemical properties of the wine and predicts the type of wine it is ",
      technologies: ["Deep Learning", "Python", "React"],
      image: "https://imgs.search.brave.com/dT4uQll8gE4cyrouxHRvy182gqMezupb-unVNkHwfHw/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8w/OS8wOC8yMC8xMS93/aW5lLTE2NTUzMjVf/NjQwLmpwZw",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/prathamj937/Wine-Predictor",
      category: "AI"  
    },
    {
      id: 13,
      title: "Email-Rakshak",
      description: "An AI-Powered Solution to Detect Spam Emails",
      longDescription: "This project is an Email Spam Classifier designed with a user-friendly web interface and a robust machine learning backend. It leverages a 99% accurate classification model to detect spam emails efficiently and seamlessly.",
      technologies: ["Machine Learning", "Python", "nltk", "HTML and CSS"],
      image: "https://imgs.search.brave.com/ztgfQ0OeDU8U0s6GX38HSSJvC7Zo0C-1Bef5KC9mLUs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDY2/MzIwMTI1L3Bob3Rv/L2NsaWNraW5nLW9u/LWVtYWlsLXNwYW0t/Zm9sZGVyLXdpdGgt/MzcyLWl0ZW1zLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1p/bENSYmRPNFQtaks5/MTVxMFQzam5LOUEy/VnpMTzVaakh6TnNp/THVnNmJ3PQ",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/prathamj937/credit_score_model",
      category: "AI"  
    },
    {
      id: 14,
      title: "Car Price Predictor",
      description: "An AI-Powered Solution to Detect Spam Emails",
      longDescription: "This project is an Email Spam Classifier designed with a user-friendly web interface and a robust machine learning backend. It leverages a 99% accurate classification model to detect spam emails efficiently and seamlessly.",
      technologies: ["Machine Learning", "Python", "nltk", "HTML and CSS"],
      image: "https://imgs.search.brave.com/CrHVqbOKA5d9CcPwSPxIQu_U-Jso1Vq18BtfNOtUDTg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuYmxhY2tjaXJj/bGVzLmNvbS9uZXdz/L2FydGljbGUtaGVy/b2VzLzgwLTIwMjQt/Y2FyLXByaWNlcy1o/ZWFkZXItc20uanBn",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/prathamj937/Car_Prediction",
      category: "AI"  
    },
    {
      id: 15,
      title: "IPL-Winning-Team-Predictor",
      description: "An AI-Powered Solution to predict winning team in IPL",
      longDescription: "This project involves building a predictive model for forecasting the winning team in IPL matches using a dataset sourced from Kaggle. The model leverages machine learning techniques to analyze historical data, incorporating crucial features such as player statistics, team composition, past performance, and match-specific conditions.",
      technologies: ["Machine Learning", "Python", "HTML and CSS"],
      image: "https://imgs.search.brave.com/JKnhcUsiguMmBJFFRtV_TxeguBw_IDL3tvzoimyoh88/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/dGltZXNvZnNwb3J0/cy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjQvMDEvSVBM/LUxvZ28tcG5nLndl/YnA",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/prathamj937/IPL-team-winning-prediction",
      category: "AI"  
    },
    {
      id: 16,
      title: "sentiment_analysis",
      description: "An AI-Powered Solution to provide sentiment analysis of finance related companies and predicts their bankruptcy risk",
      longDescription: "this project aims to predict whether the company will get bankrupted based on their sentiment score and provides latest articles related to the company for validation",
      technologies: ["NLP", "Python", "Streamlit","Machine Learning"],
      image: "https://imgs.search.brave.com/tJHVjNw5ElHpfFS_ks7fyCl9Vo27tcdCLXY3r5dcg4E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjIv/NjAzLzk5MC9zbWFs/bC91c2Vycy1naXZl/LXJhdGluZ3MtdG8t/c2VydmljZS1leHBl/cmllbmNlLWN1c3Rv/bWVyLXNhdGlzZmFj/dGlvbi1jb25jZXB0/LXBvc2l0aXZlLWVt/b3Rpb24taGFwcHkt/c21pbGUtZmFjZS1m/aXZlLXN0YXJzLWFu/ZC1jcm93bi1mZWVk/YmFjay1zZXJ2aWNl/LXN1cnZleS1zdGFu/ZGFyZC1xdWFsaXR5/LWNlcnRpZmljYXRp/b24tcGhvdG8uanBn",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/prathamj937/sentiment_analysis_bert",
      category: "AI"  
    },
    

  ];

  const categories = ['all', 'AI', 'Web', 'Devops', 'Data Analysis'];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-800 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="overflow-hidden">
            <h2 className={`text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 transition-transform duration-1000 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
              Featured Projects
            </h2>
          </div>
          <div className="overflow-hidden">
            <p className={`text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto transition-transform duration-1000 delay-200 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
              A collection of my recent work, showcasing different skills and technologies
            </p>
          </div>
        </div>

        {/* Sliding Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 overflow-hidden">
          {categories.map((category, index) => (
            <div key={category} className="overflow-hidden">
              <button
                onClick={() => setSelectedCategory(category)}
                onMouseEnter={() => setCursorVariant('pointer')}
                onMouseLeave={() => setCursorVariant('default')}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-500 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white shadow-lg scale-105'
                    : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            </div>
          ))}
        </div>

        {/* Projects Grid with Staggered Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${600 + index * 150}ms` }}
              onMouseEnter={() => {
                setCursorVariant('pointer');
                setHoveredProject(project.id);
              }}
              onMouseLeave={() => {
                setCursorVariant('default');
                setHoveredProject(null);
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Sliding Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 ${
                  hoveredProject === project.id ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-2 mb-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200 transform hover:scale-110"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={18} className="text-white" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200 transform hover:scale-110"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={18} className="text-white" />
                      </a>
                    </div>
                    <p className="text-white text-sm opacity-90">
                      Click to view details
                    </p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-purple-600/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Sliding Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4 overflow-hidden">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium transition-all duration-300 ${
                        hoveredProject === project.id ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-70'
                      }`}
                      style={{ transitionDelay: `${techIndex * 50}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-all duration-200 group-hover:translate-x-2"
                >
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Modal with Sliding Animation */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
            <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-in slide-in-from-bottom duration-500">
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200 group"
                >
                  <X size={24} className="text-white group-hover:rotate-90 transition-transform duration-200" />
                </button>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h3>
                  <span className="px-3 py-1 bg-purple-600/90 text-white text-sm font-medium rounded-full">
                    {selectedProject.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 overflow-y-auto max-h-96">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                      Project Overview
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                    
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium animate-in slide-in-from-left duration-300"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105 group"
                    >
                      <ExternalLink size={20} className="group-hover:rotate-12 transition-transform duration-200" />
                      View Live Demo
                    </a>
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105 group"
                    >
                      <Github size={20} className="group-hover:rotate-12 transition-transform duration-200" />
                      View Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
