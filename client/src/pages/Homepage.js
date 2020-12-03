import React from "react";
import SingleOutfit from "../components/SingleOutfit/SingleOutfit";
import { useAllOutfits } from "../utils/OutfitAPICalls";
import Typed from "../components/Typed/Typed";
import TvShow1Jumbotron from "../components/TvShow1Jumbotron/TvShow1Jumbotron";
import SloganJumbotron from "../components/SloganJumbotron/SloganJumbotron";

function Outfit() {
  const [showOutfits] = useAllOutfits();
  console.log(showOutfits);

  return (
    <>
      <Typed />
      <SloganJumbotron />
      <TvShow1Jumbotron />
      {showOutfits.length > 0 ? (
        <SingleOutfit showOutfits={showOutfits} />
      ) : null}
    </>
  );
}

export default Outfit;
