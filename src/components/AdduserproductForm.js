import React, { useState } from "react";

function AdduserproductForm({onsubmission}) {
  
  const [newdata,setNewdata]=useState({title:"",price:0, category:"",description:"", image:"https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"})//data we expect to get
  function handlesubmit(e) {

    e.preventDefault()
    onsubmission(newdata);
    setNewdata({title:"",price:0, category:"",description:""})
  }  
  
  function handlechange(e) {
    
    setNewdata({...newdata,[e.target.name]:e.target.value} )
  }
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handlesubmit} onChange={handlechange}>
        <div className="inline fields">
          <input type="text" name="title" placeholder="title" value={newdata.title} />
          <input type="text" name="description" placeholder="Description"value={newdata.description} />
          <input type="text" name="category" placeholder="Category:men, women,jewelery,electronics"value={newdata.category} />
          
       
        </div>
        <button className="ui button" type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
}
export default AdduserproductForm;


