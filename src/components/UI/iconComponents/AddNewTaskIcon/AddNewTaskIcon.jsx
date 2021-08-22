import React, { useContext } from 'react';
import ThemeContext from '../../../../contexts/Theme/ThemeContext';
import './addNewTaskIcon.scss';

const AddNewTaskIcon = () => {
	const themeContext = useContext(ThemeContext);

	return (
		<div className={`addNewTaskIcon ${themeContext.theme}`}>
			<svg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M24.3746 14.8293H5.62494'
					stroke='inherit'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M14.9998 5.45447V24.2041'
					stroke='inherit'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		</div>
	);
};

export default AddNewTaskIcon;
