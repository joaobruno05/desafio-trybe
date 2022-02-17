import React, { useEffect, useState } from 'react';
import taskAPIs from '../service/taskAPIs';

import '../styles/tasks.css';

function Tasks() {
  const [inputTask, setInputTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [disable, setDisable] = useState(true);

  console.log(tasks);

  const handleInputChange = ({ target }) => {
    setInputTask(target.value);

    if (target.value) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  const getAllTasks = async () => {
    const response = await taskAPIs.getAllTasks();
    setTasks(response);
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  // const addTask = () => {

  // }

  return (
    <div>
      <input
        className="input-task"
        type="text"
        placeholder="Write your task"
        name="task"
        value={inputTask}
        id="task"
        onChange={handleInputChange}
      />
      <button
        type="button"
        disabled={disable}
        // onClick={taskAPIs.addTask(inputTask)}
      >
        Add Task
      </button>
      <div>
        { tasks
          ? (
            <ol>
              { tasks.map(({ _id, taskName }) => (
                <li key={_id}>{ Object.values(taskName) }</li>
              )) }
            </ol>
          )
          : <h3>No task found</h3> }
      </div>
    </div>
  );
}

export default Tasks;
