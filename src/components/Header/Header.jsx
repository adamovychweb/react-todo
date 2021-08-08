import React, { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';

import LogoIcon from '../UI/iconComponents/LogoIcon';
import ChangeThemeButton from '../UI/ChangeThemeButton';
import UserProfile from '../UserProfile';

import './header.scss';

const Header = () => {
	const themeContext = useContext(ThemeContext);
	return (
		<div className='container'>
			<div className={`header ${themeContext.theme}`}>
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
	);
};

export default Header;
