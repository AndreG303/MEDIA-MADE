import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Cards from "./pages/cards";


function App() {
  return (
    <div className="App">
      <Router>
      <Route exact path = "/" component = { Cards }/> 
      </Router>
    </div>
  );
}

export default App;
