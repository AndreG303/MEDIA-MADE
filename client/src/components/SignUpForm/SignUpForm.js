import React, { useRef, useContext } from "react";
import API from "../../utils/API";
import UserContext from "../../utils/UserContext";
import { Form, Button, Col } from 'react-bootstrap';
import "../../app.css";

function SignUpForm(props) {

    const emailInput = useRef();
    const passwordInput = useRef();
    const usernameInput = useRef();
    const { setEmail, setUsername, setLoggedIn } = useContext(UserContext);

    const handleSubmit = event => {
        event.preventDefault();
        API.userSignUp({ username: usernameInput.current.value, email: emailInput.current.value, password: passwordInput.current.value })
            .then(data => {
                setUsername(data.data.username);
                setEmail(data.data.email);
                setLoggedIn(true);
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <Form className="form" onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Row>
                    <Col>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder="First name" />
                    </Col>
                    <Col>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder="Last name" />
                    </Col>
                </Form.Row>
            </Form.Group>
            <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control ref={usernameInput} type="text" placeholder="Enter a username" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control ref={emailInput} type="email" placeholder="Enter email" />
                <Form.Text>
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passwordInput} type="password" placeholder="Password" />
            </Form.Group>
            <Button className="buttons" variant="outline-light" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default SignUpForm;