import React, { useContext, useState, useEffect } from 'react';

import ThemeContext from '../../contexts/ThemeContext';

import Header from '../../components/Header/Header';
import Todos from '../../components/pages/Todo/Todos';
import TodoPopUp from '../../components/pages/Todo/TodoPopUp';

import './todo.scss';

const Todo = () => {
	const themeContext = useContext(ThemeContext);

	const oldTodos = JSON.parse(localStorage.getItem('Todos'));
	const [todos, setTodos] = useState(oldTodos || []);

	const addTask = (title, description) => {
		const newItem = {
			id: todos.length,
			title: title,
			description: description,
			completed: false,
		};
		setTodos([...todos, newItem]);
		setTodoPopUP('hidden');
	};

	const saveEditTask = (title, description, id) => {
		setTodos([
			...todos.map((task) =>
				task.id === id
					? { ...task, title: title, description: description }
					: { ...task }
			),
		]);
		setTodoPopUP('hidden');
	};

	const toggleTaskStatus = (id) => {
		setTodos([
			...todos.map((task) =>
				task.id === id ? { ...task, completed: !task.completed } : { ...task }
			),
		]);
	};

	const deleteTask = (id) => {
		setTodos([...todos.filter((task) => task.id !== id)]);
	};

	useEffect(() => {
		localStorage.setItem('Todos', JSON.stringify(todos));
		console.log('Effect');
	}, [todos]);

	//!CONSOLE LOG
	console.log(todos);

	const activeTodos = todos.filter((task) => task.completed === false);
	const completedTodos = todos.filter((task) => task.completed === true);

	const [todoPopUP, setTodoPopUP] = useState('hidden');

	const [taskToEdit, setTaskToEdit] = useState(false);

	const showPopUp = (task) => {
		setTodoPopUP('shown');
		setTaskToEdit(task);
	};

	const hidePopUp = () => {
		setTodoPopUP('hidden');
	};

	return (
		<div className={`wrapper ${themeContext.theme}`}>
			<Header />
			<main className='container'>
				<div className='todo-content'>
					<Todos
						todosArr={activeTodos}
						showPopUp={showPopUp}
						toggleTaskStatus={toggleTaskStatus}
						deleteTask={deleteTask}
					>
						<h2>Заплановані</h2>
						<p>Залишилось: {activeTodos.length}</p>
						<button onClick={() => showPopUp(false)}>
							Добавте нове завдання..
						</button>
					</Todos>

					<Todos
						todosArr={completedTodos}
						showPopUp={showPopUp}
						toggleTaskStatus={toggleTaskStatus}
						deleteTask={deleteTask}
					>
						<h2>Виконані</h2>
						<p>Всього: {completedTodos.length}</p>
					</Todos>
				</div>

				<TodoPopUp
					popUpStatus={todoPopUP}
					taskToEdit={taskToEdit}
					addTask={addTask}
					saveEditTask={saveEditTask}
					hidePopUp={hidePopUp}
				/>
			</main>
		</div>
	);
};

export default Todo;
