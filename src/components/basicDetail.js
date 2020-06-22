import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Form, Errors } from 'react-redux-form';
//import { isEmail, isEmpty } from 'validator';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const passwordsMatch = (vals) => vals.password === vals.confirmPassword;


class BasicDetails extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitFailed = this.handleSubmitFailed.bind(this);
        this.state = {error: ''}
    }

    handleSubmit(reguser) {
        
        //console.log('reguser', reguser.values)
        if (reguser.firstname !== '' && reguser.lastname !== ''
        	&& reguser.email !== '' && reguser.phonenumber !== ''
        	&& reguser.password !== '' && reguser.confirmpassword !== '' 
            && reguser.country !== '' && reguser.state !== '' 
            && reguser.city !== '' && reguser.gender !== '' ) 
        {
        	//console.log("Current State is: " + JSON.stringify(reguser.firstname));
        	this.props.postNewUser(reguser);
        	//this.props.resetCreateUserForm();
        }
        
        else this.setState({error: 'Empty field(s) detected!'});
            setTimeout(() => {this.setState({error: ''})},5000);
            return false;
    }


    handleSubmitFailed(reguser) {
	    // logs form-level errors
	    console.log('reguser form', reguser.$form.errors);

	    // logs errors for user.email
	    //console.log(reguser.email.errors);
	 }


    render() {

    	//const { firstname, lastname, email, password, gender, jobrole, dept, address, status } = this.props.reguser;

        return(
            <div className="container">
                <div className="row">

                    <div className="steps" >
                        <div className="step-1" 
                            style={{ width: '33%', height: '82px', paddingTop: '20px', paddingLeft: '15px',
                              opacity: 0.3, borderRadius: '9px 0 0 9px', backgroundColor: '#3f2c90'
                        }}>
                            <div style={{ fontSize: '12px', fontWeight: 500, color: '#d2d2d2'}} >STEP 01</div>
                            <div style={{fontSize: '14px', fontWeight: 500, color: '#e6e6e6'}}>Basic Details</div>
                        </div>
                        <div className="step-2"
                            style={{width: '32%', height: '82px', paddingTop: '20px', paddingLeft: '15px'}} >
                            <div  style={{fontSize: '12px', fontWeight: 500, color: '#d2d2d2'}}>STEP 02</div>
                            <div style={{fontSize: '14px', fontWeight: 500, color: '#e6e6e6'}}>Education</div>
                        </div>
                        <div className="step-3"
                            style={{width: '32%', height: '82px', paddingTop: '20px', paddingLeft: '15px'}}>
                            <div  style={{fontSize: '12px', fontWeight: 500, color: '#d2d2d2'}}>STEP 03</div>
                            <div style={{fontSize: '14px', fontWeight: 500, color: '#e6e6e6'}}>Assessment</div>
                        </div>
                    </div>

                    <div className="col-12">
                        <h4 style={{fontWeight: 900, color: '#002152', marginTop:'25px'}}>Basic Details</h4>
                        <h6 style={{color:'#8e98aa'}} >Please fill some of the details to get started</h6>
                    </div>
                </div>
                
                    
                <div className="col-sm-12">
                    <Form model="reguser" onSubmit={(reguser) => this.handleSubmit(reguser)}>
                        <Row className="form-group">
                            <Label htmlFor="firstname" md={2}>First Name</Label>
                            <Col md={6}>
                                <Control.text model=".firstname" id="firstname" name="firstname"
                                    placeholder="First Name" className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                     />
                                <Errors className="text-danger" model=".firstname" show="touched"
                                    messages={{
                                        required: 'This field is required, ',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                 />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="lastname" md={2}>Last Name</Label>
                            <Col md={6}>
                                <Control.text model=".lastname" id="lastname" name="lastname"
                                    placeholder="Last Name" className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                     />
                                <Errors className="text-danger" model=".lastname" show="touched"
                                    messages={{
                                        required: 'This field is required, ',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                 />
                            </Col>
                        </Row>
                        
                        <Row className="form-group">
                            <Label htmlFor="email" md={2}>Email</Label>
                            <Col md={6}>
                                <Control.text model=".email" id="email" name="email" placeholder="Email" className="form-control"
                                    validators={{
                                        required, validEmail
                                    }}
                                     />
                                <Errors className="text-danger" model=".email" show="touched"
                                    messages={{
                                        required: 'Required, ',
                                        validEmail: 'Invalid Email Address'
                                    }}
                                 />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="password" md={2}>Password</Label>
                            <Col md={6}>
                                <Control.text type="password" model=".password" id="password" name="password"
                                    placeholder="Password" className="form-control"
                                    validators={{
                                        required, minLength: minLength(8), maxLength: maxLength(15)
                                    }}
                                     />
                                <Errors className="text-danger" model=".password" show="touched"
                                    messages={{
                                        required: 'Required, ',
                                        minLength: 'Must be greater than 8 characters',
                                        maxLength: 'Must be 15 characters or less',
                                    }}
                                 />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="confirmpassword" md={2}>Confirm Password</Label>
                            <Col md={6}>
                                <Control.text type="password" model=".confirmpassword" id="confirmpassword" name="confirmpassword"
                                    placeholder="Confirm Password" className="form-control"
                                    validators={{
                                        required, passwordsMatch, minLength: minLength(8), maxLength: maxLength(15)
                                    }}
                                     />
                                <Errors className="text-danger" model=".confirmpassword" show="touched"
                                    messages={{
                                        required: 'Required, ',
                                        passwordsMatch: "Passwords don't matched",
                                        minLength: 'Must be greater than 8 characters',
                                        maxLength: 'Must be 15 characters or less',
                                    }}
                                 />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="phonenumber" md={2}>Phone Number</Label>
                            <Col md={6}>
                                <Control.text model=".phonenumber" id="phonenumber" name="phonenumber"
                                    placeholder="Phone Number"
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(50)
                                    }}
                                     />
                                <Errors className="text-danger" model=".phonenumber" show="touched"
                                    messages={{
                                        required: 'This field is required, ',
                                        minLength: 'Must be greater than 3 characters',
                                        maxLength: 'Must be 50 characters or less'
                                    }}
                                 />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="country" md={2}>Country</Label>
                            <Col md={6}>
                                <Control.select model=".country" name="country" className="form-control">
                                    <option></option>
                                    <option>Nigeria</option>
                                    <option>Ghana</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="state" md={2}>State</Label>
                            <Col md={6}>
                                <Control.text model=".state" id="state" name="state"
                                    placeholder="State"
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(50)
                                    }}
                                     />
                                <Errors className="text-danger" model=".state" show="touched"
                                    messages={{
                                        required: 'This field is required, ',
                                        minLength: 'Must be greater than 3 characters',
                                        maxLength: 'Must be 50 characters or less'
                                    }}
                                 />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="city" md={2}>City</Label>
                            <Col md={6}>
                                <Control.text model=".city" id="city" name="city"
                                    placeholder="City"
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(50)
                                    }}
                                     />
                                <Errors className="text-danger" model=".city" show="touched"
                                    messages={{
                                        required: 'This field is required, ',
                                        minLength: 'Must be greater than 3 characters',
                                        maxLength: 'Must be 50 characters or less'
                                    }}
                                 />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="gender" md={2}>Gender</Label>
                            <Col md={6}>
                                <Control.select model=".gender" name="gender"className="form-control">
                                    <option></option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </Control.select>
                            </Col>
                        </Row>
                        
                        
                        <Row className="form-group">
                            <Col className="col-sm-6">
                                <Link to="/welcome" style={{ textDecoration: 'none', color:'black', marginTop:'35px'}}>
                                    <div className="previousLink" style={{ marginTop:'50px'}}>
                                        <p style={{fontSize:'14px', fontWeight: 500, color:'#7e8c95'}} >Back</p>
                                    </div>
                                </Link>
                            </Col>
                            <Col className="col-sm-6">
                                <Link to="/education">
                                    <Button
                                        style={{
                                                width: '122px',
                                                height: '50px',
                                                float: 'right',
                                                marginTop: '35px',
                                                opacity: 0.59,
                                                borderRadius: '25px',
                                                borderColor: '#3f2c90',
                                                backgroundColor: '#3f2c90'
                                            }}
                                        className="nextbuttn" type="button">
                                        Next Step
                                    </Button>
                                </Link>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        );
    }

}

export default BasicDetails;