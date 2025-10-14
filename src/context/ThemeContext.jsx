// src/context/ThemeContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';

// Fungsi untuk mendeteksi preferensi tema awal (OS atau localStorage)
const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) {
      return 'dark';
    }
  }
  return 'light'; // default
};

// Buat Context-nya
const ThemeContext = createContext();

// Buat Provider (pembungkus)
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  // Fungsi untuk mengganti tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Gunakan useEffect untuk menerapkan tema ke <html> tag
  // dan menyimpannya di localStorage setiap kali 'theme' berubah
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Hapus class sebelumnya
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    // Tambahkan class saat ini
    root.classList.add(theme);

    // Simpan pilihan pengguna
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Buat custom hook agar mudah digunakan di komponen lain
export const useTheme = () => useContext(ThemeContext);