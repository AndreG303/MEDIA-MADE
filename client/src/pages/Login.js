import React, { useContext } from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import { Redirect } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { Container } from "react-bootstrap";

function Login() {
  const { loggedIn } = useContext(UserContext);

  let styles = {

    container: {
      backgroundColor: "rgba(0,0,255,0)",
    },
  };

  return (
    <Container style={styles.container}>
      {loggedIn && <Redirect to="/" />}
      <h1 className="form-header">Login</h1>
      <LoginForm />
    </Container>
  );
}

export default Login;
