import React, { useContext, useState, useEffect } from 'react';
import UserContext from '../User/UserContext';

import UserTaskContext from './UserTaskContext';

const UserTaskContextProv = ({ children }) => {
	const userContext = useContext(UserContext);
	const token = userContext.user.token || '';

	const oldTodos = JSON.parse(localStorage.getItem('todos'));

	const myHeadersTasks = new Headers();
	myHeadersTasks.append('Authorization', `Bearer ${token}`);
	myHeadersTasks.append('Content-Type', 'application/json');

	const getAllTask = () => {
		const requestOptions = {
			method: 'GET',
			headers: myHeadersTasks,
			redirect: 'follow',
		};

		fetch('https://api-nodejs-todolist.herokuapp.com/task', requestOptions)
			.then((response) => {
				if (response.ok) {
					response.json().then((result) => {
						localStorage.setItem('todos', JSON.stringify(result.data));
						setTodos(result.data);
					});
				} else {
					alert('Error');
				}
			})
			.catch((error) => console.log('error', error));
	};

	const [todos, setTodos] = useState(oldTodos || []);

	useEffect(() => {
		console.log();
		console.log('Todos:', todos);
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const addTask = (title, hidePopUp) => {
		if (title === '') {
			alert('Заповніть назву завдання');
		} else {
			const body = JSON.stringify({
				description: title,
			});

			const requestOptions = {
				method: 'POST',
				headers: myHeadersTasks,
				body: body,
				redirect: 'follow',
			};

			fetch('https://api-nodejs-todolist.herokuapp.com/task', requestOptions)
				.then((response) => {
					if (response.ok) {
						response.json().then((result) => {
							setTodos((prev) => [...prev, result.data]);
						});
					} else {
						alert('Error');
					}
				})
				.catch((error) => console.log('error', error));
			hidePopUp();
		}
	};

	const saveEditTask = (title, id, hidePopUp) => {
		if (title === '') {
			alert('Заповніть назву завдання');
		} else {
			setTodos(
				todos.map((item) =>
					item._id === id ? { ...item, description: title } : { ...item }
				)
			);

			const body = JSON.stringify({
				description: title,
			});

			const requestOptions = {
				method: 'PUT',
				headers: myHeadersTasks,
				body: body,
				redirect: 'follow',
			};

			fetch(
				`https://api-nodejs-todolist.herokuapp.com/task/${id}`,
				requestOptions
			)
				.then((response) => {
					if (!response.ok) {
						alert('Error');
					}
				})
				.catch((error) => console.log('error', error));
			hidePopUp();
		}
	};

	const toggleTaskStatus = (task) => {
		setTodos(
			todos.map((item) =>
				item._id === task._id
					? { ...item, completed: !task.completed }
					: { ...item }
			)
		);

		const body = JSON.stringify({
			completed: !task.completed,
		});

		const requestOptions = {
			method: 'PUT',
			headers: myHeadersTasks,
			body: body,
			redirect: 'follow',
		};

		fetch(
			`https://api-nodejs-todolist.herokuapp.com/task/${task._id}`,
			requestOptions
		)
			.then((response) => {
				if (!response.ok) {
					alert('Error');
				}
			})
			.catch((error) => console.log('error', error));
	};

	const deleteTask = (task) => {
		setTodos([...todos.filter((item) => item._id !== task._id)]);

		const requestOptions = {
			method: 'DELETE',
			headers: myHeadersTasks,
			redirect: 'follow',
		};

		fetch(
			`https://api-nodejs-todolist.herokuapp.com/task/${task._id}`,
			requestOptions
		)
			.then((response) => {
				if (!response.ok) {
					alert('Error');
				}
			})
			.catch((error) => console.log('error', error));
	};

	const activeTodos = todos.filter((task) => !task.completed);
	const completedTodos = todos.filter((task) => task.completed);

	const userTaskContext = {
		addTask: addTask,
		getAllTask,
		activeTodos,
		completedTodos,
		toggleTaskStatus,
		deleteTask,
		saveEditTask,
	};

	return (
		<div className='userTaskContextProv'>
			<UserTaskContext.Provider value={userTaskContext}>
				{children}
			</UserTaskContext.Provider>
		</div>
	);
};

export default UserTaskContextProv;
