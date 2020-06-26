import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
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
        let subject = this.props.subject;
    	console.log(`count is ${count}, score is ${score}`)
        console.log(`subject is ${subject}`)


        return (
            <div style={{backgroundColor:'#f5f7fb', height:'1000px', padding:'15px'}} >
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
                
                {
                    score >= 80 ?
                    <div>
                        <div className="score-container">
                            <div className="score">
                                <CircularProgressbar 
                                    value={score} 
                                    text={`${score}%`}
                                    styles={buildStyles({
                                        
                                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                        strokeLinecap: 'butt',
                                     
                                        // Text size
                                        textSize: '17px',
                                     
                                        // Colors
                                        pathColor: `#00d656`,
                                        textColor: '#2a2c30',
                                        trailColor: '#d6d6d6',
                                        backgroundColor: '#ffffff',
                                    })} 
                                />
                            </div>
                        </div>
                        <div className="score-message">
                            <p style={{color:'#3f2c90', fontSize:'18px', fontWeight:'500'}} >Well Done!</p>
                            <p style={{color:'#2a2c30', fontSize:'24px', fontWeight:'500'}} >You’re an Expert </p>
                            <p style={{color:'#8e98aa', fontSize:'16px', fontWeight:'500'}} >You’ve just passed our tests</p>
                            <div className="finish-div"><Link to="/dashboard" style={{width:'100%'}}><Button className="finish">Finish</Button></Link></div>

                        </div>
                    </div>
                    :
                    <div>
                        <div className="score-container">
                            <div className="score" >
                                <CircularProgressbar 
                                    value={score} 
                                    text={`${score}%`}
                                    styles={buildStyles({
                                        
                                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                        strokeLinecap: 'butt',
                                     
                                        // Text size
                                        textSize: '17px',
                                     
                                        // Colors
                                        pathColor: `#d64c00`,
                                        textColor: '#2a2c30',
                                        trailColor: '#d6d6d6',
                                        backgroundColor: '#ffffff',
                                    })} 
                                />
                            </div> 
                        </div>

                        <div className="score-message"> 
                            <p style={{color:'#3f2c90', fontSize:'18px', fontWeight:'500'}} >Fair Result!</p>
                            <p style={{color:'#2a2c30', fontSize:'24px', fontWeight:'500'}} >Try Again</p>
                            <p className="score-message3" style={{color:'#8e98aa', fontSize:'16px', fontWeight:'500'}} >
                                Unfortunately, you didnt pass this time, but not to worry, try and brush up your
                                knowledge and try agin in 30 days time.
                            </p>
                            <div className="finish-div"><Link to="/dashboard" style={{width:'100%'}}><Button className="finish">Finish</Button></Link></div>
                        </div>
                    </div>
                }   
            </div>
        );
    }   
}



export default Score;