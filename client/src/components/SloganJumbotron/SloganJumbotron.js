import React from "react";
import { Jumbotron } from "react-bootstrap";

function Jumbotron3() {
  let jumbotronStyles3 = {
    jumbotron: {
      width: "100%",
      display: "block",
      marginBottom: "80px",
      marginTop: "5px",
      height: "120px",
      color: "#d8dbe2",
      justifyContent: "center",
      padding: "10px",
      textAlign: "center",
      backgroundColor: "transparent",
      fontSize: "10px",
      fontStyle: "italic",
    },
    jumbotronText: {
      fontSize: "25px",
      color: "#d8dbe2"
    }
  };
  return (
    <Jumbotron className="container-fluid" style={jumbotronStyles3.jumbotron}>
      <h1>
        Be inspired by your favorite TV shows and curate your own personal
        closet!
      </h1>
      <p style={jumbotronStyles3.jumbotronText}>Click and choose one of your favorite styles from this show to see more outfit details!</p>
    </Jumbotron>
  );
}

export default Jumbotron3;
