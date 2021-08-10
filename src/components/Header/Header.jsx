import React, { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';

import LogoIcon from '../UI/iconComponents/LogoIcon';
import ChangeThemeButton from '../UI/ChangeThemeButton';

import './header.scss';

const Header = () => {
	const themeContext = useContext(ThemeContext);
	return (
		<div className='container'>
			<div className={`header ${themeContext.theme}`}>
				<div className='header-inner'>
					<LogoIcon width='240' height='96' />

					<ChangeThemeButton />
				</div>
			</div>
		</div>
	);
};

export default Header;
