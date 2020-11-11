import React, { Fragment, useContext, useEffect } from "react";
import UserContext from "../utils/UserContext";
import API from "../utils/API";
import { useUserOutfits } from "../utils/ClosetAPICalls";

function Closet() {

    const { loggedIn } = useContext(UserContext);
    const showUserOutfits = useUserOutfits();
    if(!showUserOutfits){
      console.log("not defined yet")
    }
    else{
      console.log(showUserOutfits);
    }
    
    // showUserOutfits.map(outfitid => {API.getOutfit(outfitid).then((outfitdata) => {console.log(outfitdata)})});
    

    // useEffect(() => {
    //   API.getUser()
    //   .then( async userData => {
    //     console.log(userData);
    //     console.log(Object.prototype.toString.call(userData.data.outfits));
    //   //   const closetOutfits = (userData.data.outfits);
    //   //   // let closetOutfits = [];
    //   //   // closetOutfits = userData.data.outfits;
    //   //   const outfitData = await API.getOutfit(closetOutfits);
    //   //   console.log(outfitData);
    //   //   // closetOutfits = userData.data.outfits;
    //   })
    // }, [])
    


    return(
        <div>
        {(() => {
            if (loggedIn) {
              return (
                <Fragment>
                  <h1>My Closet</h1>
                {/* {showUserOutfits.map((outfit) => console.log(outfit))} */}
                </Fragment>
              )
            }
            else {
              return (
                <h1>Please Login to Access Your Closet</h1>
              )
            }

          })()}
        </div>
    )

}

export default Closet;

// translate session user information 