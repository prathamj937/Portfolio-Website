import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { CursorProvider } from './contexts/CursorContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <ThemeProvider>
      <CursorProvider>
        <div className="relative min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
          <CustomCursor />
          <Header />
          <main className="relative">
            <Hero />
            <Projects />
            <Skills />
            <About />
            <Journey />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </CursorProvider>
    </ThemeProvider>
  );
}

export default App;