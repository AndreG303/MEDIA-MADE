import React from "react";
import SingleOutfit from "../components/SingleOutfit/SingleOutfit";
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
        <SingleOutfit showOutfits={showOutfits} />
      ) : null}
    </>
  );
}

export default Outfit;
