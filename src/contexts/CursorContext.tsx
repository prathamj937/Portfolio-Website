import React, { createContext, useContext, useState, useEffect } from 'react';

interface CursorContextType {
  cursorVariant: 'default' | 'text' | 'pointer' | 'hidden';
  setCursorVariant: (variant: 'default' | 'text' | 'pointer' | 'hidden') => void;
  mousePosition: { x: number; y: number };
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};

export const CursorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cursorVariant, setCursorVariant] = useState<'default' | 'text' | 'pointer' | 'hidden'>('default');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <CursorContext.Provider value={{ cursorVariant, setCursorVariant, mousePosition }}>
      {children}
    </CursorContext.Provider>
  );
};