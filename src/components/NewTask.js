import React, { useState } from 'react';

import classes from './NewTask.module.css';

const NewTask = (props) => {
  const [newTasks, setNewTasks] = useState([]);
  const [showAddBtn, setShowAddBtn] = useState(true);

  const onAddNewTaskHandler = (event) => {
    setNewTasks([event.target.value]);
    if (event.target.value === '') {
      setShowAddBtn(true);
    } else {
      setShowAddBtn(false);
    }
  };

  const onSubmitNewTask = (event) => {
    event.preventDefault();
    props.newTaskFn(newTasks);
    setNewTasks([]);
  }
  return (
    <div className={classes.newTaskDiv}>
      <form>
        <input type='text' className={classes.input} id='addTask' value={newTasks} placeholder='enter task here' onChange={onAddNewTaskHandler} />
        <button type='button' disabled={showAddBtn} onClick={onSubmitNewTask}>Add Task</button>
      </form>
    </div>
  );
};

export default NewTask;