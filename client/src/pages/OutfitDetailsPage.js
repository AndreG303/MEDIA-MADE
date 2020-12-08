import React, { useState } from "react";
import ShowOutfitDetails from "../components/ShowOutfitDetails/ShowOutfitDetails";
import EmilyOutfitCard from "../components/TvShowOutfitCards/EmilyOutfitCard";
import QueensOutfitCard from "../components/TvShowOutfitCards/QueensOutfitCard";
import { useAllOutfits } from "../utils/OutfitAPICalls";


function Outfits(props) {
  const [showOutfits] = useAllOutfits();
  const [showEmilyOutfitBottom, setEmilyShowOutfitBottom] = useState(false);
  const [showQueensOutfitBottom, setQueensShowOutfitBottom] = useState(false);

  const handleEmilyChangeOfPage = (outfitid) => {
    if (outfitid) {
      console.log(outfitid);
      setEmilyShowOutfitBottom(outfitid);
    } else {
      setEmilyShowOutfitBottom(false);
    }
  };

  const handleQueensChangeOfPage = (outfitid) => {
    if (outfitid) {
      console.log(outfitid);
      setQueensShowOutfitBottom(outfitid);
    } else {
      setQueensShowOutfitBottom(false);
    }
  };

  return (
    <>
      {showOutfits.length > 0 ? (
        <EmilyOutfitCard
          showOutfits={showOutfits}
          handleEmilyChangeOfPage={handleEmilyChangeOfPage}
        />
      ) : null}
      {showEmilyOutfitBottom && (
        <ShowOutfitDetails showAddToCloset={true} outfitid={showEmilyOutfitBottom} />
      )}
      {showOutfits.length > 0 ? (
        <QueensOutfitCard
          showOutfits={showOutfits}
          handleQueensChangeOfPage={handleQueensChangeOfPage}
        />
      ) : null}
      {showQueensOutfitBottom && (
        <ShowOutfitDetails showAddToCloset={true} outfitid={showQueensOutfitBottom} />
      )}
    </>
  );
}

export default Outfits;
