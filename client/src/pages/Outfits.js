import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import OutfitPage from "../components/OutfitCard/OutfitCard";
import { useAllOutfits } from "../utils/OutfitAPICalls";
import API from "../utils/API";
import TopScrollBtn from "../components/TopBtn/TopBtn";

function Outfits(props){

    return(
        <>
        <OutfitPage/>
        <TopScrollBtn />
        </>
    )
}

export default Outfits;