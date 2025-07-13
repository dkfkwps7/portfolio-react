import React from 'react'
import './About.css'
import profile_img from '../../assets/profile_img.svg'
import AnimatedContent from './../../../Reactbits/AnimatedContent/AnimatedContent';
import html_img from '../../assets/html.svg'
import css_img from '../../assets/css.svg'
import reactjs_img from '../../assets/reactjs.svg'
import js_img from '../../assets/js.svg'
import php_img from '../../assets/php.svg'
import ScrollFloat from './../../../Reactbits/ScrollFloat/ScrollFloat';
import { Tooltip } from 'react-tooltip'


const About = () => {
    return (
        <div className='about'>
            <div className="about-title">
                <ScrollFloat
                    animationDuration={1}
                    ease='back.inOut(2)'
                    scrollStart='center bottom+=150%'
                    scrollEnd='bottom bottom-=80%'
                    stagger={0.03}
                >
                    About Me
                </ScrollFloat>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <AnimatedContent
                        distance={200}
                        direction="horizontal"
                        reverse={true}
                        duration={2}
                        ease="power3.out"
                        initialOpacity={0.2}
                        animateOpacity
                        scale={1.1}
                        threshold={0.2}
                        delay={0.3}
                    >
                        <img src={profile_img} alt="" />
                    </AnimatedContent>

                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I'm a dedicated and highly motivated Information Technology professional, with a strong foundation in programming, system troubleshooting, and web development, I bring both technical expertise and leadership experience to every project I undertake.</p>
                    </div>
                    <div className="about-skills">
                        <AnimatedContent
                            distance={150}
                            direction="vertical"
                            reverse={true}
                            duration={1}
                            ease="power3.out"
                            initialOpacity={0.2}
                            animateOpacity
                            scale={1}
                            threshold={0.1}
                            delay={0}
                        >
                            <div className="about-skill html">
                                <div className="skill-img">
                                    <img src={html_img} alt="" />
                                </div>
                                <Tooltip anchorSelect=".html" place="left" className="custom-tooltip">
                                    HTML
                                </Tooltip>
                                <hr style={{ width: "70%" }} />
                            </div>
                        </AnimatedContent>
                        <AnimatedContent
                            distance={155}
                            direction="vertical"
                            reverse={true}
                            duration={1.5}
                            ease="power3.out"
                            initialOpacity={0.2}
                            animateOpacity
                            scale={1}
                            threshold={0.1}
                            delay={0}
                        >
                            <div className="about-skill css">
                                <div className="skill-img">
                                    <img src={css_img} alt="" />
                                </div>
                                <Tooltip anchorSelect=".css" place="left" className="custom-tooltip">
                                    CSS
                                </Tooltip>
                                <hr style={{ width: "70%" }} />
                            </div>
                        </AnimatedContent>
                        <AnimatedContent
                            distance={160}
                            direction="vertical"
                            reverse={true}
                            duration={2}
                            ease="power3.out"
                            initialOpacity={0.2}
                            animateOpacity
                            scale={1}
                            threshold={0.1}
                            delay={0}
                        >
                            <div className="about-skill reactjs">
                                <div className="skill-img">
                                    <img src={reactjs_img} alt="" />
                                </div>
                                <Tooltip anchorSelect=".reactjs" place="left" className="custom-tooltip">
                                    React JS
                                </Tooltip>
                                <hr style={{ width: "40%" }} />
                            </div>
                        </AnimatedContent>
                        <AnimatedContent
                            distance={165}
                            direction="vertical"
                            reverse={true}
                            duration={2.5}
                            ease="power3.out"
                            initialOpacity={0.2}
                            animateOpacity
                            scale={1}
                            threshold={0.1}
                            delay={0}
                        >
                            <div className="about-skill js">
                                <div className="skill-img">
                                    <img src={js_img} alt="" />
                                </div>
                                <Tooltip anchorSelect=".js" place="left" className="custom-tooltip">
                                    JavaScript
                                </Tooltip>
                                <hr style={{ width: "50%" }} />
                            </div>
                        </AnimatedContent>
                        <AnimatedContent
                            distance={170}
                            direction="vertical"
                            reverse={true}
                            duration={3}
                            ease="power3.out"
                            initialOpacity={0.2}
                            animateOpacity
                            scale={1}
                            threshold={0.1}
                            delay={0}
                        >
                            <div className="about-skill php">
                                <div className="skill-img">
                                    <img src={php_img} alt="" />
                                </div>
                                <Tooltip anchorSelect=".php" place="left" className="custom-tooltip">
                                    PHP
                                </Tooltip>
                                <hr style={{ width: "65%" }} />
                            </div>
                        </AnimatedContent>
                    </div>
                </div>
            </div>

            <div className="about-achievements">
                <div className="about-achievement">
                    <h1> ICT (TECH-VOC) - Senior High School  (2019 – 2021)</h1>
                    <p>University of Perpetual Help System DALTA – Calamba Campus</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>Bachelor of Science in Information Technology (2021 – 2025)</h1>
                    <p>University of Perpetual Help System DALTA – Calamba Campus</p>
                </div>
            </div>
        </div>
    )
}

export default About