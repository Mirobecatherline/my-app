import React from "react";

function Cartitem({title,description,category,price}) {
  return (
    <tr>
      <td>{title}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{price}</td>
    </tr>
  );
   
}

export default Cartitem;