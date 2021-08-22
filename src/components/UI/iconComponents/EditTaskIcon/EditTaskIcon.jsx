import React, { useContext } from 'react';
import './editTaskIcon.scss';
import ThemeContext from '../../../../contexts/Theme/ThemeContext';

const EditTaskIcon = () => {
	const themeContext = useContext(ThemeContext);
	return (
		<div className={`editTaskIcon ${themeContext.theme}`}>
			<svg viewBox='0 0 22 22' fill='none'>
				<path
					d='M14.8603 2.71026C15.0855 2.48508 15.3528 2.30646 15.647 2.18459C15.9413 2.06272 16.2566 2 16.575 2C16.8935 2 17.2088 2.06272 17.503 2.18459C17.7972 2.30646 18.0646 2.48508 18.2897 2.71026C18.5149 2.93544 18.6935 3.20276 18.8154 3.49697C18.9373 3.79118 19 4.10651 19 4.42497C19 4.74342 18.9373 5.05875 18.8154 5.35296C18.6935 5.64717 18.5149 5.9145 18.2897 6.13968L6.71545 17.714L2 19L3.28603 14.2845L14.8603 2.71026Z'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		</div>
	);
};

export default EditTaskIcon;
