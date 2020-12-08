import React from "react";
import EmilyOutfitCard from "../components/TvShowOutfitCards/EmilyOutfitCard";
import QueensOutfitCard from "../components/TvShowOutfitCards/QueensOutfitCard";
import { useAllOutfits } from "../utils/OutfitAPICalls";
import Typed from "../components/Typed/Typed";
import SloganJumbotron from "../components/SloganJumbotron/SloganJumbotron";

function Outfit() {
  const [showOutfits] = useAllOutfits();
  console.log(showOutfits);

  return (
    <>
      <Typed />
      <SloganJumbotron />
      {showOutfits.length > 0 ? (
        <EmilyOutfitCard showOutfits={showOutfits} />
      ) : null}
      {showOutfits.length > 0 ? (
        <QueensOutfitCard showOutfits={showOutfits} />
      ) : null}
    </>
  );
}

export default Outfit;
