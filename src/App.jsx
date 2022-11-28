import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Resume from './components/resume/Resume';
import './app.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<About />}
          />
          <Route
            path="/portfolio"
            element={<Portfolio />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/resume"
            element={<Resume />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App;
