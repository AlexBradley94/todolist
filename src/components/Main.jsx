import React from "react";
import "../App.css";
import Create from "./Create";
import TodoList from "./TodoList";

function Main() {
  return (
    <>
      <h2>Todo List</h2>
      <Create />
      <TodoList />
    </>
  );
}

export default Main;
