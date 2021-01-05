import React, { useState } from "react";
import firebase from "../firebase";

function Forms() {
  const [title, setTitle] = useState('')


  function handleChange(event) {
    setTitle(event.target.value)
  }

  function createTodo() {
    const todoRef = firebase.database().ref("Todo")
    const todo = {
      title,
      complete: false,
    }

    todoRef.push(todo)
  }

  return (
    <div>
      <h1>Todo List with Firebase!</h1>
      <input type="text" onChange={handleChange} value={title} />
      <button onClick={createTodo}>Add</button>
    </div>
  );
}

export default Forms;
