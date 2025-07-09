import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import SplitText from '../../../Reactbits/SplitText/SplitText';
import ShinyText from '../../../Reactbits/ShinyText/ShinyText';

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt="" />
      <SplitText
        text="I'm Arragen Basilio"
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
      <p>Seeking a career with a progressive organization that provides an opportunity to
        capitalize my technical skills and abilities in the field of Information Technology.</p>
      <div className="hero-action">
        <div className="hero-connect">
          <ShinyText text="Connect with me" disabled={false} speed={2} className='custom-class' />
        </div>
        <div className="hero-resume">
          <ShinyText text="My Resume" disabled={false} speed={2} className='custom-class' />
        </div>
      </div>
    </div>
  )
}

export default Hero