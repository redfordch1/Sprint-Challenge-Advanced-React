import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
	render(<App />);
});

test('players are being rendered', () => {
	const { getByTestId } = render(<App />);
	getByTestId(/players__/i);
});

test('toggle button is rendering', () => {
	const { getByTestId } = render(<App />);
	getByTestId(/toggle__button/i);
});
