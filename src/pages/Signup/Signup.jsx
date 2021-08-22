import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/User/UserContext';

const Signup = () => {
	const userContext = useContext(UserContext);

	const initialFormState = {
		userFirstName: '',
		email: '',
		password: '',
	};
	const [formState, setFormState] = useState(initialFormState);

	const handleChange = ({ target }) => {
		const { name, value } = target;
		setFormState((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormState(initialFormState);
		userContext.registerUser(
			formState.userFirstName,
			formState.email,
			formState.password
		);
	};

	useEffect(() => {
		console.log(formState);
	}, [formState]);

	return (
		<div className='container'>
			<p>Signup Page</p>
			<Link to={'/'}>Homepage</Link>
			<hr />
			<form onSubmit={handleSubmit}>
				<input
					value={formState.userFirstName}
					onChange={handleChange}
					type='text'
					name='userFirstName'
					minLength='3'
					required
				/>
				<br />
				<br />
				<input
					value={formState.email}
					onChange={handleChange}
					name='email'
					type='email'
					pattern='.+@gmail\.com'
					required
				/>
				<br />
				<br />
				<input
					value={formState.password}
					onChange={handleChange}
					type='password'
					name='password'
					minLength='7'
					required
				/>
				<button type='submit'>Отправить</button>
			</form>
		</div>
	);
};

export default Signup;
