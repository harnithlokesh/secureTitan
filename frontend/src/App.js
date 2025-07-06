import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Notes from './pages/Notes';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const backgroundText = "secureTitan";

  return (
    <Router>
      {/* 🔷 Background Text */}
      <div className="background-text">
        {backgroundText.split("").map((char, index) => (
          <span key={index} className={`scanner-letter letter-${index}`}>{char}</span>
        ))}
      </div> 

      {/* 🔷 Main Layout */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
