import { NavLink } from "react-router-dom";
import React from "react";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/product"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Product
      </NavLink>
      <NavLink
        to="/cart"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Cart
      </NavLink>
      <NavLink
        to="/feedback"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Feedback
      </NavLink>
    </div>
  );
}

export default NavBar;