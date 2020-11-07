import React, {useState} from "react";
import { Card } from "react-bootstrap";
import "./cards.css";

function Cards(props) {
    const [widthState, setWidthState] = useState(
        [ 20, 20, 20, 20, 20]
    );

    // later card data will a separate state
    return (
        <div style={{display:"flex", justifyContent:"inlineBlock" }}>
            {widthState.map( (cardWidth, i) => 
                <Card style={{width: cardWidth + "%", transition: "width 1s", backgroundColor:"transparent"}} onMouseOver={ () =>{ 
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
                <Card.Img className="show-outfit-img" variant="top" src={process.env.PUBLIC_URL + props.outfit.outfitImage} />
                
                 <Card.Img className="show-outfit-img" variant="top" src={"https://static.wikia.nocookie.net/spongebob/images/d/d7/SpongeBob_stock_art.png/revision/latest/scale-to-width-down/350?cb=20190921125147"} />
                 </Card>
                
            )}
            
            
        </div>
    )
};

export default Cards;