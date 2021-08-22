import React, { useContext } from 'react';

import './todoItem.scss';

import NotCompletedTaskIcon from '../../../UI/iconComponents/NotCompletedTaskIcon/NotCompletedTaskIcon';
import CompletedTaskIcon from '../../../UI/iconComponents/CompletedTaskIcon/CompletedTaskIcon';
import EditTaskIcon from '../../../UI/iconComponents/EditTaskIcon/EditTaskIcon';
import DeleteOrCloseIcon from '../../../UI/iconComponents/DeleteOrCloseIcon/DeleteOrCloseIcon';
import ThemeContext from '../../../../contexts/Theme/ThemeContext';
import UserTaskContext from '../../../../contexts/UserTask/UserTaskContext';

const TodoItem = ({ task, showPopUp }) => {
	const themeContext = useContext(ThemeContext);
	const userTaskContext = useContext(UserTaskContext);

	const taskStatusIcon = task.completed ? (
		<CompletedTaskIcon />
	) : (
		<NotCompletedTaskIcon />
	);

	return (
		<div className={`todoItem ${themeContext.theme}`}>
			<div className='todoItem-toggleStatus'>
				<button onClick={() => userTaskContext.toggleTaskStatus(task)}>
					{taskStatusIcon}
				</button>
			</div>
			<div className='todoItem-itemTitle'>
				<p
					onClick={() => {
						showPopUp(task);
					}}
				>
					{task.description}
				</p>
			</div>
			<div className='todoItem-editItem'>
				<button
					onClick={() => {
						showPopUp(task);
					}}
				>
					<EditTaskIcon />
				</button>
			</div>
			<div className='todoItem-deleteItem'>
				<button onClick={() => userTaskContext.deleteTask(task)}>
					<DeleteOrCloseIcon />
				</button>
			</div>
		</div>
	);
};

export default TodoItem;
