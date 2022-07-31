import React,{ useEffect, useState } from "react";

import AdduserproductForm from "./AdduserproductForm";
//import Cart from "./Cart";
import Productitem from "./Productitem";

function Product() {
  const [products, setProducts]=useState([]);
  
  useEffect(()=>{
    fetch("http://localhost:8001/store")
    .then(r=>r.json())
    .then(data=>setProducts(data)) 
  },[])
  console.log(products)
 
  function onsubmission(trans) {
  
    fetch("http://localhost:8001/store",
        {method:"POST",
          headers:{"Content-Type": "application/json"},
          body:JSON.stringify(trans),
  
      })
      .then(r=>r.json())//data is just the trans data we want to add
      .then(data=>setProducts(currentproduct=>[...currentproduct,data]))//unupdate kwa server ndio inaonekana kwa screen
      .catch(error=>alert(error))
  } 
  
   
   const [searchInput, setSearchInput] = useState("");
  return(
     <div>
     <h1>This is my product component!</h1>
    
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search for item by category" 
        onChange={(e)=>setSearchInput(e.target.value)}
        
      />
      <i className="circular search link icon"></i>
    </div>
    <AdduserproductForm onsubmission={onsubmission}/>
     <div className="box">
     {products.filter((val)=>{
      if (searchInput ==="") {
        return val
      } 
      else if (val.category.toLowerCase().includes(searchInput.toLowerCase())){
        return val
      }
      return false;
    }).map((pro)=>{
        
      return (<Productitem image={pro.image}
        key={pro.id}
        title={pro.title}
        category={pro.category}
        description={pro.description}
        items={pro}
       
      
        />)
        })}
  </div>
     
     </div>
     
  )
}

export default Product;