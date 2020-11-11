import React, { useEffect, useState } from "react";
import "../../app.css";
import { FaLongArrowAltUp } from "react-icons/fa";

function TopBtn () {
    const [showScroll, setShowScroll] = useState(false)
const checkScrollTop = () => {    
   if (!showScroll && window.pageYOffset > 200){
      setShowScroll(true)    
   } else if (showScroll && window.pageYOffset <= 200){
      setShowScroll(false)    
   }  
};
const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  useEffect(() => {
  window.addEventListener("scroll", checkScrollTop);
  });

  return (
    <FaLongArrowAltUp
      className="scrollTop"
      onClick={scrollTop}
      style={{ height: 40, display: showScroll ? "flex" : "none" }}
    />
  );
}

export default TopBtn;
