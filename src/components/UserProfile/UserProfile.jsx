import React, { useContext } from 'react';

import './userProfile.scss';

import ThemeContext from '../../contexts/ThemeContext';

import UserProfileIcon from '../UI/iconComponents/UserProfileIcon/UserProfileIcon';

const UserProfile = () => {
	const themeContext = useContext(ThemeContext);

	return (
		<div className={`userProfile ${themeContext.theme}`}>
			<div className='userProfile-icon'>
				<UserProfileIcon />
			</div>
			<p className='userProfile-name'>User Profile</p>
		</div>
	);
};

export default UserProfile;
