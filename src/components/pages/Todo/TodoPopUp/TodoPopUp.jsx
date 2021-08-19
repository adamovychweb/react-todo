import React, { useState, useEffect, useContext } from 'react';
import './todoPopUp.scss';
import DeleteOrCloseIcon from '../../../UI/iconComponents/DeleteOrCloseIcon/DeleteOrCloseIcon';
import ThemeContext from '../../../../contexts/ThemeContext';

const TodoPopUp = (props) => {
	const themeContext = useContext(ThemeContext);

	const taskToEdit = props.taskToEdit;

	const popUpTitle = taskToEdit ? (
		<h2>Редагувати завдання</h2>
	) : (
		<h2>Нове завдання</h2>
	);

	const popUpButton = taskToEdit ? (
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

	const formInput = taskToEdit ? (
		<>
			<label
				htmlFor='todoPopUp-titleForm'
				className='todoPopUp-inner-form-inputEdit'
			>
				Назва
			</label>
			<input
				type='text'
				value={title}
				onChange={handleChangeTitle}
				id='todoPopUp-titleForm'
			/>
			<label
				htmlFor='todoPopUp-descriptionForm'
				className='todoPopUp-inner-form-textareaEdit'
			>
				Опис
			</label>
			<textarea
				value={description}
				onChange={handleChangeDescription}
				id='todoPopUp-descriptionForm'
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
					<div className='todoPopUp-inner-title'>{popUpTitle}</div>
					<div className='todoPopUp-inner-form'>
						<form onSubmit={handleSubmit}>
							{formInput}
							{popUpButton}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TodoPopUp;
