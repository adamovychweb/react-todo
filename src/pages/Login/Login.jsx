import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import UserContext from '../../contexts/User/UserContext';

const Login = () => {
	const userContext = useContext(UserContext);

	const initialFormState = {
		login: '',
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
		userContext.loginUser(formState.login, formState.password);
	};

	useEffect(() => {
		console.log(formState);
	}, [formState]);

	return (
		<div className='container'>
			<p>Login Page</p>
			<Link to={'/'}>Homepage</Link>
			<hr />
			<form onSubmit={handleSubmit}>
				<input
					value={formState.login}
					onChange={handleChange}
					name='login'
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

export default Login;
