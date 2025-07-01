import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './Pages/Header';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

function App() {
  return (
    <>
      <Navbar />
        <Header />
        <About />
        <Projects />
        <Contact />
    </>
  );
}

export default App;
