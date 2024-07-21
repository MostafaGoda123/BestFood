import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadLineCards from './components/HeadLineCards'
import Food from './components/Food'
import Category from './components/Category'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadLineCards />
      <Food />
      <Category /> 
      <Footer />
    </div>
  )
}

export default App
