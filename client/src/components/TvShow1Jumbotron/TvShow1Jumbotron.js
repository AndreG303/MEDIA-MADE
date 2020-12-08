import React from "react";
import { Jumbotron } from "react-bootstrap";

function Jumbotron2(props) {

  return (
    <Jumbotron className="tvShow1Title">

      <h1 className="fancy"><span>{props.children}</span></h1>
      
    </Jumbotron>
  );
}

export default Jumbotron2;
