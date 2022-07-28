import { Route, Routes } from "react-router-dom";

import Cart from "./components/Cart";
import Feedback from "./components/Feedback";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Product from "./components/Product";
import React from "react";

function App() {
  return (
    <div>
      <h1>hello</h1>
      <NavBar />
      <Routes>
        <Route exact path="/feedback">
          <Feedback/>
        </Route>
        <Route exact path="/product">
          <Product/>
        </Route>
        <Route exact path="/cart">
          <Cart/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Routes> 
    </div>
  );
}

export default App;