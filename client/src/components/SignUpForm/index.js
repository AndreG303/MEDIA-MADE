import React, {useRef, useContext} from "react";
import API from "../../utils/API";
import UserContext from "../../utils/UserContext";

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
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input ref={emailInput} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input ref={passwordInput} type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default SignUpForm;