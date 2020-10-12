import React, { Component } from 'react';
import { Card, CardBody, CardSubtitle, CardText } from 'reactstrap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



class DashboardScores extends Component {

	render() {

		let profileScore = this.props.profileScore;
		let score = this.props.score;

		return(
			<>
				<div className="col-6 col-md-3 card-div">
					<Card className="card">
						<CardBody className="profilescore" >
							<div style={{width:'80%'}}>
								<CircularProgressbar 
									value={profileScore} 
									text={`${profileScore}%`}
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
							<CardSubtitle style={{color:'#7e8c95', fontSize:'12px', marginTop:'3px', marginBottom:'15px'}} >Profile Completion</CardSubtitle>
							<CardSubtitle style={{color:'#3f2c90', fontSize:'12px', fontWeight:500}}>Update Profile</CardSubtitle>
						</CardBody>
					</Card>
				</div>
				
				{ this.props.subject != null ?

					<div className="col-6 col-md-3 card-div">
						<Card className="card">
							<CardBody className="profilescore" >
								<div style={{width:'80%'}}>
								{
									score >= 80 ?
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
									:
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
								}
								</div>
								<CardSubtitle style={{color:'#7e8c95', fontSize:'12px', marginTop:'3px', marginBottom:'15px'}} >Assessment Score</CardSubtitle>
								<CardSubtitle 
									style={{
										color:'#3f2c90', 
										fontSize:'12px', 
										fontWeight:500
									}}
								>
									{ score == 100 ? "Weldone Expert" : "Take Assessment" }
								</CardSubtitle>
							</CardBody>
						</Card>
					</div>
					:
					null
				}
			</>
		);
	}
}

export default DashboardScores;
