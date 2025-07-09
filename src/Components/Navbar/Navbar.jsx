import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import ShinyText from './../../../Reactbits/ShinyText/ShinyText';
import GradientText from './../../../Reactbits/GradientText/GradientText';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">
        <GradientText
          colors={["#c3fc3c", "#3cfc4c", "#8efc44", "#40fc50", "#c3fc3c"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class"
        >
          Connect with me
        </GradientText>
      </div>
    </div>
  )
}

export default Navbar