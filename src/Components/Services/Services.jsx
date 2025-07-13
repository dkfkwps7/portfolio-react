import React from 'react'
import './Services.css'
import Services_Data from '../../assets/services_data'
import ScrollFloat from './../../../Reactbits/ScrollFloat/ScrollFloat';
import SpotlightCard from './../../../Reactbits/SpotlightCard/SpotlightCard';

const Services = () => {
    return (
        <div className='services'>
            <div className="services-title">
                <ScrollFloat
                    animationDuration={1}
                    ease='back.inOut(2)'
                    scrollStart='center bottom+=150%'
                    scrollEnd='bottom bottom-=80%'
                    stagger={0.03}
                >
                    Skills - Tools
                </ScrollFloat>
            </div>
            <div className="services-container">
                {Services_Data.map((service, index) => {
                    return <SpotlightCard key={index} className="services-format" spotlightColor="rgba(192, 255, 165, 0.53)">
                            <h3>{service.s_name}</h3>
                            <p>{service.s_desc}</p>
                        </SpotlightCard>
                })}
            </div>
        </div>
    )
}

export default Services