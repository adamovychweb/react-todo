import React, { useEffect, useState } from 'react';

import ThemeContext from './ThemeContext';

const ThemeContextProv = ({ children }) => {
	const oldTheme = localStorage.getItem('theme');
	const [theme, setTheme] = useState(oldTheme || 'light-theme');

	const newTheme = () => {
		setTheme((prev) => (prev === 'light-theme' ? 'dark-theme' : 'light-theme'));
	};

	useEffect(() => {
		localStorage.setItem('theme', theme);
	}, [theme]);

	const themeContext = {
		theme: theme,
		setTheme: newTheme,
	};

	useEffect(() => {
		console.log('themeContext');
	});

	return (
		<div className='themeContext'>
			<ThemeContext.Provider value={themeContext}>
				{children}
			</ThemeContext.Provider>
		</div>
	);
};

export default ThemeContextProv;
