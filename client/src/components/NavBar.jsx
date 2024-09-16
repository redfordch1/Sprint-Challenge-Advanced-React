import React, { useState, useEffect } from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {
	const [ darkMode, setDarkMode ] = useDarkMode(false);
	const toggleMode = (e) => {
		e.preventDefault();
		setDarkMode(!darkMode);
	};

	const onOff = () => {
		return `${darkMode ? 'on' : 'off'}`;
	};
	return (
		<nav className='navbar'>
			<h1>The Team</h1>
			<div className='dark-mode__toggle' data-testid='toggle__button'>
				<div onClick={toggleMode} className={darkMode ? 'toggle toggled' : 'toggle'} />
				<div className={onOff} />
			</div>
		</nav>
	);
};

export default Navbar;
