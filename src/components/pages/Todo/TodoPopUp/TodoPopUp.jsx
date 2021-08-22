import React, { useState, useEffect, useContext } from 'react';
import './todoPopUp.scss';
import DeleteOrCloseIcon from '../../../UI/iconComponents/DeleteOrCloseIcon/DeleteOrCloseIcon';
import ThemeContext from '../../../../contexts/Theme/ThemeContext';
import UserTaskContext from '../../../../contexts/UserTask/UserTaskContext';

const TodoPopUp = ({ taskToEdit, hidePopUp, popUpStatus }) => {
	const themeContext = useContext(ThemeContext);
	const userTaskContext = useContext(UserTaskContext);

	const popUpTitle = taskToEdit ? 'Редагувати завдання' : 'Нове завдання';

	const popUpButton = taskToEdit ? (
		<button
			onClick={() => {
				userTaskContext.saveEditTask(title, taskToEdit._id, hidePopUp);
			}}
		>
			Зберегти
		</button>
	) : (
		<button
			onClick={() => {
				userTaskContext.addTask(title, hidePopUp);
			}}
		>
			Добавити
		</button>
	);

	const [title, setTitle] = useState('');

	useEffect(() => {
		taskToEdit ? setTitle(taskToEdit.description) : setTitle('');
	}, [taskToEdit]);

	const handleChangeTitle = (e) => {
		setTitle(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setTitle('');
	};

	const formInput = taskToEdit ? (
		<>
			<label
				htmlFor='todoPopUp-titleForm'
				className='todoPopUp-inner-editTask-description'
			>
				Редагувати
			</label>

			<input
				type='text'
				value={title}
				onChange={handleChangeTitle}
				id='todoPopUp-titleForm'
			/>
		</>
	) : (
		<>
			<input
				className='todoPopUp-inner-form-formNew'
				type='text'
				value={title}
				onChange={handleChangeTitle}
				placeholder='Назва'
			/>
		</>
	);

	const todoPopUpInnerEditTaskTitle = title ? (
		<p className='todoPopUp-inner-editTask-title'>{title}</p>
	) : (
		<p className='todoPopUp-inner-editTask-title-placeholder'>
			{'Тут буде опис :)'}
		</p>
	);

	return (
		<div className={`todoPopUp ${popUpStatus} ${themeContext.theme}`}>
			<div className='todoPopUp-bg' onClick={() => hidePopUp()}></div>
			<div className='todoPopUp-wrapper'>
				<div className='todoPopUp-inner'>
					<div
						className='todoPopUp-inner-closeIcon'
						onClick={() => hidePopUp()}
					>
						<DeleteOrCloseIcon />
					</div>
					<div className='todoPopUp-inner-title'>
						<h2>{popUpTitle}</h2>
					</div>
					<div className='todoPopUp-inner-editTask'>
						<p className='todoPopUp-inner-editTask-description'>
							Опис завдання
						</p>
						{todoPopUpInnerEditTaskTitle}
					</div>
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
