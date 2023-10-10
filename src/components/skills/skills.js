import React from 'react';
import './skills.css';
import UIDESIGN from '../../assets/ui-design.png';
import WEBDESIGN from '../../assets/website-design.png';
import APPDESIGN from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>About Me</span>
        <span className='skillDesc'>I am a passionate web designer and a skilled frontend developer having commands over various tools and technologies like Html Css Javascript and Reactjs.I have always been fascinated by knowledge and learning new things.As an impassioned web developer who is exploring many areas of development I would love to work with buisnesses for mutual growth.</span>
        <div className='skillBars'>
        <div className='skillBar'>
            <img src={UIDESIGN} alt="UIDESIGN" className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>UI/UX DESIGN</h2>
                <p>ejvkjdv kjsdv</p>
            </div>
        </div>
        </div>    
        <div className='skillBars'>
        <div className='skillBar'>
            <img src={WEBDESIGN} alt="WEBDESIGN" className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>UI/UX DESIGN</h2>
                <p>ejvkjdv kjsdv</p>
            </div>
        </div>
        </div>
        <div className='skillBars'>
        <div className='skillBar'>
            <img src={APPDESIGN} alt="APPDESIGN" className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>UI/UX DESIGN</h2>
                <p>ejvkjdv kjsdv</p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Skills;