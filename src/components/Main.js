import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Header from './Header';
import Welcome from './Welcome';



class Main extends Component {

	render() {
		return(
			<div>
				<Header />
				<Welcome />

			</div>

		)
	}
}

export default withRouter(Main);