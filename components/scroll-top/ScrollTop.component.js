import React, {useState} from 'react'
import {FaArrowCircleUp} from 'react-icons/fa'

const ScrollTop = () =>{

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  typeof window !== "undefined" && window.addEventListener('scroll', checkScrollTop)

  return (
    
    <FaArrowCircleUp 
      className="scroll-to-top" 
      onClick={scrollTop} 
      style={{display: showScroll ? 'flex' : 'none'}}
    />
  );
}

export default ScrollTop;