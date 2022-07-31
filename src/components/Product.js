import React,{ useEffect, useState } from "react";

import Cartitem from "./Cartitem";
import Productitem from "./Productitem";
import Search from "./Search";

function Product() {
  const [products, setProducts]=useState([]);
  
  useEffect(()=>{
    fetch("http://localhost:8001/store")
    .then(r=>r.json())
    .then(data=>setProducts(data)) 
  },[])
  console.log(products)
   const [addcart,setaddcart]=useState([])
  
   function handleclick(items){
    
    //addcart.push(items);
    setaddcart([...addcart,items]);
   
    //console.log(addcart);
    addcart.map((pro)=>{
      return ( 
        //console.log(pro)
        <Cartitem  key={pro.id}
        title={pro.title}
        category={pro.category}
        description={pro.description}
        
       />)
    })
    
    
   }
  return(
     <div>
     <h1>This is my product component!</h1>
     <Search/>
     <div className="box">
     {products.map((pro)=>{
        
      return (<Productitem image={pro.image}
        key={pro.id}
        title={pro.title}
        category={pro.category}
        description={pro.description}
        items={pro}
        handleclick={handleclick}
      
        />)
        })}
  </div>
     
     </div>
     
  )
}

export default Product;