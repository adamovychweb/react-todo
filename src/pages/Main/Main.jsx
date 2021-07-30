import React from 'react';

import ThemeContext from '../../contexts/ThemeContext';

import Header from '../../components/Header/Header';

class Main extends React.Component {
	render() {
		return (
			<ThemeContext.Consumer>
				{(theme) => (
					<div className={`wrapper ${theme}`}>
						<Header />
						<main className='container'></main>
					</div>
				)}
			</ThemeContext.Consumer>
		);
	}
}

export default Main;
