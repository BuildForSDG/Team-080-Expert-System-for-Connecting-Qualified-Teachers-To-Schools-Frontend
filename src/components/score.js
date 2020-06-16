import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';




class Score extends React.Component {
	
    constructor(props){
        super(props);
    }


    render() {

    	const { quizes } = this.props.quizes;
    	let end = this.props.end;
    	let score = this.props.score;
    	let count = this.props.count;
    	console.log(`count is ${count}, score is ${score}`)


        return (
            <div style={{backgroundColor:'#f5f7fb', height:'800px', padding:'15px'}} >
                <div className="quiz-head">
                    <div style={{ width:'35%'}}>
                        <Link to="/assessment" style={{ textDecoration: 'none'}}>
                            <div className="previousLink">
                                <p style={{fontSize:'14px', fontWeight: 500, color:'#7e8c95'}} >Take Another Test</p>
                            </div>
                        </Link>
                    </div>

                    <div className="quiz-number">{end === 1 ? 0 : end} of {quizes ? quizes.length : 0}</div>
                    <div className="timer">Timer</div>
                </div>
                
                <div className="score">
                   <CircularProgressbar value={score} text={`${score}%`} />
                </div>
                
            </div>
        );
    }   
}



export default Score;