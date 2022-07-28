import React, { useEffect, useState } from "react";

import Search from "./Search";

function Product() {
  const [products, setProducts]=useState([])
  useEffect(()=>{
    fetch("http://localhost:8001/store")
    .then(r=>r.json())
    .then(data=>setProducts(data)) 
  },[])
  console.log(products)
  return(
     <div>
     <h1>This is my about component!</h1>
     
     <Search/>
     </div>
  )
}

export default Product;