import React, { useContext } from 'react';
import './notCompletedTaskIcon.scss';
import ThemeContext from '../../../../contexts/Theme/ThemeContext';

const NotCompletedTaskIcon = () => {
	const themeContext = useContext(ThemeContext);
	return (
		<div className={`notCompletedTaskIcon ${themeContext.theme}`}>
			<svg viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<rect x='0.750977' y='0.75' width='20.5' height='20.5' rx='5.25' />
			</svg>
		</div>
	);
};

export default NotCompletedTaskIcon;
