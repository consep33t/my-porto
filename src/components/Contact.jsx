// src/components/Contact.jsx
import React from 'react';
import { motion } from 'motion/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <motion.div 
      className="container mx-auto px-6 md:px-12 text-center max-w-3xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-4xl font-bold mb-4">Tertarik Bekerja Sama?</h2>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
        Saya selalu terbuka untuk diskusi, peluang baru, atau sekadar 
        berbagi ide. Jangan ragu untuk menghubungi saya!
      </p>
      
      <motion.a
        href="mailto:agengp360@gmail.com?subject=Halo%20Ageng&body=Halo%20Ageng,%0A%0ASaya%20ingin%20menghubungi%20Anda%20mengenai..."
        className="inline-block px-10 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        >Kirim Email
      </motion.a>
      
      <div className="flex justify-center space-x-8 mt-12">
        <motion.a
          href="https://github.com/consep33t"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
          whileHover={{ scale: 1.2, y: -5 }}
          >
          <FaGithub size={40} />
        </motion.a>
        <motion.a
          href="www.linkedin.com/in/ageng-prayoga-789b652a9"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
          whileHover={{ scale: 1.2, y: -5 }}
        >
          <FaLinkedin size={40} />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Contact;