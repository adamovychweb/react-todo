import React from 'react';

import './todoItem.scss';

const TodoItem = (props) => {
	const task = props.task;

	return (
		<div className='todoItem'>
			<button onClick={() => props.toggleTaskStatus(task.id)}>Toggle</button>
			<p
				onClick={() => {
					props.showPopUp(task);
				}}
			>
				{task.title}
			</p>
			<button onClick={() => props.deleteTask(task.id)}>Delete</button>
		</div>
	);
};

export default TodoItem;
