import Cartitem from "./Cartitem";
import React from "react";

function Cart() {
  return (
    <div>
      <h1>This is my Cart component!</h1>
      <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Title</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Price</h3>
          </th>
        </tr>
       <Cartitem/>
        {/* render a list of <Transaction> components here */}
      </tbody>
    </table>
    </div>
  )
}

export default Cart;