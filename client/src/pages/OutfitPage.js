import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";
import { Row, Col, Container } from "../components/Grid";
import { Button } from "react-bootstrap"
import UserContext from "../utils/UserContext";
import TopScrollBtn from "../components/TopBtn/TopBtn.js";

function OutfitPage(props) {

  const { updateUserCloset, setUpdateUserCloset } = useContext(UserContext);
  const [outfit, setOutfit] = useState({
    outfitImage: "",
    items: [],
  });

  let styles = {
    outfitCard: {
      backgroundColor: "#d8dbe2",
      color: "white",
      paddingTop: "40px",
      width: "70vw",
      minHeight: "850px",
      marginTop: "0px"
    },
    outfitImg: {
      padding: "20px"
    },
    outfitTextTitle: {
      fontSize: "25px",
      fontFamily: "Old Standard TT",
      textTransform: "uppercase",
      paddingTop:"20px"
    
    },
    outfitTextLink: {
        fontFamily: "'Rubik', sans-serif",
        fontSize: "25px",
      color: "white"
      }
  };

  const { outfitid } = useParams();

  useEffect(() => {
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
  }, [props]);

  const handleAddToCloset = async () => {
    console.log(outfitid);
    await API.updateUserOutfits(outfitid).then((data) => {
      console.log(data);
      
    });
  };

  const handleDelete = () => {
    API.deleteUserOutfit(outfitid).then((data) => {
      console.log(data);
    });
  };

  return (
    <div>
      <Container className="container-outfit">
          <Row>
          <Col size="md-4">
        <img style={styles.emily} src={outfit.outfitImage} alt="outfit-image" />
        </Col>
        <Col size="md-8">
        {outfit.items.map((items) => (
          <Row>
            <Col size="md-4">
              <img
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
                <a classname="itemLink" href={items.url} target='_blank'>Click here to buy this product</a>
              </p>
            </Col>
          </Row>
        ))}
        </Col>
        </Row>
        {(() => {
          if (props.showAddToCloset) {
            return <Button onClick={handleAddToCloset}>ADD TO CLOSET</Button>;
          } else {
            return <Button onClick={handleDelete}>DELETE OUTFIT</Button>;
          }
        })()}
      </Container>
    </div>
  );
}

export default OutfitPage;
