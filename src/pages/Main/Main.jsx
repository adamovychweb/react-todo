import React, { useContext } from 'react';

import ThemeContext from '../../contexts/ThemeContext';

import Header from '../../components/Header/Header';

import './main.scss';

const Main = () => {
	const themeContext = useContext(ThemeContext);

	return (
		<div className={`wrapper ${themeContext.theme}`}>
			<Header />
			<main className='container'></main>
		</div>
	);
};

export default Main;
