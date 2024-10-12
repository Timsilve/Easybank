import { useState } from 'react'
import Articles from './Components/Articles'
import Choice from './Components/Choice'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'


function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <Choice />
      <Articles />
      <Footer />
    </>
  )
}

export default App
