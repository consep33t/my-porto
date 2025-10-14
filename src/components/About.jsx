import React from 'react';
import { motion } from 'motion/react';

const About = () => {
  return (
    <div className="container mx-auto px-6 md:px-12">
      <h2 className="text-center text-4xl font-bold mb-12">Tentang Saya</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <img 
            src="/src/assets/profile.jpeg"
            alt="Foto Profil" 
            className="rounded-lg shadow-2xl w-full max-w-md mx-auto aspect-square object-cover"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Halo! Saya Ageng Prayoga, seorang lulusan Teknik Informatika dengan 
            semangat besar dalam pengembangan web modern. Saya memiliki 
            spesialisasi dalam membangun aplikasi web yang cepat, responsif, dan 
            intuitif.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Saya terampil dalam ekosistem JavaScript, khususnya React, Node.js, dan 
            berbagai teknologi terkait. Saya selalu antusias untuk belajar 
            teknologi baru dan mencari cara untuk mengoptimalkan performa 
            dan pengalaman pengguna.
          </p>
          <a 
            href="/src/assets/CV_Ageng_Prayoga_ATS.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
          >
            Download CV Saya
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;