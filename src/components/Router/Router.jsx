import React, { useContext } from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';

import Todo from '../../pages/Todo';
import Homepage from '../../pages/Homepage';
import Signup from '../../pages/Signup';
import Login from '../../pages/Login';

import UserContext from '../../contexts/User/UserContext';

const Router = () => {
	const userContext = useContext(UserContext);

	const todoRoute = !userContext.user.loggedIn ? <Redirect to='/' /> : <Todo />;

	return (
		<HashRouter>
			<Switch>
				<Route path={['/', '/index', '/index.html']} exact>
					<Homepage />
				</Route>

				<Route path={['/signup']}>
					<Signup />
				</Route>

				<Route path={['/login']}>
					<Login />
				</Route>

				<Route path={['/todo']}>{todoRoute}</Route>
			</Switch>
		</HashRouter>
	);
};

export default Router;
