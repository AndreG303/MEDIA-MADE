import React, { useContext } from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import { Redirect } from "react-router-dom";
import UserContext from "../utils/UserContext";

function Login() {

    const { loggedIn } = useContext(UserContext);

    let styles = {
        h1: {
            color: "#58a4b0",
            textAlign: "center",
            fontSize: "100px",
            fontFamily: "'Old Standard TT', serif",
            padding: "20px",
            marginTop: "20px"
        }
    }

    return (
        <div className="container">
            {loggedIn && <Redirect to="/" />}
            <h1 style={styles.h1}>Login</h1>
            <LoginForm />
        </div>
    )
}

export default Login;