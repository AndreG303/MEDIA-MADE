import { useState, useEffect } from 'react';
import API from "./API";
const useAllOutfits = function () {

    const [showOutfits, setshowOutfits] = useState([]);

    useEffect(() => {
        API.getOutfits()
            .then(outfits => {
                console.log(outfits);
                setshowOutfits(outfits.data);
            })
            .catch(err => {
                console.log(err);
            });


    }, []);

    return [showOutfits];
}
export { useAllOutfits };