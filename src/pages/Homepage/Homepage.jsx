import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
	return (
		<div className='container'>
			<p>Homepage</p>
			<br />
			<Link to={'/todo'}>To do</Link>
			<hr />
			<Link to={'/login'}>Login</Link>
			<hr />
			<Link to={'/signup'}>Signup</Link>
		</div>
	);
};

export default Homepage;
