import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import NavBar from "./components/NavBar/Navbar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Logout from "./pages/Logout";
import UserContext from "./utils/UserContext";
import SessionUser from "./utils/SessionUser";
import OutfitPage from "./pages/OutfitPage";
import Homepage from "./pages/Homepage"



function App() {
  const [email, setEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  SessionUser(setEmail, setLoggedIn);

  return (
    <Router>
      <h1>{email}</h1>
      <UserContext.Provider value={{email, setEmail, loggedIn, setLoggedIn}}>
      <div>
        <NavBar />
        <Switch>

          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/books/:bookid">
            <Detail />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/logout">
            <Logout />
          </Route>
          <Route>
            <NoMatch />
          </Route>
          <Route exact path="/outfits">
            <OutfitPage />
          </Route>
        </Switch>
      </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
