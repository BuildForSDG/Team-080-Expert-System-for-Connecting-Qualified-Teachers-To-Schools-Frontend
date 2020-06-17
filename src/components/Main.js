import React, { Component } from 'react';
import { Switch, Route, Redirect, matchPath, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Welcome from './welcome';
import SignIn from './signIn';
import BasicDetails from './basicDetail';
import Education from './education';
import Assessment from './assessment';
import StartQuiz from './startQuiz';
import Quiz from './quiz';
import Score from './score';

import { getFiles, fetchQuiz } from '../redux/ActionCreators';


const mapStateToProps = state => {
    return {
      files: state.files,
      quizes: state.quizes,
      subjectlevel: state.subjectlevel,
    }
}

const mapDispatchToProps = (dispatch) => ({
  	getFiles: (files) => {dispatch(getFiles(files))},
  	fetchQuiz: (url) => {dispatch(fetchQuiz(url))},
  	//setCorrectAnswer: (correct_answer) => {dispatch(setCorrectAnswer(correct_answer))}
});

class Main extends Component {

	constructor(props){
        super(props);
        this.state = {
            start: 0,
            end: 1,
            count: 0,
            score: 0,
            text: 'Next Question'
        }
        this.nextQuiz = this.nextQuiz.bind(this);
        this.setQuizState = this.setQuizState.bind(this);
        this.updateCount = this.updateCount.bind(this);
        this.clearQuizCount = this.clearQuizCount.bind(this);
        this.resetScore = this.resetScore.bind(this);
        this.setSubmitButtonText = this.setSubmitButtonText.bind(this);
        this.setScore = this.setScore.bind(this);
    }


    async updateCount(checked, correct) {
    	//const { checked, correct } = this.props.checked;
    	const { quizes } = this.props.quizes;
    	let { end } = this.state;
    	if ( checked === correct && end <= quizes.length) {
	    		await this.setState({
	    		count: this.state.count + 1
	    	})
    	}	
    }


   async nextQuiz(){

        console.log('next please')
        const { quizes } = this.props.quizes;

        this.setSubmitButtonText();
        let { start, end } = this.state;
        if(end < quizes.length){
            this.setState({
                start: start + 1,
                end: end + 1
            })
        }

        if (end === quizes.length) {

        	console.log('set score')
        	
        	setTimeout(async () => {
        		let score = await (this.state.count / quizes.length ) * 100;
        		await this.setState({
	        		score: score
	        	})
        	},1000)
        	
        	this.props.history.push('/score');
        }
    }

    resetScore(){
    	if (this.state.score > 0) {
    		console.log('reset score')
    		this.setState({
    			score: 0
    		})
    	}
    }


    setQuizState(){
    	
    	let { start, end } = this.state;
    	if (start > 0 && end > 1) {
    		console.log('set state')
    		this.setState({
	            start: 0,
	            end: 1
	        })
    	}
    }

    clearQuizCount(){
    	
    	let count = this.state.count;
    	if (count > 0) {
    		console.log('reset count')
    		this.setState({
	            count: 0
	        })
    	}
    }

    setScore(){

    	const { quizes } = this.props.quizes;
    	let { end } = this.state;

		if (end === quizes.length) {
			console.log('set score')
        	let score = (this.state.count / quizes.length ) * 100;
        	this.setState({
        		score: score
        	})

        	//this.props.history.push('/assessment');
        }	
    }

    setSubmitButtonText() {
    	const { quizes } = this.props.quizes;
        let { end } = this.state;

    	if (end === quizes.length - 1 ) {
        	this.setState({
	            text: 'Submit'
	        })
        }  
    }

    componentDidUpdate(){
    	//this.setSubmitButtonText();
		//this.setScore();
		console.log('Component DID UPDATE!')
    }


	componentDidMount(){
		this.getIdParamAndSwitch();
		this.matchScore();
		this.setState({
    		text: 'Next Question'
    	});
		console.log('Component DID MOUNT!')
	}


	async matchScore() {

	    const match = matchPath(this.props.history.location.pathname, {
	      path: '/score',
	      exact: true,
	      strict: false
	    }) 

	    if (match) {

	     	this.props.history.push('/assessment');
	      	console.log('Match score param!')
	    }
	}


	async getIdParamAndSwitch() {

	    const match = matchPath(this.props.history.location.pathname, {
	      path: '/quiz',
	      exact: true,
	      strict: false
	    }) 

	    const { subject, level } = this.props.subjectlevel;

	    if (match) {

	    	this.setState({
	    		text: 'Next Question'
	    	});
	    }
	    if (match != null && subject == '' && level == '') {

	     	this.props.history.push('/assessment');
	      	console.log('Got param!')
	    }
	}

	render() {
		return(
			<div>
				<Switch>
					<Route path="/welcome" component={() =>  <Welcome /> } />
					<Route path="/signin" component={() =>  <SignIn /> } />
					<Route path="/create-account" component={() =>  <BasicDetails /> } />
					<Route path="/education" component={() =>  <Education getFiles={this.props.getFiles} /> } />
					<Route path="/assessment" component={() =>  <Assessment fetchQuiz={this.props.fetchQuiz} clearQuizState={this.setQuizState} 
																	subjectlevel={this.props.subjectlevel} clearQuizCount={this.clearQuizCount}
																	resetScore={this.resetScore} /> } />
					<Route path="/start-quiz" component={() =>  <StartQuiz /> } />
					<Route path="/quiz" component={() =>  <Quiz quizes={this.props.quizes} subjectlevel={this.props.subjectlevel} 
															fetchQuiz={this.props.fetchQuiz} nextQuiz={this.nextQuiz} count={this.state.count}
															start={this.state.start} end={this.state.end} score={this.state.score}
															text={this.state.text} checked={this.props.checked} updateCount={this.updateCount} /> } />
					<Route path="/score" component={() =>  <Score quizes={this.props.quizes} end={this.state.end} score={this.state.score}
															count={this.state.count} /> } />
					<Redirect to="/welcome" />
				</Switch>
			</div>

		);
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));