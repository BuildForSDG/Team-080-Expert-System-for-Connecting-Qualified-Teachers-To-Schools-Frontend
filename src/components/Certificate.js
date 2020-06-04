// Certificate.jsx
import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { throws } from 'assert';
import DatePicker from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";

class Certificate extends Component {

    state = {
        startDate: new Date(),
        endDate: new Date()
    };
    handleChange = date => {
        this.setState({
            startDate: date,
            endDate: date
        });
    };
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        
        const { values } = this.props


        return (
            <Form color='blue' >
                <h3 className="ui centered">Add Education</h3>
                <p>Adding your education and verifying your certificates with us will increase your chance of getting hired</p>
                <Form.Field>

                    <input placeholder='Degree Type'
                        onChange={this.props.handleChange('age')}
                        defaultValue={values.age}
                    />
                </Form.Field>
                <Form.Field>

                    <input placeholder='Institution'
                        onChange={this.props.handleChange('city')}
                        defaultValue={values.city}
                    />
                </Form.Field>
        
                <Form.Field>
                    <label>Start Date</label>
                    <DatePicker
                        
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                    />
                </Form.Field>
            

            
                <Form.Field>
                    <label>End Date</label>
                    <DatePicker
                    
                        selected={this.state.endDate}
                        onChange={this.handleChange}
                    />
               </Form.Field>
              
               
               
                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.saveAndContinue}>Save And Continue </Button>
            </Form>
        )
    }
}

export default Certificate;