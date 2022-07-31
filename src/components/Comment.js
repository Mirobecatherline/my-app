import React from "react";
function Comment(params) {
   
   function handlesubmit(e) {
    e.preventDefault();
   }
   
    return(
        <div class="ui form">
  <div class="field">
    <label>Plese input your comment</label>
    <textarea></textarea>
  </div>
  <button onSubmit={handlesubmit}>submit</button>
  
</div>
    )
}
export default Comment;