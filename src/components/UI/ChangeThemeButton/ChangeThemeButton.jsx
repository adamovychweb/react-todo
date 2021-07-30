import React from 'react';
import ThemeContext from '../../../contexts/ThemeContext';
import ChangeThemeContext from '../../../contexts/ChangeThemeContext';

class ChangeThemeButton extends React.Component {
	render() {
		return (
			<ThemeContext.Consumer>
				{(theme) => (
					<ChangeThemeContext.Consumer>
						{(changeTheme) => (
							<div className={`changeThemeButton ${theme}`}>
								<button onClick={changeTheme}></button>
							</div>
						)}
					</ChangeThemeContext.Consumer>
				)}
			</ThemeContext.Consumer>
		);
	}
}

export default ChangeThemeButton;
