import React, { Fragment, useContext, useState, useEffect } from "react";
import UserContext from "../utils/UserContext";
import { Container } from "../components/Grid";
import OutfitPage from "../components/ShowOutfitDetails/ShowOutfitDetails";
import API from "../utils/API";
import "../app.css";

function UserCloset() {
  const { loggedIn } = useContext(UserContext);
  const [showUserOutfits, setShowUserOutfits] = useState([]);


  // this holds the API call that will get the users' data 
  // grab the array in the user model that holds the oufit ids
  // then map through it 
  // second API call gets the outfit data based on id
  // new outfits uses a spread operator to copy and replace with the users' saved outfits
  // then it will set showUserOutfits to new outfits
  useEffect(() => {
    API.getUser()
      .then((userData) => {
        console.log(userData);
        userData.data.outfits.map((outfitid) => {
          return API.getOutfit(outfitid).then((outfitdata) => {
            const newOutfits = (showUserOutfits) => [
              ...showUserOutfits,
              outfitdata.data,
            ];
            setShowUserOutfits(newOutfits);
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!showUserOutfits) {
    console.log("not defined yet");
  } else {
    console.log(showUserOutfits);
  }

  const deleteOutfit = (outfitid) => {
    let changedOutfits = [...showUserOutfits];
    changedOutfits = changedOutfits.filter((o) => o._id !== outfitid);
    setShowUserOutfits(changedOutfits);
  };

  return (
    <div>
      {(() => {
        if (loggedIn) {
          return (
            <Fragment>
              <h1 className="backText">My Closet</h1>
              <Container>
                {(showUserOutfits.length > 0) && showUserOutfits.map((outfit, index) => (
                  <OutfitPage
                    key={"outfitpage-" + index}
                    deleteOutfit={deleteOutfit}
                    showUserOutfits={showUserOutfits}
                    showAddToCloset={false}
                    setShowUserOutfits={setShowUserOutfits}
                    outfitid={outfit._id}
                  />
                ))
                }
                {(showUserOutfits.length === 0) &&
                  <p className="no-items-text">No items in your closet</p>
                }
              </Container>
            </Fragment>
          );
        } else {
          return (
            <h1 className="backText">Please Login to Access Your Closet</h1>
          );
        }
      })()}
    </div>
  );
}

export default UserCloset;


