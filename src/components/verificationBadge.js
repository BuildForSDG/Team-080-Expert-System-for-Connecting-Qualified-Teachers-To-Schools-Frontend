import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardImg } from 'reactstrap';
import verify from '../assets/verify.png';




export default function VeriBadge (props) {

	return(
		<div className="col-12 col-md-7">
			<div className="verify">
				<div className="col-9 cardtext">
					<div style={{fontWeight:'16px',fontWeight:'bold',color:'#ffff'}}>
						{
							props.profileScore < 70 || props.score < 80 ?
								"Keep it up and get Verified"
							:
								"You are Verified"
						}
					</div>
					<div style={{fontSize:'12px',opacity:0.6,color:'#ffff'}}>
						{ 
							props.profileScore < 70 || props.score < 80 ? 
								"Get at least 70% on Profile Completion and 80% on Assessment"
							: 
								"Your profile is now made available to Schools for contact"
						}
					</div>
				</div>
				<div className="col-3 cardimg">
					<img src={verify} alt="verified badge" />
				</div>
			</div>
		</div>
	);
}