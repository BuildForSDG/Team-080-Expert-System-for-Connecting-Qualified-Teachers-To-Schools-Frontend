import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";



class SchoolDate extends Component {
	constructor(props){
		super(props);
		this.state = {
			start: null,
			end: null
		}

		this.startDate = this.startDate.bind(this);
		this.endDate = this.endDate.bind(this);
	}

	startDate(date){
		this.setState({start: date });
	}

	endDate(date){
		this.setState({end: date });
	}

	render() {
		return (
		  	<Row className="form-group" style={{marginTop: '30px'}}>
			  	<Col className="col-sm-3">
				    <DatePicker
				      onChange={date => this.startDate(date)}
				      placeholderText="Select start date"
				    />
			    </Col>

			    <Col className="col-sm-3">
				    <DatePicker
				      onChange={date => this.endDate(date)}
				      minDate={this.state.end}
				      placeholderText="Select end date"
				    />
			    </Col>
		    </Row>
		);
	}
}

export default SchoolDate;