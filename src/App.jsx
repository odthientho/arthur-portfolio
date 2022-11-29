import React, { useState } from 'react';
import About from './components/about/About';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Resume from './components/resume/Resume';
import './app.css'

function App() {
  const [navActive, setNavActive] = useState('ABOUT ME');
  return (
    <>
      { 
        (navActive === "PORTFOLIO") ? <Portfolio /> : 
        ((navActive === "CONTACT") ? <Contact /> :
        ((navActive === "RESUME") ? <Resume /> : 
        (<About /> )))
      }
      <Nav navActive={navActive} setNavActive={setNavActive} />
    </>
  )
}

export default App;
