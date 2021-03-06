import React, { Component } from "react";
import Typed from "react-typed";
import "../../app.css";

class BrandTyped extends Component {
  render() {
    return (
      <div className="typedLetters">
        <Typed
          strings={["MEDIA MADE"]}
          typeSpeed={50}
          backSpeed={80}
          backDelay={2000}
          startDelay={1000}
          loop={true}
          showCursor={true}
        />
        <br />
      </div>
    );
  }
}

export default BrandTyped;
