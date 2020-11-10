import React, { Fragment, useContext } from "react";
import UserContext from "../utils/UserContext";

function Closet() {

    const { loggedIn } = useContext(UserContext);

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