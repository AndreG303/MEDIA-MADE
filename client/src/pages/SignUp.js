import React, {useContext} from "react";
import SignUpForm from "../components/SignUpForm";
import {Redirect} from "react-router-dom";
import UserContext from "../utils/UserContext";

function SignUp(props){

    const {loggedIn} = useContext(UserContext);

    return(
        <div className="container">
            {loggedIn && <Redirect to="/"/>}
            <h1>Sign-Up</h1>
            <SignUpForm />
        </div>
    )
}

export default SignUp;