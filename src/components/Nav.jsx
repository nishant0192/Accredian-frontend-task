import React, { useState, useEffect, useRef } from 'react';
import '../index.css';

const Nav = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [indicatorPosition, setIndicatorPosition] = useState(0);
  const navRef = useRef(null);

  useEffect(() => {
    const updateIndicatorPosition = () => {
      if (navRef.current) {
        const activeItem = navRef.current.children[activeIndex];
        if (activeItem) {
          setIndicatorPosition(activeItem.offsetLeft + activeItem.clientWidth / 2);
        }
      }
    };

    updateIndicatorPosition();
    window.addEventListener('resize', updateIndicatorPosition);

    return () => {
      window.removeEventListener('resize', updateIndicatorPosition);
    };
  }, [activeIndex]);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="navbar bg-[#1A73E8] bg-opacity-10 rounded-[50px] mt-12" ref={navRef}>
      <a href="#" className={`nav-item ${activeIndex === 0 ? 'active text-[#1A73E8]' : 'text-[#4B4B4B]'}`} onClick={() => handleItemClick(0)}>Refer</a>
      <a href="#benefits" className={`nav-item ${activeIndex === 1 ? 'active text-[#1A73E8]' : 'text-[#4B4B4B]'}`} onClick={() => handleItemClick(1)}>Benefits</a>
      <a href="#faq" className={`nav-item ${activeIndex === 2 ? 'active text-[#1A73E8]' : 'text-[#4B4B4B]'}`} onClick={() => handleItemClick(2)}>FAQs</a>
      <a href="#support" className={`nav-item ${activeIndex === 3 ? 'active text-[#1A73E8]' : 'text-[#4B4B4B]'}`} onClick={() => handleItemClick(3)}>Support</a>
      <div className="indicator" style={{ left: `${indicatorPosition - 5}px` }}></div>
    </div>
  );
};

export default Nav;
