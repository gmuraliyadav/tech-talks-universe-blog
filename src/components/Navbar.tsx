
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="w-full py-4 bg-white/80 backdrop-blur-sm fixed top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-tech-blue via-tech-indigo to-tech-purple text-transparent bg-clip-text">
          TechTalksVirtually
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-700 hover:text-tech-purple transition-colors">About Me</a>
          <a href="#services" className="text-gray-700 hover:text-tech-purple transition-colors">Services</a>
          <a href="#projects" className="text-gray-700 hover:text-tech-purple transition-colors">Projects</a>
          <a href="#achievements" className="text-gray-700 hover:text-tech-purple transition-colors">Achievements</a>
          <a href="#collaborate" className="text-gray-700 hover:text-tech-purple transition-colors">Collaborate</a>
          <a href="#contact" className="text-gray-700 hover:text-tech-purple transition-colors">Contact</a>
        </div>
        
        <div className="flex space-x-4">
          <a href="https://twitter.com/gmuraliyadav6" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter className="h-5 w-5 text-gray-700 hover:text-tech-blue transition-colors" />
          </a>
          <a href="https://instagram.com/_muralig" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="h-5 w-5 text-gray-700 hover:text-tech-purple transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/gmuraliyadav" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 text-gray-700 hover:text-tech-indigo transition-colors" />
          </a>
          <a href="https://www.youtube.com/@TechTalksVirtually" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <Youtube className="h-5 w-5 text-gray-700 hover:text-[#FF0000] transition-colors" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
