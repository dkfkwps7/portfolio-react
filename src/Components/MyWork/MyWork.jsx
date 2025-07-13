import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'
import ScrollFloat from './../../../Reactbits/ScrollFloat/ScrollFloat';

const MyWork = () => {
    return (
        <div className='mywork'>
            <div className="mywork-title">
                <ScrollFloat
                    animationDuration={1}
                    ease='back.inOut(2)'
                    scrollStart='center bottom+=150%'
                    scrollEnd='bottom bottom-=80%'
                    stagger={0.03}
                >
                    Projects
                </ScrollFloat>
                <div className="mywork-container">
                    {mywork_data.map((work,index)=>{
                        return <img key={index} src={work.w_img} alt=""/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default MyWork