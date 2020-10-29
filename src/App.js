import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Homepage from './pages/homepage';
import Login from './pages/userLogin/login';
import Signup from './pages/userLogin/signup';



function App() {
  return (
    <div className="App">
      <Router>
      <Route exact path = "/"> 
      <Homepage />
      </Route>
      <Route exact path = "/login">
      <Login />
      </Route>
      <Route exact path = "/signup">
      <Signup />
      </Route>
      </Router>
    </div>
  );
}

export default App;
