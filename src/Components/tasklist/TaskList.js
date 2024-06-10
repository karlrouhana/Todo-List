import React from 'react';
import { connect } from 'react-redux';
import Task from '../task/Task';
import { deleteTask } from '../../redux/actions';

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <Task key={index} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps, { deleteTask })(TaskList);
