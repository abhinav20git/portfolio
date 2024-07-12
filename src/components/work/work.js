import React from 'react';
import './work.css';
import PORTFOLIO1 from '../../assets/portfolio-1.png';
// import PORTFOLIO2 from '../../assets/portfolio-2.png';
import PORTFOLIO3 from '../../assets/portfolio-3.png';
import PORTFOLIO6 from '../../assets/portfolio-6.png';

const Work = () => {
  return (
    <section id='work'>
        <div className='workText'>
            <h2 className='workTitle'>My Projects</h2>
        </div>
        <div className='workImgs'>
            <div className='workImg'><a href='https://github.com/abhinav20git/chat-app'><img src={PORTFOLIO1} alt='workpic' className='workpic'/><span className='workImgTitle'>Chat-application</span></a></div>
            <div className='workImg'><a href='https://frabjous-scone-22ca44.netlify.app'><img src="https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=600" alt='workpic' className='workpic'/><span className='workImgTitle'>  Contact Application</span></a></div>
            <div className='workImg'><a href='https://website-myntra-clone.netlify.app/'><img src={PORTFOLIO3} alt='workpic' className='workpic'/><span className='workImgTitle'>Myntra Clone</span></a></div>
            <div className='workImg'><a href='https://zingy-blancmange-37c9ff.netlify.app'><img src={PORTFOLIO6} alt='workpic' className='workpic'/><span className='workImgTitle'>Analog-Clock</span></a></div>
            
        </div>
    </section>
  )
}

export default Work;