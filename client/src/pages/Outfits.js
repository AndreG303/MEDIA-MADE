import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import OutfitPage from "../components/OutfitCard/OutfitCard";
import { useAllOutfits } from "../utils/OutfitAPICalls";
import SingleOutfit from "../components/SingleOutfit/SingleOutfit";
import TopScrollBtn from "../components/TopBtn/TopBtn";

function Outfits(props){


    return(
        <>
        <OutfitPage/>
        <SingleOutfit />
        <TopScrollBtn />
        </>
    )
}

export default Outfits;