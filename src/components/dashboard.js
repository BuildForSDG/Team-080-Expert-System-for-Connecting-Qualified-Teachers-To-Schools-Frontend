import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import VeriBadge from './verificationBadge';
import DashboardScores from './dashboardScores';
import { FaChevronRight } from 'react-icons/fa';
import { GoVerified, GoUnverified } from "react-icons/go";
import SideBar from "./slidemenu";





class Dashboard extends Component {
	constructor(props){
		super(props);
		this.state = {
			profileScore: 80,
			profilePicUrl: null
		}
	}

	render() {

		const email = localStorage.getItem('email') ? localStorage.getItem('email') : 'user@gmail.com';
		let name = localStorage.getItem('name') ? localStorage.getItem('name') : 'Jude Akhator';
		let profilePicUrl = this.props.profilePicUrl;
		let score = this.props.score;
		console.log(`subject is ${this.props.subject}`)

		return(
			<div id="wrapper">
			<SideBar pageWrapId={"dashb"} outerContainerId={"wrapper"} />
				<div className="container dashboard" id="dashb">
					<div className="row">
						<div className="id-div">
							<div className="profile-pic">{profilePicUrl == null ? <FaUser /> : <img alt="pic" />}</div>
							<div style={{color:'#2a2c30', fontSize:'18px'}}>
							<strong>{name} </strong>
							{score >= 80 && this.state.profileScore >= 70 ? <span style={{color:'#2196F3'}}><GoVerified /></span> : <GoUnverified />}
							</div>
							<div style={{color:'#8e98aa', fontSize:'12px', marginBottom:'15px'}}>{email}</div>
						</div>
					</div>
					<hr	/>
					<div className="row">
						<DashboardScores profileScore={this.state.profileScore} profilePicUrl={this.state.profilePicUrl} 
							score={this.props.score} subject={this.props.subject} />
					</div>
					<hr/>
					<div className="row">
						<VeriBadge profileScore={this.state.profileScore} score={this.props.score} />
					</div>
					<div className="row">
						<div className="col-12" style={{marginTop:'35px'}}>
							<h5 style={{color:'#2a2c30',marginBottom:'20px'}}>Job Postings</h5>
							<div className="col-12 col-md-7 jobs">
								<div className="col-10">
									<p style={{fontSize:'14px',color:'#2a2c30'}}>Checkout Job postings from Schools and Apply to anyone you fit in. </p>
									<p style={{fontSize:'13px',color:'#7e8c95'}}>Note: Being verified increases your chances of getting the Job.</p>
								</div>
								<div className="col-2 chevron">
									<Link to="/" style={{ textDecoration: 'none', color:'black' }} >
										<FaChevronRight />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Dashboard;

