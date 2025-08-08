import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useCursor } from '../contexts/CursorContext';

const ScrollToTop: React.FC = () => {
  const { setCursorVariant } = useCursor();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setCursorVariant('pointer')}
      onMouseLeave={() => setCursorVariant('default')}
      className={`fixed bottom-8 right-8 w-12 h-12 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center z-40 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;