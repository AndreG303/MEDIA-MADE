import React from "react";
import SingleOutfit from "../components/SingleOutfit/SingleOutfit"
import { useAllOutfits } from "../utils/OutfitAPICalls";
import Typed from "../components/Typed/Typed";
import Jumbotron from "../components/Jumbotron2.js/Jumbotron2";

function Outfit() {

    const [showOutfits] = useAllOutfits();
    console.log(showOutfits);

    return (
        <>
            <Typed />
            <Jumbotron />
            { (showOutfits.length > 0) ? <SingleOutfit showOutfits={showOutfits} /> : null}
            
        </>
    )
}

export default Outfit; 