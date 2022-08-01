import React from 'react';
import './Navbar.css';

// import BiMenuAltLeft from 'react-icons/md';

function Navbar() {

  // const [click, setClick] = useState(false);

  return (
    <div className='nav-bar'>
      <div className="logo">
          <img src="images/LOGO.svg" alt="" />
      </div>
      {/* <div className="icon-bar">
        <span><BiMenuAltLeft/></span>
      </div> */}
      <div className="list">
        <ul>
            <li>الرئيسية</li>
            <li>من نحن</li>
            <li>ماذا نقدم</li>
            <li>المسارات</li>
            <li>أعمالنا</li>
            <li>فريقنا</li>
        </ul> 
        <button className='btn'>انضم لنا</button>
      </div>
    </div>
  )
}

export default Navbar;
