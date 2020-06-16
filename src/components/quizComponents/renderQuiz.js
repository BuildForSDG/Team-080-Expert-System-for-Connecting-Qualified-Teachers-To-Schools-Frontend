import React from 'react';
import { Card, CardImg, CardTitle, CardBody, CardSubtitle, CardText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './loading';



function GetOneQuiz(quiz){
	if (quiz != null) {
		return (
	    	<div>
	    		<div>
	    			<h4>{quiz.category}</h4>
	    			<h5>{quiz.question}</h5>
	    		</div>
	    		{quiz.incorrect_answers.map((option, index) => {
	    			<ul className="list-unstyled">
	                    <li key={index} className="answerOption">
					      <input
					        type="radio"
					        className="radioCustomButton"
					        name="radioGroup"
					        id={index}
					      />
					      <label className="radioCustomLabel" htmlFor="radioGroup">
					        {option}
					      </label>
					    </li>
	                </ul>
	    		}) }
	        </div>
	    );
	}

	return(
		<div>Nothing here mate!</div>
	);
}


class Quiz extends React.Component {
	

    render() {


    	const get_one_quiz = this.props.quizes.quizes.map((quiz, index) => {
    		return (
    			<div key={index} >
    				<GetOneQuiz quiz={quiz} />
    			</div>
			)
    	});
        

        if (this.props.quizes.isLoading) {
            return(
                <div className="container spinner">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (this.props.quizes.errMess) {

        	const { subject, level } = this.props.subjectlevel;
        	const url = `https://opentdb.com/api.php?amount=20&category=${subject}&difficulty=${level}&type=multiple`;

            return(
                <div className="container">
                    <div className="row centreItem">
                        <h5>{this.props.quizes.errMess}</h5>
                    </div>
                    <div className="centreItem" ><Button className="tryagain" onClick={() => this.props.fetchQuiz(url)}>Try again</Button></div>
                </div>
            );
        }
        else
        return (
            <div>
                <div className=" containerBorder">
                   {get_one_quiz} 
                </div>
            </div>
        );
    }   
}



export default Quiz;