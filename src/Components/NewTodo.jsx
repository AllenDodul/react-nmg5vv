import React from "react";

const NewTodo = () =>{
  return(
    <form>
      <div>
        <input 
          type="text"
          placeholder="Todo title"
          name="title"
        />
      </div>
      <div>
        <textarea name="desc" placeholder="Todo desc"></textarea>
      </div>
      <div>
        <button type="submit">Add Todo</button>
      </div>
    </form>
  )
}
export default NewTodo;