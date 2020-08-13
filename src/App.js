import React from 'react';
import './App.css';
import 'tachyons';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div>
     
      <Intro/>
      <About/>
      <Projects/>
      
      <Contact/>
      <Footer/>
    </div>
    

  );
}

export default App;
