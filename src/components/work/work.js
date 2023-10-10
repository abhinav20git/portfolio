import React from 'react';
import './work.css';
import PORTFOLIO1 from '../../assets/portfolio-1.png';
import PORTFOLIO2 from '../../assets/portfolio-2.png';
import PORTFOLIO3 from '../../assets/portfolio-3.png';
// import PORTFOLIO4 from '../../assets/portfolio-4.png';
// import PORTFOLIO5 from '../../assets/portfolio-5.png';
import PORTFOLIO6 from '../../assets/portfolio-6.png';

const Work = () => {
  return (
    <section id='work'>
        <div className='workText'>
            <h2 className='workTitle'>My Portfolio</h2>
            <p className='workDesc'>hdsc jdskjhs kshd c,sdcdvddsncjnkjnjsdnjnvkndwfjsofjrgnweorirug</p>
        </div>
        <div className='workImgs'>
            <div className='workImg'><a href=''><img src={PORTFOLIO1} alt='workpic' className='workpic'/><span className='workImgTitle'>Analog-Clock</span></a></div>
            <div className='workImg'><a href=''><img src={PORTFOLIO2} alt='workpic' className='workpic'/><span className='workImgTitle'>Analog-Clock</span></a></div>
            <div className='workImg'><a href=''><img src={PORTFOLIO3} alt='workpic' className='workpic'/><span className='workImgTitle'>Analog-Clock</span></a></div>
            <div className='workImg'><a href='https://zingy-blancmange-37c9ff.netlify.app'><img src={PORTFOLIO6} alt='workpic' className='workpic'/><span className='workImgTitle'>Analog-Clock</span></a></div>
        </div>
        <button className='workBtn'>See More</button>
    </section>
  )
}

export default Work;