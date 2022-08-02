import React from "react";
function Comment() {
   
   function handleclicks() {
    alert("Thanks you !")
    
   }
   
    return(
        <div class="ui form">
  <div class="field">
    <label>Plese input your comment</label>
    <textarea></textarea>
  </div>
  <button onclick={handleclicks}>submit</button>
  
</div>
    )
}
export default Comment;