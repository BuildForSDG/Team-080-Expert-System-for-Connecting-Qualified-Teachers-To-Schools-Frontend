import React from 'react';
import { Button } from 'reactstrap';


export default function GetOneQuiz({quiz, text, checkMarked}){

	if (quiz != null) {

        let answers = [];
        answers.push(quiz.correct_answer);
        for (var i = 0; i < quiz.incorrect_answers.length; i++) {
            answers.push(quiz.incorrect_answers[i]);
        }

        //console.log(`correct answer ${quiz.correct_answer}`)
        //console.log(`answers ${answers}`)

        let randomized = answers.sort(() => 0.5 - Math.random());

        //console.log(`randomized ${randomized}`)

		return (
	    	<div>
            <form  >
	    		<div style={{marginBottom:'20px'}}>
                    <div style={{marginTop:'50px', color:'#2a2c30'}}><h6>{quiz.category}</h6></div>
	    			<div style={{marginTop:'10px', fontSize:'14px', color:'#2a2c30'}} >{quiz.question}</div>
	    		</div>
	    		{randomized.map((option, index) => {
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
                    onClick={async (e) => await checkMarked(e)} 
                    style={{borderRadius:'25px',backgroundColor:'#3f2c90',borderColor:'#3f2c90'}}
                >
                    {text}
                </Button>
	        </form>
            </div>
	    );
	}
}