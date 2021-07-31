import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';

import ThemeContext from './contexts/ThemeContext';
import ChangeThemeContext from './contexts/ChangeThemeContext';

class App extends React.Component {
	constructor(props) {
		super(props);

		let theme = localStorage.getItem('Theme');

		this.state = {
			theme: theme ? theme : 'light-theme',
		};

		this.changeTheme = this.changeTheme.bind(this);
	}

	changeTheme() {
		const newTheme =
			this.state.theme === 'light-theme' ? 'dark-theme' : 'light-theme';
		this.setState({ theme: newTheme });
		localStorage.setItem('Theme', newTheme);
	}

	render() {
		return (
			<div className='App'>
				<ThemeContext.Provider value={this.state.theme}>
					<ChangeThemeContext.Provider value={this.changeTheme}>
						<BrowserRouter basename={process.env.PUBLIC_URL}>
							<Switch>
								<Route path={['/', '/index', '/index.html']} exact>
									<Main />
								</Route>
							</Switch>
						</BrowserRouter>
					</ChangeThemeContext.Provider>
				</ThemeContext.Provider>
			</div>
		);
	}
}

export default App;
