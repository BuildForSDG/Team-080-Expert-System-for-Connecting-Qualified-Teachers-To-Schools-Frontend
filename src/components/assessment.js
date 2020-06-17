import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import assess from '../assets/assess.jpg';
import { Button, Col, Row } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';
import SubjectAndLevel from './subjectAndLevel';







class Assessment extends Component {

    constructor(props){
        super(props);

        this.callApi = this.callApi.bind(this);
    }

    callApi(url){
        this.props.fetchQuiz(url)
    }
    

    render() {
        return(
            <div className="login-page" >
                <div className="steps" >
                    <div className="step-1" 
                        style={{ width: '32%', height: '82px', paddingTop: '20px', paddingLeft: '15px'}}>
                        <div style={{ fontSize: '12px', fontWeight: 500, color: '#d2d2d2'}} >STEP 01</div>
                        <div style={{fontSize: '14px', fontWeight: 500, color: '#e6e6e6'}}>Basic Details</div>
                    </div>
                    <div className="step-2"
                        style={{width: '32%', height: '82px', paddingTop: '20px', paddingLeft: '15px'}} >
                        <div  style={{fontSize: '12px', fontWeight: 500, color: '#d2d2d2'}}>STEP 02</div>
                        <div style={{fontSize: '14px', fontWeight: 500, color: '#e6e6e6'}}>Certificates</div>
                    </div>
                    <div className="step-3"
                        style={{width: '36%', height: '82px', paddingTop: '20px', paddingLeft: '15px',
                            opacity: 0.3, borderRadius: '0 9px 9px 0', backgroundColor: '#3f2c90'}}>
                        <div  style={{fontSize: '12px', fontWeight: 500, color: '#d2d2d2'}}>STEP 03</div>
                        <div style={{fontSize: '14px', fontWeight: 500, color: '#e6e6e6'}}>Assessment</div>
                    </div>
                </div>

                <div className="assess-icon" style={{marginTop: '90px'}} >
                    <img style={{width: '178px'}} src={assess} alt="assessment icon" />

                    <h4 style={{color:'#002152', marginTop:'60px', marginBottom:'20px', fontWeight:900}} >Assessment</h4>

                    <div className="assessment-text">
                        <p>Show the Schools what you can do and distinguish yourself from others</p>

                        <p>The Test will only take 30-40 minutes of your time. You need to score at least 80% to pass. Good luck!
                        </p>
                    </div>

                    <SubjectAndLevel callApi={this.callApi} clearQuizState={this.props.clearQuizState} 
                                    subjectlevel={this.props.subjectlevel} clearQuizCount={this.props.clearQuizCount}
                                    resetScore={this.props.resetScore} />
                </div>

                <Row className="form-group" style={{padding:'20px', marginTop:'130px'}} >
                    <Col className="col-sm-5">
                        <Link to="/education" style={{ textDecoration: 'none', color:'black', marginTop:'35px'}}>
                            <div className="previousLink" style={{ marginTop:'50px'}}>
                                <p style={{fontSize:'14px', fontWeight: 500, color:'#7e8c95'}} >Previous Step</p>
                            </div>
                        </Link>
                    </Col>
                    <Col className="col-sm-5">
                        <Link to="/">
                            <Button className="nextbuttn" type="button">
                                Skip Step
                            </Button>
                        </Link>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default Assessment;