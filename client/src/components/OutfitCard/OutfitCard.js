import React from "react";
import { Col, Row, Container } from "../Grid";
import "../../app.css";
import { useAllOutfits } from "../../utils/OutfitAPICalls";

function OutfitPage() {
    
    const [showOutfits] = useAllOutfits();

    return (
        <>
            <h1>OUTFIT PAGE</h1>
            <div>
                <Container>
                    {showOutfits.map((outfit) => outfit.items.map((items, index) =>
                        <Row key={"row-" + index}>
                            <Col size="md-3">
                                <img className="itemImg" src={process.env.PUBLIC_URL + items.image} />
                            </Col>
                            <Col size="md-8">
                                <p className="itemName">{items.name}</p>
                                <p className="itemLink"><a href={items.url}>Click here to buy this product</a></p>
                            </Col>
                        </Row>
                    ))}
                </Container>
            </div>
        </>
    )
}

export default OutfitPage;