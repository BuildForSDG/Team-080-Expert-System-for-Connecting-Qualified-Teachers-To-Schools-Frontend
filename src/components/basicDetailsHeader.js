import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import BasicDetails from './basicDetail';



class BasicDetailsHeader extends Component {
    

    render() {
        return(
            <div className="login-page" >
                <div className="steps" >
                    <div className="step-1" 
                        style={{ width: '33%', height: '82px',
                          paddingTop: '20px', paddingLeft: '15px',
                          opacity: 0.3, borderRadius: '9px 0 0 9px',
                          backgroundColor: '#3f2c90'
                    }}>
                        <div style={{ fontSize: '12px', fontWeight: 500,
                            color: '#d2d2d2'
                        }} >STEP 01</div>
                        <div style={{fontSize: '14px', fontWeight: 500,
                            color: '#e6e6e6'
                        }}>Basic Details</div>
                    </div>
                    <div className="step-2"
                        style={{width: '32%', height: '82px',
                            paddingTop: '20px', paddingLeft: '15px'
                        }} >
                        <div  style={{fontSize: '12px', fontWeight: 500,
                            color: '#d2d2d2'
                        }}>STEP 02</div>
                        <div style={{fontSize: '14px', fontWeight: 500,
                            color: '#e6e6e6'
                        }}>Certificates</div>
                    </div>
                    <div className="step-3"
                        style={{width: '32%', height: '82px',
                            paddingTop: '20px', paddingLeft: '15px'
                        }}>
                        <div  style={{fontSize: '12px', fontWeight: 500,
                            color: '#d2d2d2'
                        }}>STEP 03</div>
                        <div style={{fontSize: '14px', fontWeight: 500,
                            color: '#e6e6e6'
                        }}>Assessment</div>
                    </div>

                </div>

                <BasicDetails />  
            </div>
        );
    }
}

export default BasicDetailsHeader;