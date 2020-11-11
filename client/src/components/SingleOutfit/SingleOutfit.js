import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "../../app.css";
import { Link } from "react-router-dom";

function OutfitCard(props) {

    const outfitArray = props.showOutfits.map(e => e._id)
    const imageLength = props.showOutfits.map((imageEl) => 100 / props.showOutfits.length);
    const [widthState, setWidthState] = useState(imageLength);


    return (
        <>
            <div style={{ display: "flex", justifyContent: "inlineBlock", marginBottom:"20px"}}>
                {widthState.map((cardWidth, i) =>
                    <Card className="full-outfit" style={{ width: cardWidth + "%", transition: "width 1s" }} onMouseOver={() => {
                        let min = 5;
                        let variance = 100 - widthState.length * min;
                        let nWidth = [];
                        let len = widthState.length;
                        let maxValue = -3;
                        widthState.forEach((width, x) => {
                            nWidth.push(Math.abs(x - i));
                            maxValue = maxValue < Math.abs(x - i) ? Math.abs(x - i) : maxValue;
                        });
                        let sum = 0;
                        nWidth = nWidth.map((nw, i) => {
                            return maxValue - nw;
                        });
                        nWidth.forEach(nw => sum += nw);
                        let scale = variance / sum;
                        nWidth = nWidth.map((nw, i) => {
                            return scale * nw + min;
                        });
                        setWidthState(nWidth);
                    }}>
                        <Link to={"/outfits/" + outfitArray[i]} onClick={(props.handleChangeOfPage && (() => props.handleChangeOfPage(outfitArray[i]))) || (() => {})}>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + props.showOutfits[i].outfitImage} />
                            {/* <Card.Img className="outfitCard hoverHide" variant="top" src={process.env.PUBLIC_URL + "/assets/outfitImg/SpongeBob_stock_art.png"} /> */}
                        </Link>
                    </Card>
                )}
            </div>
        </>
    )
};

export default OutfitCard;