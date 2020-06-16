import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button, Label, Col, Row } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';
import DropZone from './dropZone';
//import SchoolDate from './datePicker';



const required = (val) => val && val.length;


class Education extends Component {
    
    constructor(props) {
        super(props);

        this.sendFiles = this.sendFiles.bind(this);
    }

    sendFiles(files) {
        this.props.getFiles(files)
    }

    render() {

        

        return(
            <div className="container" >
                <div className="row">
                    <div className="steps" >
                        <div className="step-1" 
                            style={{ width: '33%', height: '82px', paddingTop: '20px', paddingLeft: '15px'}}>
                            <div style={{ fontSize: '12px', fontWeight: 500, color: '#d2d2d2'}} >STEP 01</div>
                            <div style={{fontSize: '14px', fontWeight: 500, color: '#e6e6e6'}}>Basic Details</div>
                        </div>
                        <div className="step-2"
                            style={{width: '32%', height: '82px', paddingTop: '20px', paddingLeft: '15px',
                                opacity: 0.3, backgroundColor: '#3f2c90'}} >
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
                        <h4 style={{fontWeight: 900, color: '#002152', marginTop:'25px'}}>Add Education</h4>
                        <p style={{color:'#8e98aa', fontSize:'14px'}} >Adding your education and verifying your certificates 
                            with us will increase your chance of getting hired</p>
                    </div>


                    <div className="col-12 col-md-9" style={{marginTop:'20px'}}>
                        <Form model="education" onSubmit={(education) => this.handleSubmit(education)}>
                            <Row className="form-group">
                                <Label htmlFor="certificatetype" md={2}>Certificate Type</Label>
                                <Col md={8}>
                                    <Control.text model=".certificatetype" id="certificatetype" name="certificatetype"
                                        placeholder="Certificate Type" className="form-control" validators={{required}}/>
                                    <Errors className="text-danger" model=".certificatetype" show="touched"
                                        messages={{
                                            required: 'This field is required'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="institution" md={2}>Institution</Label>
                                <Col md={8}>
                                    <Control.text model=".institution" id="institution" name="institution"
                                        placeholder="Last Name" className="form-control"
                                        validators={{required}}
                                         />
                                    <Errors className="text-danger" model=".institution" show="touched"
                                        messages={{
                                            required: 'This field is required'
                                        }}
                                     />
                                </Col>
                            </Row>
                            
                            <Row className="form-group" style={{marginTop: '30px'}}>
                                <Col className="col-sm-5">
                                    <Control.text model=".startdate" id="startdate" name="startdate" placeholder="Start Date" className="form-control"
                                        validators={{required}}
                                         />
                                    <Errors className="text-danger" model=".startdate" show="touched"
                                        messages={{
                                            required: 'Start date is required'
                                        }}
                                     />
                                </Col>
                                

                                <Col className="col-sm-5">
                                    <Control.text model=".enddate" id="enddate" name="enddate" placeholder="End Date" className="form-control"
                                        validators={{required}}/>
                                    <Errors className="text-danger" model=".enddate" show="touched"
                                        messages={{
                                            required: 'End date is required'
                                        }}
                                     />
                                </Col>
                                
                            </Row>

                            <Row className="form-group" style={{marginTop: '30px'}} >
                                <Col md={10}>
                                    <DropZone sendFiles={this.sendFiles} /> 
                                </Col>
                            </Row>
                            
   
                            
                            <Row className="form-group">
                                <Col className="col-sm-5">
                                    <Link to="/create-account" style={{ textDecoration: 'none', color:'black', marginTop:'35px'}}>
                                        <div className="previousLink" style={{ marginTop:'50px'}}>
                                            <p style={{fontSize:'14px', fontWeight: 500, color:'#7e8c95'}} >Previous Step</p>
                                        </div>
                                    </Link>
                                </Col>
                                <Col className="col-sm-5">
                                    <Link to="/assessment">
                                        <Button className="nextbuttn" type="button">
                                            Next Step
                                        </Button>
                                    </Link>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Education;