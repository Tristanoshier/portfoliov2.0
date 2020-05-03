import React from 'react'
import Sitebar from './components/Sitebar'
import Landing from './components/Landing'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './css/main.css'


function App() {
  return (
    <div className="app-body">
      <Sitebar />
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App
