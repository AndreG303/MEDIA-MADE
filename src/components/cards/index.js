import React, {useState} from "react";
import { Card, Button } from "react-bootstrap";

function Cards() {
    const [widthState, setWidthState] = useState(
        [ 20, 20, 20, 20, 20]
    );

    // later card data will a separate state
    return (
        <div style={{display:"flex", justifyContent:"inlineBlock" }}>
            {widthState.map( (cardWidth, i) => 
                <Card style={{width: cardWidth + "%", transition: "width 1s"}} onMouseOver={ () =>{ 
                    //setWidthState([10, 20, 40, 20, 10]) 
                    let min = 10;
                    let variance = 100 - widthState.length * min;
                    console.log(variance);
                    let nWidth = [];
                    let len = widthState.length;
                    let maxValue = -1;
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
                    console.log(nWidth);
                    setWidthState(nWidth); 
                }}>
                <Card.Img variant="top" src="holder.js/100px180" />
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
    )
};

export default Cards;