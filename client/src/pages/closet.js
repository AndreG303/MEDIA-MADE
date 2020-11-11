import React, { Fragment, useContext, useState} from "react";
import UserContext from "../utils/UserContext";
import { useUserOutfits } from "../utils/ClosetAPICalls";
import { Container } from "../components/Grid";
import OutfitPage from "../pages/OutfitPage";

function Closet() {

    const { loggedIn } = useContext(UserContext);
    const showUserOutfits = useUserOutfits();

    if(!showUserOutfits){
      console.log("not defined yet")
    }
    else{
      console.log(showUserOutfits);
    }



    return(
        <div>
        {(() => {
            if (loggedIn) {
              return (
                <Fragment>
                  <h1>My Closet</h1>
                <Container>
                {showUserOutfits.map((outfit) => <OutfitPage showAddToCloset={false} outfitid={outfit._id} />)}
                </Container>
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