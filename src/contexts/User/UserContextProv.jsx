import React, { useEffect, useState } from 'react';

import UserContext from './UserContext';

const UserContextProv = ({ children }) => {
	const oldUser = JSON.parse(localStorage.getItem('user'));

	const [user, setUser] = useState(
		oldUser || {
			loggedIn: false,
		}
	);

	const token = user.token || '';

	const myHeadersPost = new Headers();
	myHeadersPost.append('Content-Type', 'application/json');

	const registerUser = (name, email, password) => {
		const userData = JSON.stringify({
			name: name,
			email: email,
			password: password,
			age: 0,
		});
		const requestOptions = {
			method: 'POST',
			headers: myHeadersPost,
			body: userData,
			redirect: 'follow',
		};
		fetch(
			'https://api-nodejs-todolist.herokuapp.com/user/register',
			requestOptions
		)
			.then((response) => console.log(response))
			.catch((error) => console.log('error', error));
	};

	const loginUser = (email, password) => {
		const userData = JSON.stringify({
			email: email,
			password: password,
		});

		const requestOptions = {
			method: 'POST',
			headers: myHeadersPost,
			body: userData,
			redirect: 'follow',
		};

		fetch(
			'https://api-nodejs-todolist.herokuapp.com/user/login',
			requestOptions
		)
			.then((response) => {
				if (response.ok) {
					response.json().then((result) => {
						console.log(result);
						setUser({
							loggedIn: true,
							token: result.token,
							id: result.user._id,
							name: result.user.name,
							email: result.user.email,
							createdAt: result.user.createdAt,
							updatedAt: result.user.updatedAt,
						});
						window.location.replace('/#/todo');
					});
				} else {
					alert('err');
				}
			})
			.catch((error) => console.log('error', error));
	};

	const logoutUser = () => {
		localStorage.setItem('user', JSON.stringify({ loggedIn: false }));
		localStorage.setItem('todos', JSON.stringify([]));
		window.location.replace('/#/index');

		const myHeaders = new Headers();
		myHeaders.append('Authorization', `Bearer ${token}`);

		const requestOptions = {
			method: 'POST',
			headers: myHeaders,
			redirect: 'follow',
		};

		fetch(
			'https://api-nodejs-todolist.herokuapp.com/user/logout',
			requestOptions
		)
			.then((response) => {
				if (!response.ok) {
					alert('Error');
				}
			})

			.catch((error) => console.log('error', error));
	};

	useEffect(() => {
		localStorage.setItem('user', JSON.stringify(user));
	}, [user]);

	const userContext = {
		user: user,
		registerUser: registerUser,
		loginUser: loginUser,
		logoutUser,
	};

	return (
		<div className='userContext'>
			<UserContext.Provider value={userContext}>
				{children}
			</UserContext.Provider>
		</div>
	);
};

export default UserContextProv;
