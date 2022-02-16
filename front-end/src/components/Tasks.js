import React, { useState } from 'react';
import '../styles/tasks.css';
// import ButtonAddTask from './ButtonAddTask';

function Tasks() {
  const [task, setTask] = useState('');
  const [disable, setDisable] = useState(true);

  const handleInputChange = ({ target }) => {
    setTask(target.value);

    if (target.value) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  return (
    <div>
      <input
        className="input-task"
        type="text"
        placeholder="Write your task"
        name="task"
        value={task}
        id="task"
        onChange={handleInputChange}
      />
      {/* <ButtonAddTask task={task} /> */}
      <button
        type="button"
        disabled={disable}
      >
        Add Task
      </button>
    </div>
  );
}

export default Tasks;
