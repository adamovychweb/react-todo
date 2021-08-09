import React, { useState, useEffect } from 'react';
import './todoPopUp.scss';

const TodoPopUp = (props) => {
	const taskToEdit = props.taskToEdit;

	const PopUpTitle = taskToEdit ? (
		<h2>Редагувати завдання</h2>
	) : (
		<h2>Нове завдання</h2>
	);

	const PopUpButton = taskToEdit ? (
		<button
			onClick={() => props.saveEditTask(title, description, taskToEdit.id)}
		>
			Сохранить
		</button>
	) : (
		<button onClick={() => props.addTask(title, description)}>Отправить</button>
	);

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	useEffect(() => {
		taskToEdit ? setTitle(taskToEdit.title) : setTitle('');
		taskToEdit ? setDescription(taskToEdit.description) : setDescription('');
	}, [taskToEdit]);

	const handleChangeTitle = (e) => {
		setTitle(e.target.value);
	};

	const handleChangeDescription = (e) => {
		setDescription(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setTitle('');
		setDescription('');
	};

	return (
		<div className={`todoPopUp ${props.popUpStatus}`}>
			<div className='todoPopUp-bg' onClick={() => props.hidePopUp()}></div>
			<div className='todoPopUp-wrapper'>
				<div className='todoPopUp-inner'>
					<div
						className='todoPopUp-inner-CloseIcon'
						onClick={() => props.hidePopUp()}
					>
						<p>X</p>
					</div>
					<div className='todoPopUp-inner-title'>{PopUpTitle}</div>
					<div className='todoPopUp-inner-form'>
						<form onSubmit={handleSubmit}>
							<input type='text' value={title} onChange={handleChangeTitle} />
							<textarea
								value={description}
								onChange={handleChangeDescription}
							/>
							{PopUpButton}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TodoPopUp;
