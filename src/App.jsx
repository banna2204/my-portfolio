import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { AnimatePresence } from 'framer-motion'
import CustomCursor from './components/CustomCursor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CustomCursor/>
    <AnimatePresence mode='wait'>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </AnimatePresence>
    </>
  )
}

export default App
