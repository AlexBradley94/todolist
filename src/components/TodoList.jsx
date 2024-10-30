import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setList(result.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {list.length === 0 ? (
        <div className="noTodos">No Todos to display</div>
      ) : (
        list.map((todo) => <TodoItem todo={todo} />)
      )}
    </>
  );
};

export default TodoList;
