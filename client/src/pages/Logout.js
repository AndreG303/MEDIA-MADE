import React, { useEffect, useContext } from "react";
import API from "../utils/API";
import UserContext from "../utils/UserContext";
import Homepage from "../pages/Homepage";

function Logout() {

  const { setLoggedIn, setEmail } = useContext(UserContext);

  useEffect(() => {
    API.userLogout()
      .then((data) => {
        setLoggedIn(false);
        setEmail("");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setLoggedIn, setEmail]);

  return(
    <div>
      <h1 className="logout-text">You Have Been Successfully Logged Out</h1>
      <Homepage />
    </div>
  )


}

export default Logout;
