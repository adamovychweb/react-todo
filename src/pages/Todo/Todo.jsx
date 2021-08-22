import React, { useContext, useState, useEffect } from 'react';

import ThemeContext from '../../contexts/Theme/ThemeContext';

import Header from '../../components/Header/Header';
import Todos from '../../components/pages/Todo/Todos';
import TodoPopUp from '../../components/pages/Todo/TodoPopUp';
import AddNewTaskIcon from '../../components/UI/iconComponents/AddNewTaskIcon/AddNewTaskIcon';

import './todo.scss';

import UserTaskContext from '../../contexts/UserTask/UserTaskContext';

const Todo = () => {
	const themeContext = useContext(ThemeContext);
	const userTaskContext = useContext(UserTaskContext);

	const [todoPopUP, setTodoPopUP] = useState('hidden');

	const [taskToEdit, setTaskToEdit] = useState(false);

	const showPopUp = (task) => {
		setTodoPopUP('shown');
		setTaskToEdit(task);
	};

	useEffect(() => {
		userTaskContext.getAllTask();
	}, []);

	const hidePopUp = () => {
		setTodoPopUP('hidden');
	};

	return (
		<div className={`wrapper ${themeContext.theme} popUp-${todoPopUP}`}>
			<Header />
			<main className='container'>
				<div className='todo-content'>
					<Todos todosArr={userTaskContext.activeTodos} showPopUp={showPopUp}>
						<div className='todos-top'>
							<h2>Заплановані</h2>
							<div className='todos-top-leftTasks'>
								<p>Залишилось:</p>
								<p>{userTaskContext.activeTodos.length}</p>
							</div>
						</div>

						<div className='todos-button'>
							<button onClick={() => showPopUp()}>
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
						todosArr={userTaskContext.completedTodos}
						showPopUp={showPopUp}
					>
						<div className='todos-top todos-completed'>
							<h2>Виконані</h2>
							<div className='todos-top-leftTasks'>
								<p>Всього:</p>
								<p>{userTaskContext.completedTodos.length}</p>
							</div>
						</div>
					</Todos>
				</div>

				<TodoPopUp
					popUpStatus={todoPopUP}
					taskToEdit={taskToEdit}
					hidePopUp={hidePopUp}
				/>
			</main>
		</div>
	);
};

export default Todo;
