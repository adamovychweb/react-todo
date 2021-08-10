import React from 'react';
import './deleteOrCloseIcon.scss';

const DeleteOrCloseIcon = () => {
	return (
		<div className='deleteOrCloseIcon'>
			<svg viewBox='0 0 22 22'>
				<path
					d='M17.75 4L4 17.75'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M4 4L17.75 17.75'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		</div>
	);
};

export default DeleteOrCloseIcon;
