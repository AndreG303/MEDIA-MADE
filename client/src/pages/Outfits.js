import React, { useState } from "react";
import OutfitPage from "./outfitPage";
import SingleOutfit from "../components/SingleOutfit/SingleOutfit";
import { useAllOutfits } from "../utils/OutfitAPICalls";
import Jumbotron from "../components/Jumbotron2.js/Jumbotron2";

function Outfits(props) {
  const [showOutfits] = useAllOutfits();
  const [showOutfitBottom, setShowOutfitBottom] = useState(false);
  const handleChangeOfPage = (outfitid) => {
    if (outfitid) {
      console.log(outfitid);
      setShowOutfitBottom(outfitid);
    } else {
      setShowOutfitBottom(false);
    }
  };

  return (
    <>
      <Jumbotron />
      {showOutfits.length > 0 ? (
        <SingleOutfit
          showOutfits={showOutfits}
          handleChangeOfPage={handleChangeOfPage}
        />
      ) : null}
      {showOutfitBottom && (
        <OutfitPage showAddToCloset={true} outfitid={showOutfitBottom} />
      )}
    </>
  );
}

export default Outfits;
