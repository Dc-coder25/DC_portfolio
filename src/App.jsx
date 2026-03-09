import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'
import TechMarquee from './components/TechMarquee'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechMarquee />
      <Projects />
      <Footer />
    </>
  )
}

export default App
