// src/App.jsx
import React from 'react';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen antialiased">
      <Navbar />
      
      <main className="container mx-auto px-6 md:px-12 py-8">
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about" className="py-20">
          <About />
        </section>

        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <Skills />
        </section>
        
        <section id="projects" className="py-20">
          <Projects />
        </section>
        
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <Contact />
        </section>
        
      </main>
      
      <Footer />
    </div>
  );
}

export default App;