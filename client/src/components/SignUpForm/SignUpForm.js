import React, {useRef, useContext} from "react";
import API from "../../utils/API";
import UserContext from "../../utils/UserContext";
import {Form, Button} from 'react-bootstrap';

function SignUpForm(props){

    const emailInput = useRef();
    const passwordInput = useRef();
    const { setEmail, setLoggedIn} = useContext(UserContext);

    const handleSubmit = event => {
        event.preventDefault();
        console.log("submit successful");
        console.log({ email: emailInput.current.value, password: passwordInput.current.value});
        API.userSignUp({ email: emailInput.current.value, password: passwordInput.current.value})
        .then( data => {
            console.log(data);
            setEmail(data.data.email);
            setLoggedIn(true); 
        })
        .catch(err => {
            console.log(err)
        })
    }

    return( 
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control ref={emailInput} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passwordInput} type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )   
}

export default SignUpForm;