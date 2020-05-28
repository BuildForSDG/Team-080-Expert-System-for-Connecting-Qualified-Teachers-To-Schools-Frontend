import React from 'react';
import { act, create } from 'react-test-renderer';
import Welcome from '../src/components/Welcome';

describe('Welcome component', () => {

	test('renders welcome page correctly', () => {
		let tree;
		act(() => {
			tree = create(<Welcome />).toJSON();
		});	
	  	//const tree = create(<Welcome />).toJSON();
	  	expect(tree).toMatchSnapshot();
	});

});
