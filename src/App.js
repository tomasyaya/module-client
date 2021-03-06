import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Home } from "./Views/Home/Home"


function App() {
  return (
    <Switch>
      <Route exact path="/">
       <Home/>
       </Route>
    </Switch>
  );
}

export default App;
