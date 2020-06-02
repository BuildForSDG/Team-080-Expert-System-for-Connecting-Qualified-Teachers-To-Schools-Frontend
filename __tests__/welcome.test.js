import React from 'react';
import * as renderer from 'react-test-renderer';
//import { render } from '@testing-library/react';
import Welcome from '../src/components/Welcome';
import { MemoryRouter  as Router } from 'react-router-dom';


describe('Welcome component', () => {

	test('renders welcome page correctly', () => {
		let	tree = renderer.create(<Router><Welcome /></Router>).toJSON();
	  	expect(tree).toMatchSnapshot();
	});

});
