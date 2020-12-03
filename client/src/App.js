import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Logout from "./pages/Logout";
import UserContext from "./utils/UserContext";
import SessionUser from "./utils/SessionUser";
import Homepage from "./pages/Homepage";
import OutfitDetailsPage from "./pages/OutfitDetailsPage";
import AboutUs from "./pages/AboutUs";
import UserCloset from "./pages/UserCloset";
import "./app.css";

function App() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  SessionUser(setEmail, setLoggedIn);

  return (
    <Router>
      <UserContext.Provider
        value={{
          email,
          setEmail,
          loggedIn,
          setLoggedIn,
          username,
          setUsername
        }}
      >
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Homepage />
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
            <Route exact path={["/outfits", "/outfits/:outfitid"]}>
              <OutfitDetailsPage />
            </Route>
            <Route exact path={["/closet", "/closet/:outfitid"]}>
              <UserCloset />
            </Route>
            <Route exact path="/aboutus">
              <AboutUs />
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
          <Footer />
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
