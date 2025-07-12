import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import ClickSpark from './../Reactbits/ClickSpark/ClickSpark';

const App = () => {
  return (
    <ClickSpark
      sparkColor='#fff'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div>
        <Navbar />
        <Hero />
        <About />
      </div>
    </ClickSpark>
  )
}

export default App