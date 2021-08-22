import React, { useContext } from 'react';
import TodoItem from '../TodoItem';
import './todos.scss';
import ThemeContext from '../../../../contexts/Theme/ThemeContext';

const Todos = ({ todosArr, showPopUp, children }) => {
	const themeContext = useContext(ThemeContext);

	const todoTasks = todosArr.map((task) => (
		<TodoItem task={task} key={task._id} showPopUp={showPopUp} />
	));

	return (
		<div className={`todos ${themeContext.theme}`}>
			{children}
			{todoTasks.reverse()}
		</div>
	);
};

export default Todos;
