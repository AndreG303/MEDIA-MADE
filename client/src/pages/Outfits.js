import React from 'react';
import OutfitPage from "../components/OutfitCard/OutfitCard";
import { useAllOutfits } from "../utils/OutfitAPICalls";

function Outfits(){
    const [showOutfits] = useAllOutfits();
    return(
        <>
        { (showOutfits.length > 0) ? <OutfitPage showOutfits={showOutfits}/> : null}
        </>
    )
}

export default Outfits;