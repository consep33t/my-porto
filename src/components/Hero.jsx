import React from 'react';
import { motion } from 'motion/react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

const Hero = () => {
  return (
    <motion.div 
      className="min-h-screen flex flex-col justify-center items-center text-center -mt-16" // -mt-16 untuk offset navbar
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.img 
        src="/src/assets/profile.jpeg"
        alt="Foto Profil"
        className="w-40 h-40 rounded-full mb-8 object-cover"
        variants={itemVariants}
      />
      
      <motion.h1 
        className="text-5xl md:text-7xl font-bold mb-4"
        variants={itemVariants}
      >
        Halo, saya <span className="text-blue-600 dark:text-blue-400">Ageng Prayoga</span>
      </motion.h1>
      
      <motion.p 
        className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8"
        variants={itemVariants}
      >
        Seorang Lulusan Teknik Informatika & Full-Stack Developer
      </motion.p>
      
      <motion.a 
        href="#projects"
        className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Lihat Karya Saya
      </motion.a>
    </motion.div>
  );
};

export default Hero;