import React, { Fragment, useContext, useEffect } from "react";
import UserContext from "../utils/UserContext";
import API from "../utils/API";

function Closet() {

    const { loggedIn } = useContext(UserContext);

    const userData = API.getUser().then( (userData) => {return userData});
    console.log(userData.data);

    useEffect(() => {
      API.getUser()
      .then( async userData => {
        console.log(userData);
        console.log(Object.prototype.toString.call(userData.data.outfits));
      //   const closetOutfits = (userData.data.outfits);
      //   // let closetOutfits = [];
      //   // closetOutfits = userData.data.outfits;
      //   const outfitData = await API.getOutfit(closetOutfits);
      //   console.log(outfitData);
      //   // closetOutfits = userData.data.outfits;
      })
    }, [])
    


    return(
        <div>
        {(() => {
            if (loggedIn) {
              return (
                <Fragment>
                  <h1>My Closet</h1>
                  
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