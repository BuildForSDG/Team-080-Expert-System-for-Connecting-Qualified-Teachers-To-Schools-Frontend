import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Welcome from './Welcome';
import SignIn from './SignIn';
import CreateAccount from './CreateAccount';


class Main extends Component {

	render() {
		return(
			<div>
				<Switch>
					<Route path="/welcome" component={() =>  <Welcome /> } />
					<Route path="/signin" component={() =>  <SignIn /> } />
					<Route path="/create-account" component={() =>  <CreateAccount /> } />
					<Redirect to="/welcome" />
				</Switch>
			</div>

		);
	}
}

export default withRouter(Main);