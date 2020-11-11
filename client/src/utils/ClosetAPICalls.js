import { useState, useEffect } from "react";
import API from "./API";

const useUserOutfits = function () {
  const [showUserOutfits, setShowUserOutfits] = useState([]);
  

  useEffect(() => {
    API.getUser()
      .then((userData) => {
        // console.log(userData);
        // console.log(userData.data.outfits);
        // console.log(showUserOutfits);
        userData.data.outfits.map((outfitid) => {
          API.getOutfit(outfitid).then((outfitdata) => {
            setShowUserOutfits((showUserOutfits) => [
              ...showUserOutfits,
              outfitdata.data,
            ]);
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return showUserOutfits;
};

export { useUserOutfits };
