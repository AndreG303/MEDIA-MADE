import React, { useContext } from "react";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import { Redirect } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { Container } from "react-bootstrap";

function SignUp(props) {
  const { loggedIn } = useContext(UserContext);



  return (
    <Container>
      {loggedIn && <Redirect to="/" />}
      <h1 className="form-header">Sign-Up</h1>
      <p className="sign-up-text">
        Create your account. It's free and only takes one minute.
      </p>
      <SignUpForm />
    </Container>
  );
}

export default SignUp;
