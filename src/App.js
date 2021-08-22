import React from 'react';

import Router from './components/Router';

import ThemeContextProv from './contexts/Theme/ThemeContextProv';
import UserContextProv from './contexts/User/UserContextProv';
import UserTaskContextProv from './contexts/UserTask/UserTaskContextProv';

const App = () => {
	return (
		<div className='App'>
			<ThemeContextProv>
				<UserContextProv>
					<UserTaskContextProv>
						<Router />
					</UserTaskContextProv>
				</UserContextProv>
			</ThemeContextProv>
		</div>
	);
};

export default App;
