import React, {useState} from "react";
import {Card, Button} from "react-bootstrap";

function OutfitCard(props) {
    const imageLength = props.showOutfits.map ( (imageEl) => 100 / props.showOutfits.length );
    console.log("ImageLength:", imageLength);
    const [widthState, setWidthState] = useState(imageLength);
    console.log("showOutfits:", props.showOutfits);
    return (
        <>
<div style={{display:"flex", justifyContent:"inlineBlock" }}>
            {widthState.map( (cardWidth, i) => 
                <Card style={{width: cardWidth + "%", transition: "width 1s"}} onMouseOver={ () =>{ 
                    let min = 5;
                    let variance = 100 - widthState.length * min;
                    console.log(variance);
                    let nWidth = [];
                    let len = widthState.length;
                    let maxValue = -3;
                    widthState.forEach( (width, x) => {
                        console.log({x, len, i});
                        nWidth.push(Math.abs(x-i));
                        maxValue = maxValue < Math.abs(x-i) ? Math.abs(x-i) : maxValue;
                    });
                    let sum = 0;
                    nWidth = nWidth.map( (nw, i) => {
                        return maxValue - nw;
                    });
                    nWidth.forEach( nw => sum += nw);
                    let scale = variance / sum;
                    nWidth = nWidth.map( (nw, i) => {
                        return scale * nw + min;
                    });
                    console.log("nWidth:", nWidth);
                    setWidthState(nWidth); 
                }}>
                <Card.Img variant="top" src={process.env.PUBLIC_URL + props.showOutfits[i].outfitImage} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            )} 
            
            
            </div>
        
        </>
    )
};

export default OutfitCard;