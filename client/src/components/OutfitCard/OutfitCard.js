import React from "react";
import { Col, Row, Container } from "../Grid";
import "./OutfitCard.css";

function OutfitPage(props){
    console.log(props.showOutfits[0].items[0].image)

    return(
        <>
        <h1>OUTFIT PAGE</h1>
        <div>
        <Container className="outfitCont">
            <Row>
                <Col size="md-6">
                <img className="itemImg" src={process.env.PUBLIC_URL + props.showOutfits[0].items[0].image}></img>
                </Col>
            </Row>
        </Container>
        </div>
</>
    )
}

export default OutfitPage;