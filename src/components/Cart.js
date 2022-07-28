import React from "react";

function Cart() {
  return (
    <div>
      <h1>This is my Cart component!</h1>
      <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
       { /*we need to create a row for each transaction*/}
        {/* render a list of <Transaction> components here */}
      </tbody>
    </table>
    </div>
  )
}

export default Cart;