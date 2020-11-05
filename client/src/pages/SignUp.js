import React, {useContext} from "react";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import {Redirect} from "react-router-dom";
import UserContext from "../utils/UserContext";

function SignUp(props){

    const {loggedIn} = useContext(UserContext);

    let styles = {
        h1: {
            color: "#58a4b0",
            textAlign: "center",
            fontSize: "100px",
            fontFamily: "'Old Standard TT', serif",
            padding: "20px",
            marginTop: "20px"
        },
        p: {
            color: "#d8dbe2",
            textAlign: "center",
            fontFamily: "'Rubik', sans-serif",
            marginBottom: "30px"
        }
    }

    return(
        <div className="container">
            {loggedIn && <Redirect to="/"/>}
            <h1 style={styles.h1}>Sign-Up</h1>
            <p style={styles.p}>Create your account. It's free and only takes one minute.</p>
            <SignUpForm />
        </div>
    )
}

export default SignUp;