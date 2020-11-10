import React, { useState } from 'react';
import OutfitPage from "./OutfitPage";
import TopScrollBtn from "../components/TopBtn/TopBtn.js";
import SingleOutfit from "../components/SingleOutfit/SingleOutfit"
import { useAllOutfits } from "../utils/OutfitAPICalls";
import { useParams } from "react-router-dom";
import {Button} from "react-bootstrap";
import API from "../utils/API";



function Outfits(props) {
    const [showOutfits] = useAllOutfits();
    const [showOutfitBottom, setShowOutfitBottom] = useState(false);
    const { outfitid } = useParams();
    const handleChangeOfPage = (outfitid) => {
        if (outfitid) {
            console.log(outfitid);
            setShowOutfitBottom(outfitid);
        }
        else {
            setShowOutfitBottom(false);
        }
    }

    const handleAddToCloset = () => {
        // let outfitid =event.target.getAttribute("data-outfitid").value();
        console.log(outfitid)
        API.updateUserOutfits(outfitid).then(data =>{
            console.log(data);
        })
    }



    return (
        <>
            {(showOutfits.length > 0) ? <SingleOutfit showOutfits={showOutfits} handleChangeOfPage={handleChangeOfPage} /> : null}
            { showOutfitBottom && (
                <OutfitPage outfitid={showOutfitBottom} />
                
            )}
           <Button data-outfitid="5fa6bf29549d4e44809f42f0" onClick={handleAddToCloset}>ADD TO CLOSET</Button>

            <TopScrollBtn />
        </>
    )
}

export default Outfits;