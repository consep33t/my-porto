import React from 'react';
import { motion } from 'motion/react';
import { title } from 'motion/react-client';

const projects = [
  {
    title: 'KuyAnime - Platform Anime List',
    description: 'Platform web untuk menelusuri, mencari, dan menyimpan daftar anime favorit Anda dengan fitur user-friendly.',
    tech: ['Next.js', 'Tailwind CSS'],
    imageUrl: '/public/kuyanime.png',
    liveUrl: 'https://kuyanime-rho.vercel.app',
    repoUrl: 'https://github.com/consep33t/kuyanime',
  },
  {
    title: 'Lapor Pak! - Platform Pelaporan Masyarakat',
    description: 'Platform web untuk memudahkan masyarakat dalam melaporkan masalah lingkungan dan sosial secara langsung kepada pihak berwenang.',
    tech: ['React', 'Next.js', 'Firebase Database', 'Tailwind CSS', 'Vercel', 'leaflet'],
    imageUrl: '/public/Lapor.png',
    liveUrl: 'https://lapor-pak-five.vercel.app/',
    repoUrl: 'https://github.com/consep33t/laporPak',
  },
  {
    title: 'Pejantara - Website Pejantara',
    description: 'Website kolaborasi team Agritect dengan pejantara, sebuah organisasi yang berfokus pada pelestarian lingkungan dan pemberdayaan masyarakat dalam pengelolahan sampah di batam.',
    tech: ['React + vite', 'Tailwind CSS', 'Vercel', 'leaflet', 'Integrasi Ai'],
    imageUrl: '/public/pejantara.png',
    liveUrl: '#',
    repoUrl: 'https://github.com/Agritech33/pejantara_website',
  },
  {
    title: 'Peternakan-Ayam - Sistem Peternakan Ayam Berbasis IOT',
    description: 'Sistem monitoring peternakan ayam berbasis IoT yang memungkinkan pemantauan kondisi lingkungan secara real-time untuk meningkatkan kesehatan dan produktivitas ayam, perangkat ini menggunakan sensor akulator memantau ketersedian pakan, minum, dan penimbangan berat badan ayam.',
    tech: ['React+vite', 'Node.js', 'Express.js', 'Mysql', 'Tailwind CSS', 'ESP32', 'Mosquitto MQTT', 'ESP32-C3'],
    imageUrl: '/public/peternakan-ayam.png',
    liveUrl: 'https://peternakan-ayam.site/',
    repoUrl: 'https://github.com/consep33t/peternakan-ayam',
  },
  {
    title: 'Grace Services - Website manajemen dan kasir toko service elektronik',
    description: 'Website manajemen dan kasir untuk toko service elektronik yang memudahkan pencatatan transaksi, inventaris, dan laporan keuangan secara efisien.',
    tech: ['React', 'Next.js', 'Node.js', 'Mysql', 'Tailwind CSS', 'DaisyUI', 'PrintJS'],
    imageUrl: '/public/grace-services.png',
    liveUrl: 'https://grace-service.store/dashboard',
    repoUrl: 'https://github.com/consep33t/sistem_monitoring_pencatatan_barang_grace_services'
  },
  {
    title: 'Sistem Peminatan Jurusan Otomatis - Dengan Metode AHP & SAW',
    description: 'Sistem pendukung keputusan untuk membantu siswa dalam memilih jurusan sekolah menengah atas (SMA) secara otomatis berdasarkan kriteria yang telah ditentukan menggunakan metode AHP dan SAW.',
    tech: ['Next.js', 'MySQL', 'Tailwind CSS'],
    imageUrl: '/public/pemilihan-jurusan.png',
    liveUrl: 'https://spkpemilihanjurusan.my.id/',
    repoUrl: 'https://github.com/consep33t/pemilihan-dengan-ahp-saw'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({ 
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      type: 'spring',
      stiffness: 50,
    },
  }),
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden flex flex-col"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index} 
      whileHover={{ y: -10 }} 
    >
      <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6 flex-grow">
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tag) => (
            <span key={tag} className="text-xs font-semibold bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-6 bg-gray-50 dark:bg-gray-700 flex justify-end space-x-4">
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
          Live Demo
        </a>
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:underline">
          GitHub
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-12">Proyek Unggulan Saya</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;