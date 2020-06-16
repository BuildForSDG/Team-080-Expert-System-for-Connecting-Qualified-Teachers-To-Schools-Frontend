import React, { Component } from 'react';
import { Button, Label, Col, Row } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';
import { Link, withRouter } from 'react-router-dom';




const required = (val) => val && val.length;


class SubjectAndLevel extends Component {

	constructor(props){
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
		this.disableAssessmentButton = this.disableAssessmentButton.bind(this);
	}


	handleSubmit(subjectlevel) {
		event.preventDefault();

	    let subject = parseInt(subjectlevel.subject);
	    let level = subjectlevel.level;

		const url = `https://opentdb.com/api.php?amount=5&category=${subject}&difficulty=${level}&type=multiple`;
		console.log('url ', url)

		this.props.clearQuizState();
		this.props.clearQuizCount();
		this.props.resetScore();
		this.props.callApi(url);
		this.props.history.push('/quiz');	
	}

	disableAssessmentButton() {
		console.log('disable called')
		let subject = this.props.subjectlevel.subject;
		let level = this.props.subjectlevel.level;
		return subject && level ? false : true;
	}

	render(){

		return(
			<Form model="subjectlevel" onSubmit={(subjectlevel) => this.handleSubmit(subjectlevel)}>
				<Row className="form-group">
	                <Col md={12}>
	                    <Control.select 
	                    	model=".subject" 
	                    	name="subject" 
	                    	className="form-control"
	                    	validators={{required}}
                    	>
	                        <option value="" >Select Subject</option>
	                        <option value="23">History</option>
	                        <option value="22">Geography</option>
	                        <option value="18">Nature Science</option>
	                        <option value="10">Computer Science</option>
	                        <option value="21">Sports</option>
	                        <option disabled>Mathematics</option>
	                        <option disabled>English</option>
	                        <option disabled>Literature in English</option>
	                        <option disabled>Introductory Technology</option>
	                        <option value="9">General Knowledge</option>
	                        <option disabled>Physics</option>
	                        <option disabled>Chemistry</option>
	                        <option disabled>Social Studies</option>
	                        <option disabled>Accounting</option>
	                    </Control.select>
	                    <Errors className="text-danger" model=".institution" show="touched"
                            messages={{
                                required: 'This field is required'
                            }}
                        />
	                </Col>
	            </Row>
	            <Row className="form-group">
	                <Col md={12}>
	                    <Control.select 
	                    	model=".level" 
	                    	name="level" 
	                    	className="form-control"
	                    	validators={{required}} 
                    	>
	                        <option value="" >Select Level</option>
	                        <option value="easy">Montessori</option>
	                        <option value="easy">Nursery</option>
	                        <option value="easy">Primary 1</option>
	                        <option value="easy">Primary 2</option>
	                        <option value="easy">Primary 3</option>
	                        <option value="easy">Primary 4</option>
	                        <option value="medium">Primary 5</option>
	                        <option value="medium">Primary 6</option>
	                        <option value="medium">JSS 1</option>
	                        <option value="medium">JSS 2</option>
	                        <option value="hard">JSS 3</option>
	                        <option value="hard">SS 1</option>
	                        <option value="hard">SS 2</option>
	                        <option value="hard">SS 3</option>
	                    </Control.select>
	                    <Errors className="text-danger" model=".institution" show="touched"
                            messages={{
                                required: 'This field is required'
                            }}
                        />
	                </Col>
	            </Row>
	            <Row className="form-group">
                    <Col className="col-sm-12">
                        <div style={{marginTop:'15px'}} >
                        		<Button className="take-assessment" disabled={this.disableAssessmentButton()} type="submit">
                        			Take Assessment
                        		</Button> 
                		</div>
                    </Col>
                </Row>

	    	</Form>
		);
	}
}

export default withRouter(SubjectAndLevel);