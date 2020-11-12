import React, { Fragment, useContext, useState, useEffect} from "react";
import UserContext from "../utils/UserContext";
import { Container } from "../components/Grid";
import OutfitPage from "../pages/OutfitPage";
import API from "../utils/API";
import "../app.css";


function Closet() {

    const { loggedIn } = useContext(UserContext);
    const [showUserOutfits, setShowUserOutfits] = useState([]);

    useEffect(() => {
      API.getUser()
        .then((userData) => {
          userData.data.outfits.map((outfitid) => {
            API.getOutfit(outfitid).then((outfitdata) => {
              const newOutfits = (showUserOutfits) => [...showUserOutfits, outfitdata.data];
              setShowUserOutfits(newOutfits);
            });
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

    if(!showUserOutfits){
      console.log("not defined yet")
    }
    else{
      console.log(showUserOutfits);
    }

    const deleteOutfit = (outfitid) => {
      let changedOutfits = [...showUserOutfits];
      changedOutfits = changedOutfits.filter(o => o._id !== outfitid);
      setShowUserOutfits(changedOutfits);
    }


    return(
        <div>
        {(() => {
            if (loggedIn) {
              return (
                <Fragment>
                  <h1 className="backText">My Closet</h1>
                <Container>
                {showUserOutfits.map((outfit, index) => <OutfitPage key={"outfitpage-" + index} deleteOutfit={deleteOutfit} showUserOutfits={showUserOutfits} showAddToCloset={false} setShowUserOutfits={setShowUserOutfits} outfitid={outfit._id} />)}
                </Container>
                </Fragment>
              )
            }
            else {
              return (

                <h1 className="backText">Please Login to Access Your Closet</h1>
              )
            }

          })()}
        </div>
    )

}

export default Closet;

// translate session user information 