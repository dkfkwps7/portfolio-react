import React from 'react'
import './Hero.css'
import profile_img1 from '../../assets/profile_img1.svg'
import SplitText from '../../../Reactbits/SplitText/SplitText';

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img1} alt="" />
      <SplitText
        text="Arragen Basilio"
        className="text-2xl font-semibold text-center"
        delay={100}
        duration={0.7}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete} />
      <div className="hero-p">
        <p>A passionate Information Technology professional and recent graduate with a drive for innovation and excellence in the tech industry.</p>
      </div>
      <div className="hero-action">
        <div className="hero-resume">Download CV</div>
      </div>
    </div>
  )
}

export default Hero