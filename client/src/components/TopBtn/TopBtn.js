import React from "react";
import "./TopBtn.css";

function ScrolltoTop () {
    <a href="#" class="myButton">↑Top</a>
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          myButton.style.display = "block";
        } else {
          myButton.style.display = "none";
        }
      }
      
      // When the user clicks on the button, scroll to the top of the document
      function topFunction() {
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }
}

export default ScrolltoTop;