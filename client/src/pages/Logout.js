import React, { useEffect, useContext } from "react";
import API from "../utils/API";
import UserContext from "../utils/UserContext";

function Logout() {

    const { setLoggedIn, setEmail } = useContext(UserContext);

    useEffect(() => {
        API.userLogout()
            .then(data => {
                setLoggedIn(false);
                setEmail("");
            })
            .catch(err => {
                console.log(err);
            });
    }, [setLoggedIn, setEmail])

    return (
        <div>
            <h1 className="backText">Logged Out</h1>
            <a href="./pages/Homepage"><h2>Go home</h2></a>
        </div>
    )
}

export default Logout;