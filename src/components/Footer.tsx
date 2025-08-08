import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-slate-400">
            Made with <Heart size={16} className="text-red-500" /> and <Code size={16} className="text-purple-500" /> 
            by Pratham Jain
          </p>
          <p className="text-sm text-slate-500 mt-2">
            © 2024 Pratham Jain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;