import {useEffect} from "react";
import API from "./API";

const SessionUser = function(setEmail, setLoggedIn){
    useEffect( () => {
        // this will run on component mount of App (used in App)
        // it will run on a refresh
        API.getUser()
        .then ( user => {
            if(user.data.hasOwnProperty('email')){
                setEmail(user.data.email);
                setLoggedIn(true);
            }
        })
        .catch( err => {
            console.log(err);
        })
    }, [setEmail, setLoggedIn]);
}

export default SessionUser;