import React, { useEffect, useState } from 'react';
import { useCursor } from '../contexts/CursorContext';

const CustomCursor: React.FC = () => {
  const { cursorVariant, mousePosition } = useCursor();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const sizeMap = {
    default: 32,
    text: 64,
    pointer: 48,
    hidden: 0,
  };

  const size = sizeMap[cursorVariant] || 32;
  const x = (mousePosition?.x || 0) - size / 2;
  const y = (mousePosition?.y || 0) - size / 2;

  return (
    <div
      className="fixed top-0 left-0 z-50 pointer-events-none"
      style={{
        width: size,
        height: size,
        transform: `translate(${x}px, ${y}px)`,
        opacity: isVisible && size > 0 ? 1 : 0,
        transition: 'transform 0.1s ease-out, opacity 0.2s ease',
      }}
    >
      <div className="w-full h-full bg-purple-600 rounded-full mix-blend-difference" />
    </div>
  );
};

export default CustomCursor;
