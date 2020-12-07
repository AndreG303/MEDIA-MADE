import React from "react";
import { Jumbotron } from "react-bootstrap";

function Jumbotron3() {
//   let jumbotronStyles3 = {
//     jumbotron: {
//       width: "100%",
//       display: "block",
//       marginBottom: "80px",
//       marginTop: "5px",
//       height: "120px",
//       color: "#d8dbe2",
//       justifyContent: "center",
//       padding: "10px",
//       textAlign: "center",
//       backgroundColor: "transparent",
//       fontSize: "10px",
//       fontStyle: "italic",
//     },
//     jumbotronText: {
//       fontSize: "25px",
//       color: "#d8dbe2"
//     }
//   };
  return (
    <Jumbotron className="container-fluid sloganJ">
      <h1 class="slogan">
        Be inspired by your favorite TV shows and curate your own personal
        closet!
      </h1>
      <p class="slogan2">Click and choose one of your favorite styles from this shows to see more outfit details!</p>
    </Jumbotron>
  );
  }

export default Jumbotron3;
