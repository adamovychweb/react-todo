import React from 'react';

import ThemeContext from '../../contexts/ThemeContext';

import UserProfileIcon from '../UI/iconComponents/UserProfileIcon/UserProfileIcon';

class UserProfile extends React.Component {
	render() {
		return (
			<ThemeContext.Consumer>
				{(theme) => (
					<div className={`userProfile ${theme}`}>
						<div className='userProfile-icon'>
							<UserProfileIcon />
						</div>
						<p className='userProfile-name'>User Profile</p>
					</div>
				)}
			</ThemeContext.Consumer>
		);
	}
}

export default UserProfile;
