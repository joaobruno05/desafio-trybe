import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ButtonAddTask({ task }) {
  const [disabled, setDisabled] = useState(true);

  if (task) setDisabled(false);

  return (
    <div>
      <button
        type="button"
        disabled={disabled}
      >
        Add Task
      </button>
    </div>
  );
}

export default ButtonAddTask;
