import React, { useContext } from 'react';
import ThemeContext from '../../../contexts/ThemeContext';

import './changeThemeButton.scss';

const ChangeThemeButton = () => {
	const themeContext = useContext(ThemeContext);

	return (
		<div className={`changeThemeButton ${themeContext.theme}`}>
			<button onClick={themeContext.setTheme}></button>
		</div>
	);
};

export default ChangeThemeButton;
