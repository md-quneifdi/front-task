import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero'>
        <div className="img-box">
          <img src="images/person.svg" alt="" />
        </div>
        <div className="text-box">
          <div className="text">
            <p>تعـــلم  تخصــص</p>
            <p>بمسـتوى جامعــــي</p>
            <p>متــاح للجميـــع بالمجـــــان</p>
          </div>
        </div>
    </div>
  )
}

export default Hero;
