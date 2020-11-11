import React from "react";
import {Jumbotron} from 'react-bootstrap';

function Jumbotron2() {

  let jumbotronStyles = {
    jumbotron: {
      width: "100%",
      display: "block",
      marginBottom: "60px",
      marginTop:"20px",
      height: "120px",
      color: "black",
      justifyContent: "center",
      padding: "20px",
      textAlign: "center",
      backgroundColor:"#58a4b0",
    },
    jumbotronText: {
      fontSize: "25px",
      color: "#373f51"
    },
    eminParis: {
      fontFamily: "Old Standard TT",
      fontStyle: "italic",
      fontWeight: "normal",
      fontSize: "30px",
      color: "#373f51"
      }
  }
  return(
   
  <Jumbotron className="container" style={jumbotronStyles.jumbotron}>
  
    <h1 style={jumbotronStyles.eminParis}>EMILY IN PARIS</h1>
    <p style={jumbotronStyles.jumbotronText}>
      Click and choose one of your favorite styles from this show to see more outfit details! 
    </p>
  
</Jumbotron>
  
  )

}

export default Jumbotron2;
