import React from 'react';
import OutfitPage from "../components/OutfitCard/OutfitCard";
import { useAllOutfits } from "../utils/OutfitAPICalls";

function Outfits(){
    const [showOutfits] = useAllOutfits();
    console.log(showOutfits)
    return(
        <>
        <OutfitPage
        />
        </>
    )
}

export default Outfits;