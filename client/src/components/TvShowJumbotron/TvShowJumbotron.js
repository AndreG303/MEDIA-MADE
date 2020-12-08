import React from "react";
import { Jumbotron } from "react-bootstrap";

function TvShowJumbotron(props) {

  return (
    <Jumbotron className="tvShowTitle">

      <h1 className="fancy"><span>{props.children}</span></h1>
      
    </Jumbotron>
  );
}

export default TvShowJumbotron;
