import React from "react";
import SingleOutfit from "../components/SingleOutfit/SingleOutfit"
import { useAllOutfits } from "../utils/OutfitAPICalls";
import Typed from "../components/Typed/Typed";
import Jumbotron from "../components/Jumbotron2.js/Jumbotron2";
import Jumbotron3 from "../components/Jumbotron3.js/Jumbotron3";

function Outfit() {

    const [showOutfits] = useAllOutfits();
    console.log(showOutfits);

    return (
        <>
            <Typed />
            <Jumbotron3 />
            <Jumbotron />
            { (showOutfits.length > 0) ? <SingleOutfit showOutfits={showOutfits} /> : null}
            
        </>
    )
}

export default Outfit; 