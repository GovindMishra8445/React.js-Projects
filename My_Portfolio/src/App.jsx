import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import ProjectDetails from './components/ProjectDetails';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import LoadingScreen from './components/LoadingScreen';
import SocialSidebar from './components/SocialSidebar';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <ScrollToTop />
          <Navbar />
          <SocialSidebar />
          <BackToTop />
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <Hero />
                  <About />
                  <Skills />
                  <Projects />
                  <Experience />
                  <Contact />
                </>
              } 
            />
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
          <Footer />
          {/* <ThemeToggle /> */}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;