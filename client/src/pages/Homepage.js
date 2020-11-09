import React from "react";
import SingleOutfit from "../components/SingleOutfit/SingleOutfit"
import { useAllOutfits } from "../utils/OutfitAPICalls";
import Typed from "../components/Typed/Typed"

function Outfit() {

    const [showOutfits] = useAllOutfits();
    console.log(showOutfits);

    return (
        <>
            <Typed />
            { (showOutfits.length > 0) ? <SingleOutfit showOutfits={showOutfits} /> : null}
        </>
    )
}

export default Outfit; 0