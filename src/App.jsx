import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Skills from './Components/Skills'
import About from './Components/About'
import Work from './Components/Work'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Hero />
    <Skills />
    <About />
    <Work />
    <Contact />
    <Footer />
    </>
  )
}

export default App