import React, { useContext } from 'react';
import TodoItem from '../TodoItem';
import './todos.scss';
import ThemeContext from '../../../../contexts/ThemeContext';

const Todos = (props) => {
	const themeContext = useContext(ThemeContext);

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
		<div className={`todos ${themeContext.theme}`}>
			{props.children}
			{todoTasks.reverse()}
		</div>
	);
};

export default Todos;
