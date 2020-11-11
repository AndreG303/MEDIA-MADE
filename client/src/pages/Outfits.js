import React, { useState } from 'react';
import OutfitPage from "./OutfitPage";
import TopBtn from "../components/TopBtn/TopBtn.js";
import SingleOutfit from "../components/SingleOutfit/SingleOutfit"
import { useAllOutfits } from "../utils/OutfitAPICalls";
import { useParams } from "react-router-dom";
import Jumbotron from "../components/Jumbotron2.js/Jumbotron2";



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





    return (
        <>
            <Jumbotron />
            {(showOutfits.length > 0) ? <SingleOutfit showOutfits={showOutfits} handleChangeOfPage={handleChangeOfPage} /> : null}
            { showOutfitBottom && (
      
                <OutfitPage showAddToCloset={true} outfitid={showOutfitBottom} />
                
            )}

        </>
    )
}

export default Outfits;
