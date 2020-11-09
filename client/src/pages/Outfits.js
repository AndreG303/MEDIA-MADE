import React, { useEffect, useState } from 'react';
import OutfitPage from "./OutfitPage";
// import TopScrollBtn from "../components/TopBtn/TopBtn";
import SingleOutfit from "../components/SingleOutfit/SingleOutfit"
import { useAllOutfits } from "../utils/OutfitAPICalls";
import { BrowserRouter as Router, Route } from "react-router-dom";

function Outfits(props) {
    const [showOutfits] = useAllOutfits();

    return (
        <>
            <Router>
                {(showOutfits.length > 0) ? <SingleOutfit showOutfits={showOutfits} /> : null}
                <Route path="/outfits/:id" component={OutfitPage} />
                {/* <TopScrollBtn /> */}
            </Router>
        </>
    )
}

export default Outfits;