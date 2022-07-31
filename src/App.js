import { Route, Switch } from "react-router-dom";

import Comment from "./components/Comment";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Product from "./components/Product";
import React from "react";

function App() {
  return (
    <div>
      <br/>
      <NavBar />
      <Switch>
        <Route exact path="/comment">
          <Comment/>
        </Route>
        <Route exact path="/product">
          <Product/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;