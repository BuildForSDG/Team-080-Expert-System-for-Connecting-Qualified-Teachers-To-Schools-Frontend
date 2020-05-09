import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Header from './Header';



class Main extends Component {

	render() {
		return(
			<div>
				<Header />

			</div>

		);
	}
}

export default withRouter(Main);