import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import API from "../utils/API";
import { Row, Col, Container, Button } from "react-bootstrap";


function OutfitPage(props) {

    const [outfit, setOutfit] = useState({
        outfitImage: "",
        items: []
    });

    let styles ={
        outfitCard:{
            backgroundColor: "#d8dbe2",
            color: "white",
            padding: "40px",
            backgroundSize: "cover",
            width: "70vw",
            minHeight: "70vh"
        },
        outfitImg:{
            padding: "20px",
            float: "right"
        },
        outfitText:{
            fontFamily: "'Rubik', sans-serif",
            fontSize: "25px",
            float: "right"
        },
        emily:{
            float: "left"    
        }
    }

    const { outfitid } = useParams();

    useEffect(() => {
        if(props.outfitid){
            API.getOutfit(props.outfitid)
            .then(res => {
                console.log(res);
                setOutfit(res.data)
            })
            .catch(err => console.log(err));
        }
        else{
            API.getOutfit(outfitid)
            .then(res => {
                console.log(res);
                setOutfit(res.data)
            })
            .catch(err => console.log(err));
        }
        
    }, [props])

    const handleAddToCloset = () => {
        // let outfitid =event.target.getAttribute("data-outfitid").value();
        console.log(outfitid)
        API.updateUserOutfits(outfitid).then(data =>{
            console.log(data);
        })
    }

    return (
        <div>
            <Container style={styles.outfitCard}>
                <img style={styles.emily} src={outfit.outfitImage} alt="outfit-image" />
                {outfit.items.map((items) =>
                    <Row>
                        <Col size="md-3">
                            <img style={styles.outfitImg} className="itemImg" src={process.env.PUBLIC_URL + items.image}></img>
                        </Col>
                        <Col size="md-8">
                            <p style={styles.outfitText} className="itemName">{items.name}</p>
                            <p style={styles.outfitText} className="itemLink"><a href={items.url}>Click here to buy this product</a></p>
                        </Col>
                    </Row>
                )}
                <Button onClick={handleAddToCloset}>ADD TO CLOSET</Button>
            </Container>
        </div>
    )
}

export default OutfitPage;