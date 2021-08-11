import React, { useContext, useState, useEffect } from 'react';

import ThemeContext from '../../contexts/ThemeContext';

import Header from '../../components/Header/Header';
import Todos from '../../components/pages/Todo/Todos';
import TodoPopUp from '../../components/pages/Todo/TodoPopUp';
import AddNewTaskIcon from '../../components/UI/iconComponents/AddNewTaskIcon/AddNewTaskIcon';

import './todo.scss';

const Todo = () => {
	const themeContext = useContext(ThemeContext);

	const oldTaskIndex = Number(localStorage.getItem('taskIndex'));
	const [taskIndex, setTaskIndex] = useState(oldTaskIndex || 0);

	const newTaskIndex = () => {
		const index = taskIndex + 1;
		setTaskIndex(index);
		localStorage.setItem('taskIndex', index);
	};

	const oldTodos = JSON.parse(localStorage.getItem('Todos'));
	const [todos, setTodos] = useState(oldTodos || []);

	useEffect(() => {
		console.log();
		console.log('Todos:', todos);
	}, [todos]);

	const addTask = (title, description) => {
		const newItem = {
			id: taskIndex,
			title: title,
			description: description,
			completed: false,
		};
		setTodos([...todos, newItem]);
		setTodoPopUP('hidden');
		newTaskIndex();
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
	}, [todos]);

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
						<div className='todos-top'>
							<h2>Заплановані</h2>
							<div className='todos-top-leftTasks'>
								<p>Залишилось:</p>
								<p>{activeTodos.length}</p>
							</div>
						</div>

						<div className='todos-button'>
							<button onClick={() => showPopUp(false)}>
								<div className='todos-button-inner'>
									<AddNewTaskIcon />
									<p className='todos-button-inner-text'>
										Добавте нове завдання..
									</p>
								</div>
							</button>
						</div>
					</Todos>

					<Todos
						todosArr={completedTodos}
						showPopUp={showPopUp}
						toggleTaskStatus={toggleTaskStatus}
						deleteTask={deleteTask}
					>
						<div className='todos-top todos-completed'>
							<h2>Виконані</h2>
							<div className='todos-top-leftTasks'>
								<p>Всього:</p>
								<p>{completedTodos.length}</p>
							</div>
						</div>
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
