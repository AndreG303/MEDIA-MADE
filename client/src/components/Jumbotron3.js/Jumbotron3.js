import React from "react";
import {Jumbotron, Container} from 'react-bootstrap';

function Jumbotron3() {

  let jumbotronStyles3 = {
    jumbotron: {
      width: "100%",
      display: "block",
      marginBottom: "80px",
      marginTop:"5px",
      height: "120px",
      color: "#d8dbe2",
      justifyContent: "center",
      padding: "20px",
      textAlign: "center",
      backgroundColor:"transparent",
      fontSize: "1px",
      fontStyle:"italic"
    },
  }
  return(
   
  <Jumbotron className="container-fluid" style={jumbotronStyles3.jumbotron}>
  
    <h1>Be inspired by your favorite TV shows and curate your own personal closet!</h1>

  
</Jumbotron>
  
  )

}

export default Jumbotron3;