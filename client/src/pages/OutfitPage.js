import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import API from "../utils/API";
import {Row, Col} from "react-bootstrap";
// import OutfitCard from "../components/SingleOutfit/SingleOutfit";


function OutfitPage(props) {

    const [outfit, setOutfit] = useState({
        outfitImage: "",
        items: []
    });

    const {outfitid} = useParams();
    console.log(outfitid);

    useEffect(() => {
        API.getOutfit(outfitid)
        .then(res => { 
            console.log(res);
            setOutfit(res.data) 
        })
        .catch(err => console.log(err));
    }, [])


    return (
        <>

        <p style={{color:"white"}}>Outfit Card</p>
        <img src={outfit.outfitImage} alt="outfit-image" />
        {outfit.items.map( (items) =>
            <Row>
                <Col size="md-3">
                <img className="itemImg" src={process.env.PUBLIC_URL + items.image}></img>
                </Col>
                <Col size="md-8">
                <p className="itemName">{items.name}</p>
                <p className="itemLink"><a href={items.url}>Click here to buy this product</a></p>
                </Col>
            </Row>
        )})
        
        </>
    )
}

export default OutfitPage;