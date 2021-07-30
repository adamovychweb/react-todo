import React from 'react';
import ThemeContext from '../../contexts/ThemeContext';

import LogoIcon from '../UI/iconComponents/LogoIcon';
import ChangeThemeButton from '../UI/ChangeThemeButton';
import UserProfile from '../UserProfile';

class Header extends React.Component {
	render() {
		return (
			<ThemeContext.Consumer>
				{(theme) => (
					<div className='container'>
						<div className={`header ${theme}`}>
							<div className='header-inner'>
								<LogoIcon width='240' height='96' />
								<div className='header-right'>
									<div className='header-right-btn'>
										<ChangeThemeButton />
									</div>
									<div className='header-right-user'>
										<UserProfile />
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</ThemeContext.Consumer>
		);
	}
}

export default Header;
