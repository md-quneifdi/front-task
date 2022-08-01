import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="left">
        <p>TG Developers  &copy;</p>
      <p>سياسة الخصوصية</p>
      </div>
      <div className="right">
        <ul className="icons-part">
        <li><img src="images/telegram.svg" alt="" /></li>
        <li><img src="images/linkedinIcon.svg" alt="" /></li>
        <li><img src="images/facebook.svg" alt="" /></li>
      </ul>
      <p>تواصل معنا</p>
      </div>
    </div>
  )
}

export default Footer;

