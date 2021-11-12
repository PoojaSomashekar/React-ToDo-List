import React from 'react';

import classes from './TaskList.module.css';

const TaskList = (props) => {
  let taskLists;

  const onDeleteList = (event) => {
    let copyList = [...props.taskListItem];
    copyList.forEach((list, index) => {
      if (index === +event.target.id) {
        copyList.splice(index, 1);
      }
    });
    props.alteredList(copyList);
  }
  if (props.taskListItem.length === 0) {
    taskLists = <p>No Task List.</p>
  } else {
    taskLists = props.taskListItem.map((list, index) => {
      return (
        <ul key={index} className={classes.list}>
          <li>{list} <button className={classes.delBtn} id={index} onClick={onDeleteList}>X</button> </li>
        </ul>
      );
    })
  }
  return (
    <div className={classes.taskDiv}>
      {taskLists}
    </div>
  );
};

export default TaskList;