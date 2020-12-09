import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import API from "../../utils/API";
import { Row, Col, Container } from "../Grid";
import { Button } from "react-bootstrap";
import TopBtn from "../TopBtn/TopBtn.js";
import UserContext from "../../utils/UserContext";

function OutfitPage(props) {
  const [outfit, setOutfit] = useState({
    outfitImage: "",
    items: [],
  });

  const { loggedIn } = useContext(UserContext);

  let styles = {
    outfitCard: {
      backgroundColor: "#d8dbe2",
      color: "white",
      paddingTop: "40px",
      width: "70vw",
      minHeight: "850px",
      marginTop: "0px",
    },
    outfitImg: {
      padding: "20px",
    }
  };

  const { outfitid } = useParams();

// this if/else statement will run and find the outfit id 
// if statement relates to getting the outfit id through props, or the parent
// else statement states that it will get it using useParams 
  useEffect(
    (outfitid) => {
      if (props.outfitid) {
        API.getOutfit(props.outfitid)
          .then((res) => {
            setOutfit(res.data);
          })
          .catch((err) => console.log(err));
      } else {
        API.getOutfit(outfitid)
          .then((res) => {
            setOutfit(res.data);
          })
          .catch((err) => console.log(err));
      }
    },
    [props]
  );

  const handleAddToCloset = async () => {
    console.log(outfitid);
    await API.updateUserOutfits(outfitid).then((data) => {
      console.log(data);
    });
  };

  const handleDelete = (event, outfitid) => {
    API.deleteUserOutfit(outfitid).then((data) => {
      console.log(data);
      if (props.deleteOutfit) {
        props.deleteOutfit(outfitid);
      }
    });
  };

  return (
    <div className="container-outfit">
      <Container >
        <Row>
          <Col size="md-4">
            <img
              className="show-outfit-img"
              src={outfit.outfitImage}
              alt="outfit"
            />
          </Col>
          <Col size="md-8">
            {outfit.items.map((items, index) => (
              <Row key={"row-" + index}>
                <Col size="md-4">
                  <img
                    alt="outfit-details"
                    style={styles.outfitImg}
                    className="itemImg"
                    src={process.env.PUBLIC_URL + items.image}
                  ></img>
                </Col>
                <Col size="md-8">
                  <p style={styles.outfitTextTitle} className="itemName">
                    {items.name}
                  </p>
                  <p style={styles.outfitTextLink} className="itemLink">
                    <a
                      href={items.url}
                      className="itemLink"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Click here to buy this product
                    </a>
                  </p>
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
        {(() => {
          if(!loggedIn){
            return(
              <p className="login-closet-text">Login to Add To Your Closet</p>
            )
          }
          else if (props.showAddToCloset && loggedIn) {
            return (
              <Button
                className="buttons"
                variant="outline-light"
                onClick={handleAddToCloset}
              >
                ADD TO CLOSET
              </Button>
            );
          } else if (loggedIn)  {
            return (
              <Button
                className="buttons"
                variant="outline-light"
                onClick={(event) => handleDelete(event, outfit._id)}
              >
                DELETE OUTFIT
              </Button>
            );
          }
        })()}
      </Container>
      <TopBtn />
    </div>
  );
}

export default OutfitPage;
