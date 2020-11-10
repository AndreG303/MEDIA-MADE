import React, { useEffect, useState } from 'react';
import OutfitPage from "./OutfitPage";
import TopScrollBtn from "../components/TopBtn/TopBtn";
import SingleOutfit from "../components/SingleOutfit/SingleOutfit"
import { useAllOutfits } from "../utils/OutfitAPICalls";
import { useParams } from "react-router-dom";



function Outfits(props) {
    const [showOutfits] = useAllOutfits();
    const [showOutfitBottom, setShowOutfitBottom] = useState(false);
    const { outfitid } = useParams();
    const handleChangeOfPage = (outfitid) => {
        if (outfitid) {
            console.log(outfitid);
            setShowOutfitBottom(outfitid);
        }
        else {
            setShowOutfitBottom(false);
        }
    }

    return (
        <>
            {(showOutfits.length > 0) ? <SingleOutfit showOutfits={showOutfits} handleChangeOfPage={handleChangeOfPage} /> : null}
            { showOutfitBottom && (
                <OutfitPage outfitid={showOutfitBottom} />
            )}

            <TopScrollBtn />

        </>
    )
}

export default Outfits;