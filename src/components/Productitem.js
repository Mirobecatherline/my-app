//import Cartitem from "./Cartitem";
import React from "react";
//import { useState } from "react";

function Productitem({image,title,category,description,items,handleclick}) {
    
        return (
        <div className="ui card" >
                <div className="image">
                    <img src={image} alt="product_image"/>
                </div>
                <div className="content">
            <h3 className="header">{title}</h3>
            <div className="meta">
            <span className="date">{category}</span>
            </div>
            <div className="description">
            {description}
            </div>
            <br/>
            <button className="positive ui button"  onClick={()=>handleclick(items)}>Add to cart</button>
            </div>
        </div>
                );
}
export default Productitem;