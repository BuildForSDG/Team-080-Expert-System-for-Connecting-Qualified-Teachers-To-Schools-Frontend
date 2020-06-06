// Certificate.jsx
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { throws } from 'assert';
import DatePicker from "react-datepicker";

import MyUploader from './MyUploader';

import "react-datepicker/dist/react-datepicker.css";

class Certificate extends Component {
    constructor(props) {
        super(props)

         // Setting up functions
         this.onChangeSetDegree = this.onChangeSetDegree.bind(this);
         this.onChangeSetInstitution = this.onChangeSetInstitution.bind(this);

         this.onSubmit = this.onSubmit.bind(this);
    this.state = {
        startDate: new Date(),
        endDate: new Date(),
        degree:'',
        institution:''
    }
}
onChangeSetDegree(e) {
    this.setState({degree: e.target.value})
  }

  onChangeSetInstitution(e) {
    this.setState({institution: e.target.value})
  }


    handleChange = date => {
        this.setState({
            startDate: date,
            endDate: date
         
        });
    };
    onSubmit(e) {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {

        


        return (
            <div className="container" >

                <div className="steps" >
                    <div className="step-1"
                        style={{
                            width: '33%', height: '82px',
                            paddingTop: '20px', paddingLeft: '15px',

                        }}>
                        <div style={{
                            fontSize: '12px', fontWeight: 500,
                            color: '#d2d2d2'
                        }} >STEP 01</div>
                        <div style={{
                            fontSize: '14px', fontWeight: 500,
                            color: '#e6e6e6'
                        }}>Basic Details</div>
                    </div>
                    <div className="step-2"
                        style={{
                            width: '32%', height: '82px',
                            paddingTop: '20px', paddingLeft: '15px',
                            opacity: 0.3, borderRadius: '9px 0 0 9px',
                            backgroundColor: '#3f2c90'

                        }} >
                        <div style={{
                            fontSize: '12px', fontWeight: 500,
                            color: '#d2d2d2'
                        }}>STEP 02</div>
                        <div style={{
                            fontSize: '14px', fontWeight: 500,
                            color: '#e6e6e6'
                        }}>Certificates</div>
                    </div>
                    <div className="step-3"
                        style={{
                            width: '32%', height: '82px',
                            paddingTop: '20px', paddingLeft: '15px'
                        }}>
                        <div style={{
                            fontSize: '12px', fontWeight: 500,
                            color: '#d2d2d2'
                        }}>STEP 03</div>
                        <div style={{
                            fontSize: '14px', fontWeight: 500,
                            color: '#e6e6e6'
                        }}>Assessment</div>
                    </div>




                </div>
                <div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        
            
             <Form.Group controlId="Degree">
            
                <Form.Control placeholder="Degree" type="text" value={this.state.degree} onChange={this.onChangeSetDegree}/>
             </Form.Group>
            
            
            
            
             <Form.Group controlId="Institution">
                
                        <Form.Control placeholder="Institution" type="text" value={this.state.institution} onChange={this.onChangeSetInstitution}/>
             </Form.Group>
            
           

                    <Form.Group>
                        <label>Start Date</label>
                        <DatePicker
                            dateFormat="MM-dd-yyyy"
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                        />
                    </Form.Group>



                    <Form.Group>
                        <label>End Date</label>
                        <DatePicker
                            dateFormat="MM-dd-yyyy"
                            selected={this.state.endDate}
                            onChange={this.handleChange}
                        />
                    </Form.Group>


                   
                      
                    <Button id="previous" onClick={this.back}>Previous</Button>
                    <Button id="next" onClick={this.saveAndContinue}>Next </Button>
                </Form>
                  
        
                </div>
            </div>
        )
    }
}

export default Certificate;