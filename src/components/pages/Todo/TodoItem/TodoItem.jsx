import React, { useContext } from 'react';

import './todoItem.scss';

import NotCompletedTaskIcon from '../../../UI/iconComponents/NotCompletedTaskIcon/NotCompletedTaskIcon';
import CompletedTaskIcon from '../../../UI/iconComponents/CompletedTaskIcon/CompletedTaskIcon';
import EditTaskIcon from '../../../UI/iconComponents/EditTaskIcon/EditTaskIcon';
import DeleteOrCloseIcon from '../../../UI/iconComponents/DeleteOrCloseIcon/DeleteOrCloseIcon';
import ThemeContext from '../../../../contexts/ThemeContext';

const TodoItem = (props) => {
	const themeContext = useContext(ThemeContext);

	const task = props.task;

	const taskStatusIcon = task.completed ? (
		<CompletedTaskIcon />
	) : (
		<NotCompletedTaskIcon />
	);

	return (
		<div className={`todoItem ${themeContext.theme}`}>
			<div className='todoItem-toggleStatus'>
				<button onClick={() => props.toggleTaskStatus(task.id)}>
					{taskStatusIcon}
				</button>
			</div>
			<div className='todoItem-itemTitle'>
				<p
					onClick={() => {
						props.showPopUp(task);
					}}
				>
					{task.title}
				</p>
			</div>
			<div className='todoItem-editItem'>
				<button
					onClick={() => {
						props.showPopUp(task);
					}}
				>
					<EditTaskIcon />
				</button>
			</div>
			<div className='todoItem-deleteItem'>
				<button onClick={() => props.deleteTask(task.id)}>
					<DeleteOrCloseIcon />
				</button>
			</div>
		</div>
	);
};

export default TodoItem;
