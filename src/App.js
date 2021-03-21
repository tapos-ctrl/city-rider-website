import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Book from "./components/Home/Book/Book";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PrivateRouter from "./components/PrivateRouter/PrivateRouter";
export const userContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
    error: "",
    success: false,
    haveAnAccount: true
  })
  return (
    <div className="App">
      <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <div>
            <nav>
              <h2 className="logo">City Rider</h2>
              <ul>
                <Link style={{ color: "white" }} to="/home">
                  <li style={{ color: "black" }}>Home</li>
                </Link>
                <li>Destination</li>
                <li>Blog</li>
                <li>Contact</li>
                <Link style={{ color: "orange" }} to="/login">
                  <li className="login">
                    {loggedInUser.isSignedIn ? "" : "Login"}
                  </li>
                </Link>
                <li>
                  {loggedInUser.isSignedIn && loggedInUser.name}
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <PrivateRouter path="/book/:rideBy">
                <Book />
              </PrivateRouter>
              <Route path="/login">
                <Login />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="*">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </userContext.Provider>
    </div>
  );
}

export default App;
