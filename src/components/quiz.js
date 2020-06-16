import React from 'react';
import { Card, CardImg, CardTitle, CardBody, CardSubtitle, CardText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './loading';
//import GetOneQuiz from './getOneQuiz';

import { Control, Form } from 'react-redux-form';


function GetOneQuiz({quiz, text, disableNextButton, checkMarked}){

	if (quiz != null) {

        let answers = [];
        answers.push(quiz.correct_answer);
        for (var i = 0; i < quiz.incorrect_answers.length; i++) {
            answers.push(quiz.incorrect_answers[i]);
        }

        //console.log(`correct answer ${quiz.correct_answer}`)
        //console.log(`answers ${answers}`)

        //let randomized = answers.sort(() => 0.5 - Math.random());

        //console.log(`randomized ${randomized}`)

		return (
	    	<div>
            <form  >
	    		<div style={{marginBottom:'20px'}}>
                    <div style={{marginTop:'50px', color:'#2a2c30'}}><h6>{quiz.category}</h6></div>
	    			<div style={{marginTop:'10px', fontSize:'14px', color:'#2a2c30'}} >{quiz.question}</div>
	    		</div>
	    		{answers.sort(() => 0.5 - Math.random()).map((option, index) => {
                    return(
                        
                        <ul key={index} className="list-unstyled">
                            <li className="answerOption">
                              <input
                                type="radio"
                                className="radioCustomButton"
                                name="quiz-option"
                                id={index}
                                value={option}
                              />
                              <label className="radioCustomLabel" htmlFor="quiz-option" >
                                {option}
                              </label>
                            </li>
                        </ul>
                    )
	    		}) }
                <input type="radio" name="correct" value={quiz.correct_answer} hidden={true} />
                <Button 
                    className="quiz-buttn" 
                    type="submit"
                    disabled={false}
                    onClick={async (e) => await checkMarked(e)} >{text}</Button>
	        </form>
            </div>
	    );
	}
}


class Quiz extends React.Component {
	
    constructor(props){
        super(props);
        this.disableNextButton = this.disableNextButton.bind(this);
        this.checkMarked = this.checkMarked.bind(this);
    }

    checkMarked(e) {
        e.preventDefault();
        let checked = document.querySelector('input[name="quiz-option"]:checked').value;
        let correct = document.querySelector('input[name="correct"]').value;
        if (checked && correct) {
            console.log(`checked ${checked}, correct ${correct}`);
            this.props.updateCount(checked, correct);
            this.props.nextQuiz();
        }   
    }

    disableNextButton() {
        let checked = document.querySelector('input[name="quiz-option"]:checked').value;
        return checked ? false : true;
    }
    

    render() {

        const { quizes, isLoading, errMess } = this.props.quizes;
        

        let copy_array = quizes;

        let start  = this.props.start;
        let end = this.props.end;
        console.log(`start ${start}, end ${end}`)

        let count = this.props.count;
        console.log(`count ${count}`)

        let score = this.props.score;
        console.log(`score ${score}%`)

        let get_one_quiz;

        if (copy_array != null) {

            let get_one = copy_array.slice(start, end);

            get_one_quiz = get_one.map((quiz, index) => {
                return (
                    <div key={index} >
                        <GetOneQuiz quiz={quiz} text={this.props.text} 
                        disableNextButton={this.disableNextButton} checkMarked={this.checkMarked} />
                    </div>
                );
            });
        }

        if (isLoading) {
            return(
                <div className="container spinner">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (errMess) {

        	const { subject, level } = this.props.subjectlevel;
        	const url = `https://opentdb.com/api.php?amount=5&category=${subject}&difficulty=${level}&type=multiple`;

            return(
                <div className="container">
                    <div className="row centre-errmess">
                        <p>{errMess}</p>
                    </div>
                    <div className="centre-errmess-buttn" ><Button className="tryagain" onClick={() => this.props.fetchQuiz(url)}>Try again</Button></div>
                </div>
            );
        }
        else
        return (
            <div style={{backgroundColor:'#f5f7fb', height:'800px', padding:'15px'}} >
                <div className="quiz-head">
                    <div style={{ width:'35%'}}>
                        <Link to="/assessment" style={{ textDecoration: 'none'}}>
                            <div className="previousLink">
                                <p style={{fontSize:'14px', fontWeight: 500, color:'#7e8c95'}} >Cancel Test</p>
                            </div>
                        </Link>
                    </div>

                    <div className="quiz-number">{end} of {quizes.length}</div>
                    <div className="timer">Timer</div>
                </div>
                
                <div className=" containerBorder">
                   {get_one_quiz} 
                </div>
                
            </div>
        );
    }   
}



export default Quiz;