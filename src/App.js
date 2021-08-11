import React, { useState, useEffect } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Todo from './pages/Todo';

import ThemeContext from './contexts/ThemeContext';

const App = () => {
	let oldTheme = localStorage.getItem('Theme');
	const [theme, setTheme] = useState(oldTheme || 'light-theme');

	const newTheme = () => {
		const updateTheme = theme === 'light-theme' ? 'dark-theme' : 'light-theme';
		setTheme(updateTheme);
	};

	useEffect(() => {
		localStorage.setItem('Theme', theme);
	}, [theme]);

	const themeContext = {
		theme: theme,
		setTheme: newTheme,
	};

	return (
		<div className='App'>
			<ThemeContext.Provider value={themeContext}>
				<HashRouter>
					<Switch>
						<Route path={['/', '/index', '/index.html']} exact>
							<Todo />
						</Route>
					</Switch>
				</HashRouter>
			</ThemeContext.Provider>
		</div>
	);
};

export default App;
