import React, {useContext} from "react";
import API from "../../utils/API";
import UserContext from "../../utils/UserContext";

function LoginForm(props){

    const {email, setEmail, loggedIn, setLoggedIn} = useContext(UserContext);

    const handleSubmit = event => {
        event.preventDefault();
        console.log("submit successful");
        API.userLogin()
        .then( data => {
            console.log(data);
            setEmail("fake@email.com");
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
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default LoginForm;