import React, { useContext } from 'react';

import './userProfile.scss';

import ThemeContext from '../../contexts/Theme/ThemeContext';

import UserProfileIcon from '../UI/iconComponents/UserProfileIcon/UserProfileIcon';
import UserContext from '../../contexts/User/UserContext';

const UserProfile = () => {
	const themeContext = useContext(ThemeContext);
	const userContext = useContext(UserContext);

	return (
		<div className={`userProfile ${themeContext.theme}`}>
			<div className='userProfile-icon'>
				<UserProfileIcon />
			</div>
			<div onClick={userContext.logoutUser}>
				<p className='userProfile-name'>{userContext.user.name}</p>
			</div>
		</div>
	);
};

export default UserProfile;
