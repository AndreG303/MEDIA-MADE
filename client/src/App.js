import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NoMatch from "./pages/noMatch";
import NavBar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import Logout from "./pages/logout";
import UserContext from "./utils/UserContext";
import SessionUser from "./utils/SessionUser";
import OutfitPage from "./pages/outfitPage";
import Homepage from "./pages/homepage";
import Outfits from "./pages/outfits";
import AboutUs from "./pages/aboutUs";
import Closet from "./pages/closet";
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
              <Outfits />
            </Route>
            <Route exact path="/outfitsdetail/:outfitid">
              <OutfitPage />
            </Route>
            <Route exact path={["/closet", "/closet/:outfitid"]}>
              {/* user id instead of outfit id  */}
              <Closet />
            </Route>
            <Route exact path="/aboutus">
              <AboutUs />
            </Route>
            <Route>
              {/* this is a 404, IT SHOULD ALWAYS BE AT THE BOTTOM */}
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
