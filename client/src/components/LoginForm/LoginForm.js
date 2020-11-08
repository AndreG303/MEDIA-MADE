import React, { useRef, useContext } from "react";
import API from "../../utils/API";
import UserContext from "../../utils/UserContext";
import { Form, Button } from 'react-bootstrap';
import "./LoginForm.css";

function LoginForm(props) {

    const emailInput = useRef();
    const passwordInput = useRef();
    const { setEmail, setLoggedIn } = useContext(UserContext);

    const handleSubmit = event => {
        event.preventDefault();
        API.userLogin({ email: emailInput.current.value, password: passwordInput.current.value })
            .then(data => {
                setEmail(data.data.email);
                setLoggedIn(true);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (

        <Form className="form" onSubmit={handleSubmit}>
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
            <Form.Group>
                <Form.Text>
                    Or Sign-Up <a href="/signup">HERE</a>
                </Form.Text>
            </Form.Group>
            <Button variant="outline-light" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default LoginForm;