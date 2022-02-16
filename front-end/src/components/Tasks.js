import React, { useState } from 'react';
import ButtonAddTask from './ButtonAddTask';

function Tasks() {
  const [task, setTask] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Write your task"
        name="task"
        value={task}
        id="task"
        onChange={({ target }) => setTask(target.value)}
      />
      <ButtonAddTask task={task} />
    </div>
  );
}

export default Tasks;
