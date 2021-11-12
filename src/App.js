import React, { useState } from 'react';

import './App.css';
import Card from './components/Card';
import NewTask from './components/NewTask';
import TaskList from './components/TaskList';

function App() {
  const [taskList, setTaskList] = useState([]);

  const addNewTask = (newTask) => {
    setTaskList([...taskList, newTask]);
  };
  const modifiedList = (tasks) => {
    setTaskList(tasks);
  };

  return (
    <Card className='App'>
      <h2>To-Do Task List</h2>
      <NewTask newTaskFn={addNewTask} />
      <TaskList taskListItem={taskList} alteredList={modifiedList} />
    </Card>
  );
}

export default App;
