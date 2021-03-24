import React from "react";
import { Switch, Link } from "react-router-dom";
import { PrivateRoute, AnonRoute } from "./components/Routes";
import { getUser } from "./service/auth.service";
import Login from "./components/Login/Login";
import "./App.css";

function App() {
  const handleGetUser = async () => {
    const user = await getUser();
    console.log("USER", user);
  };
  return (
    <div className="App">
      <header className="App-header">
        App
        <Link to="/login">Login</Link>
        <Link to="/private">Private</Link>
        <Switch>
          <PrivateRoute exact path="/private">
            <div>
              <p>Get User</p>
              <button onClick={handleGetUser}>get</button>
            </div>
          </PrivateRoute>
          <AnonRoute exact path="/login">
            <Login />
          </AnonRoute>
        </Switch>
      </header>
    </div>
  );
}

export default App;
