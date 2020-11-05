import React, {useState, useEffect} from "react";
//import {Nav, NavDropdown} from 'react-bootstrap';
//import UserContext from "../../utils/UserContext";
// import GetAllOutfits from "../utils/OutfitAPICalls";
import SingleOutfit from "../components/SingleOutfit/SingleOutfit"
import { useAllOutfits } from "../utils/OutfitAPICalls";
//import outfit from "./Outfitpage";

function Outfit() {
    const [showOutfits] = useAllOutfits();
    console.log(showOutfits);
    return (
        <>
        {/* {showOutfits.map( outfit => <SingleOutfit outfit={outfit} />) } */}
        { (showOutfits.length > 0) ? <SingleOutfit showOutfits={showOutfits}/> : null}
        </>
    )
}

export default Outfit; 