import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Welcome from './welcome';
import SignIn from './signIn';
import BasicDetails from './basicDetail';
import Education from './education';
import Assessment from './assessment';

const mapStateToProps = state => {
    return {
      files: state.files
    }
}

class Main extends Component {

	render() {
		return(
			<div>
				<Switch>
					<Route path="/welcome" component={() =>  <Welcome /> } />
					<Route path="/signin" component={() =>  <SignIn /> } />
					<Route path="/create-account" component={() =>  <BasicDetails /> } />
					<Route path="/education" component={() =>  <Education /> } />
					<Route path="/assessment" component={() =>  <Assessment /> } />
					<Redirect to="/welcome" />
				</Switch>
			</div>

		);
	}
}

export default withRouter(connect(mapStateToProps)(Main));