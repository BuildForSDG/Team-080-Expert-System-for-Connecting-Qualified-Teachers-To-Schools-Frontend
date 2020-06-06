import React from 'react';
import * as renderer from 'react-test-renderer';
import SignIn from '../src/components/SignIn';
import { MemoryRouter  as Router } from 'react-router-dom';


describe('Sign in component', () => {

	test('renders sign in page correctly', () => {
		let	tree = renderer.create(<Router><SignIn /></Router>).toJSON();
	  	expect(tree).toMatchSnapshot();
	});

});