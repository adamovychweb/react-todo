import React, { useState, useEffect, useContext } from 'react';
import './todoPopUp.scss';
import DeleteOrCloseIcon from '../../../UI/iconComponents/DeleteOrCloseIcon/DeleteOrCloseIcon';
import ThemeContext from '../../../../contexts/ThemeContext';

const TodoPopUp = (props) => {
	const themeContext = useContext(ThemeContext);

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
			Зберегти
		</button>
	) : (
		<button onClick={() => props.addTask(title, description)}>Добавити</button>
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

	const UserInput = taskToEdit ? (
		<>
			<p className='todoPopUp-inner-form-inputEdit'>Назва</p>
			<input
				type='text'
				value={title}
				onChange={handleChangeTitle}
				placeholder=''
			/>
			<p className='todoPopUp-inner-form-textareaEdit'>Опис</p>
			<textarea
				value={description}
				onChange={handleChangeDescription}
				placeholder=''
				resize='none'
			/>
		</>
	) : (
		<>
			<input
				className='todoPopUp-inner-form-inputNew'
				type='text'
				value={title}
				onChange={handleChangeTitle}
				placeholder='Назва'
			/>
			<textarea
				className='todoPopUp-inner-form-textareaNew'
				value={description}
				onChange={handleChangeDescription}
				placeholder='Опис'
				resize='none'
			/>
		</>
	);

	return (
		<div className={`todoPopUp ${props.popUpStatus} ${themeContext.theme}`}>
			<div className='todoPopUp-bg' onClick={() => props.hidePopUp()}></div>
			<div className='todoPopUp-wrapper'>
				<div className='todoPopUp-inner'>
					<div
						className='todoPopUp-inner-closeIcon'
						onClick={() => props.hidePopUp()}
					>
						<DeleteOrCloseIcon />
					</div>
					<div className='todoPopUp-inner-title'>{PopUpTitle}</div>
					<div className='todoPopUp-inner-form'>
						<form onSubmit={handleSubmit}>
							{UserInput}
							{PopUpButton}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TodoPopUp;
