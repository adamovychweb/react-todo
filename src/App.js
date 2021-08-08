import React, { useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';

import ThemeContext from './contexts/ThemeContext';

const App = () => {
	let oldTheme = localStorage.getItem('Theme');

	const [theme, setTheme] = useState(oldTheme ? oldTheme : 'light-theme');

	const newTheme = () => {
		const updateTheme = theme === 'light-theme' ? 'dark-theme' : 'light-theme';
		setTheme(updateTheme);
		localStorage.setItem('Theme', updateTheme);
	};

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
							<Main />
						</Route>
					</Switch>
				</HashRouter>
			</ThemeContext.Provider>
		</div>
	);
};

export default App;
