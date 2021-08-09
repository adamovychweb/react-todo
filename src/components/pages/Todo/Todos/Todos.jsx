import React from 'react';
import TodoItem from '../TodoItem';
import './todos.scss';

const Todos = (props) => {
	const todos = props.todosArr;

	const todoTasks = todos.map((task) => (
		<TodoItem
			task={task}
			key={`task${task.id}`}
			showPopUp={props.showPopUp}
			toggleTaskStatus={props.toggleTaskStatus}
			deleteTask={props.deleteTask}
		/>
	));

	return (
		<div className='todos'>
			{props.children}
			{todoTasks.reverse()}
		</div>
	);
};

export default Todos;
