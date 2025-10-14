// src/components/Navbar.jsx
import React from 'react';
import { motion } from 'motion/react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 py-4 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-700"
    >
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12">
        <a href="#hero" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          Consep33t
        </a>
        
        <div className="flex items-center space-x-8">
          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <motion.a 
                  href={link.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {link.name}
                </motion.a>
              </li>
            ))}
          </ul>
          
          <ThemeToggle />
        </div>
        
      </div>
    </motion.nav>
  );
};

export default Navbar;