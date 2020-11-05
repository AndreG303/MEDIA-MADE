import {useState, useEffect} from 'react';
import API from "./API";
const useAllOutfits = function() {
    const [showOutfits, setshowOutfits] = useState([]);
    // GetAllOutfits(setshowOutfits);

    useEffect ( () => {
        API.getOutfits()
        .then ( outfits => {
            console.log(outfits);
            setshowOutfits(outfits.data);
        })
        .catch( err => {
            console.log(err);
        });

        // // FAKE data
        // setshowOutfits([
        //     {
        //         oufitImage: "test/image",
        //         items: [ {
        //             image: "some/url/string",
        //             name: "",
        //             url: "product/url",
        //             avail: true
        //         },
        //         {
        //             image: "some/url/string",
        //             name: "",
        //             url: "product/url",
        //             avail: true
        //         }
        //         ]
        //     },
        //     {
        //         oufitImage: "test/image",
        //         items: [ {
        //             image: "some/url/string",
        //             name: "",
        //             url: "product/url",
        //             avail: true
        //         },
        //         {
        //             image: "some/url/string",
        //             name: "",
        //             url: "product/url",
        //             avail: true
        //         }
        //         ]
        //     }
        // ])
    }, []);

    return [showOutfits];
}
export {useAllOutfits};