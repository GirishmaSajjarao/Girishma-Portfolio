import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Girishma Sajjarao</h3>
            <p className="text-gray-400 mb-4">
              Building beautiful web experiences with modern technologies.
            </p>
            <p className="text-gray-400">
              Based in Andhra Pradesh, India.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Tech Stack</h3>
            <ul className="space-y-2 text-gray-400">
              <li>React.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Lucide Icons</li>
              <li>Vite</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500">
          <p className="flex items-center justify-center">
            <span>© {currentYear} Girishma Sajjarao. Made with</span>
            <Heart className="h-4 w-4 mx-1 text-red-500" />
            <span>by Girishma Sajjarao</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;