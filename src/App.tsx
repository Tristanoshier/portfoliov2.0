import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Sitebar from './components/Sitebar'
import Landing from './components/Landing'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PetPals from './components/Projects/PetPals'
import SpaceVisualizer from './components/Projects/SpaceVisualizer'
import MyRecords from './components/Projects/MyRecords'
import ScrollToTop from './components/ScrollToTop'
import './css/main.css'



function App() {
  return (
    <div className="app-body">
      <Router>
      <ScrollToTop />
        <Switch>
            <Route exact path="/">
              <Sitebar />
              <Landing />
              <About />
              <Skills />
              <Projects />
              <Contact />
              <Footer />
            </Route>

            <Route exact path="/petpals">
              <PetPals />
            </Route>

            <Route exact path="/solarsystem">
              <SpaceVisualizer />
            </Route>

            <Route exact path="/record">
              <MyRecords />
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App
