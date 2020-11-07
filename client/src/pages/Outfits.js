import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import OutfitPage from "../components/OutfitCard/OutfitCard";
import { useAllOutfits } from "../utils/OutfitAPICalls";
import API from "../utils/API";

function Outfits(props){
    const [showOutfits, setShowOutfits] = useAllOutfits();
   
  

    const {outfitsid} = useParams();

    useEffect(() => {
        API.getOutfit(outfitsid)
        .then(res => setShowOutfits(res.data))   
        .catch(err => console.log(err));
    }, [])

    return(
        <>
        <OutfitPage/>
        </>
    )
}

export default Outfits;