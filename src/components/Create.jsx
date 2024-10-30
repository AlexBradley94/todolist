import { useState } from "react";
import axios from "axios";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { TextField } from "@mui/material";

function Create() {
  const [task, setTask] = useState();

  const handleAdd = () => {
    axios
      .post("http://localhost:3001/add", { task: task })
      .then((result) => window.location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <div className="inputContainer">
      <TextField
        className="createInput"
        data-testid="createInput"
        type="text"
        placeholder="Enter todo..."
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        className="inputButton"
        data-testid="createButton"
        type="button"
        onClick={handleAdd}
      >
        <AddTaskIcon /> <p>Create</p>
      </button>
    </div>
  );
}

export default Create;
