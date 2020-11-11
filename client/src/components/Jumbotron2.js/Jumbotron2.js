import React from "react";
import {Jumbotron, Container} from 'react-bootstrap';

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
      backgroundColor: "#d8dbe2",
    },
    jumbotronText: {
      fontSize: "25px"
    }
  }
  return(
   
  <Jumbotron className="container" style={jumbotronStyles.jumbotron}>
  
    <h1>Emily in Paris</h1>
    <p style={jumbotronStyles.jumbotronText}>
      Click and choose one of your favorite styles from this show to see more outfit details! 
    </p>
  
</Jumbotron>
  
  )

}

export default Jumbotron2;
