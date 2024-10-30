import React from "react";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoItem = ({ todo }) => {
  const handleEdit = (id) => {
    axios
      .put("http://localhost:3001/update/" + id)
      .then((result) => window.location.reload())
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/delete/" + id)
      .then((result) => window.location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <div className="todoListItem" onClick={() => handleEdit(todo._id)}>
      {todo.done ? (
        <p className="strikedListItem">{todo.task}</p>
      ) : (
        <p>{todo.task}</p>
      )}

      <div className="deleteButton" onClick={() => handleDelete(todo._id)}>
        <DeleteIcon />
      </div>
    </div>
  );
};

export default TodoItem;
