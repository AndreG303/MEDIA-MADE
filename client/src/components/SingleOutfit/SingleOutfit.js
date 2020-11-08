import React, {useEffect, useState} from "react";
import {Card, Button} from "react-bootstrap";
import "./SingleOutfit.css";
import { useParams } from "react-router-dom";
import API from "../../utils/API";
import { Link } from "react-router-dom";

function OutfitCard(props) {
    // const [outfit, setOutfit] = useState([]);

    // useEffect(() => {
    //     loadOutfits()
    //   }, [])
    
    //   // Loads all books and sets them to books
    //   function loadOutfits() {
    //     API.getOutfits()
    //       .then(res => 
    //         setOutfit(res.data)
    //       )
    //       .catch(err => console.log(err));
    //   };

    const [outfit, setOutfit] = useState({
        outfitImage: "",
        items: []
    });

    const {outfitid} = useParams();

    useEffect(() => {
        API.getOutfits(outfitid)
        .then(res => {
            setOutfit(res.data) 
        })
        .catch(err => console.log(err));
    }, [])

    console.log(outfit)
    const outfitArray = props.showOutfits.map(e => e._id)
    console.log(outfitArray)
    

    const imageLength = props.showOutfits.map ( (imageEl) => 100 / props.showOutfits.length );
    // console.log("ImageLength:", imageLength);
    const [widthState, setWidthState] = useState(imageLength);
    // console.log("showOutfits:", props.showOutfits);
    return (
        <>
<div style={{display:"flex", justifyContent:"inlineBlock" }}>
            {widthState.map( (cardWidth, i) => 
                <Card className="full-outfit" style={{width: cardWidth + "%", transition: "width 1s"}} onMouseOver={ () =>{ 
                    let min = 5;
                    let variance = 100 - widthState.length * min;
                    // console.log(variance);
                    let nWidth = [];
                    let len = widthState.length;
                    let maxValue = -3;
                    widthState.forEach( (width, x) => {
                        // console.log({x, len, i});
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
                    // console.log("nWidth:", nWidth);
                    setWidthState(nWidth); 
                }}>
                   <Link to={"/outfits/" + outfitArray[i]}>
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