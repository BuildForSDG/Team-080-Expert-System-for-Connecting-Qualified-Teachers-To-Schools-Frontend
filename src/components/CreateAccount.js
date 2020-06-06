import React, { Component } from 'react';
//import { NavLink, Link } from 'react-router-dom';
//import { Button,Form } from 'reactstrap';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import axios from 'axios';
//import Swal from 'sweetalert2';




class CreateAccount extends Component {
    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeRegisterFirstName = this.onChangeRegisterFirstName.bind(this);
        this.onChangeRegisterLastName = this.onChangeRegisterLastName.bind(this);
        this.onChangeRegisterEmail = this.onChangeRegisterEmail.bind(this);
        this.onChangeRegisterPassword = this.onChangeRegisterPassword.bind(this);
        this.onChangeRegisterPasswordConfirmation = this.onChangeRegisterPasswordConfirmation.bind(this);
        this.onChangeRegisterGender = this.onChangeRegisterGender.bind(this);
        this.onChangeRegisterCountry = this.onChangeRegisterCountry.bind(this);
        this.onChangeRegisterState = this.onChangeRegisterState.bind(this);
        this.onChangeRegisterPhoneNumber = this.onChangeRegisterPhoneNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
            first_name:'',
            last_name: '',
            email: '',
            phonenumber:'',
            password:'',
            password_confirmation:'',
            gender:'',
            country_id:'',
            state_id:'',
        }
      }
    
      onChangeRegisterFirstName(e) {
        this.setState({first_name: e.target.value})
      }
    
      onChangeRegisterLastName(e) {
        this.setState({last_name: e.target.value})
      }
    
      onChangeRegisterEmail(e) {
        this.setState({email: e.target.value})
      }

      onChangeRegisterPassword(e) {
        this.setState({password: e.target.value})
      }

      onChangeRegisterPasswordConfirmation(e) {
        this.setState({password_confirmation: e.target.value})
      }
    
      onChangeRegisterGender(e) {
        this.setState({gender: e.target.value})
      }
    
      onChangeRegisterCountry(e) {
        this.setState({country_id: e.target.value})
      }
      onChangeRegisterState(e) {
        this.setState({state_id: e.target.value})
      }

      onChangeRegisterPhoneNumber(e) {
        this.setState({phonenumber: e.target.value})
      }
    
      onSubmit(e) {
        e.preventDefault()
         const user = {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          email: this.state.email,
          phonenumber: this.state.phonenumber,
          password: this.state.password,
          password_confirmation: this.state.password_confirmation,
          gender: this.state.gender,
          country_id: this.state.country_id,
          state_id: this.state.state_id
        };
        axios.post('http://localhost:8000/api/register/', user,{
          headers: {'Content-Type' : 'application/json'}
        })
          .then(res => {
            localStorage.setItem('usertoken',res.data.token)
          });
        // console.log(`Expense successfully created!`);
        console.log(`first_name: ${this.state.first_name}`);
        // console.log(`Amount: ${this.state.amount}`);
        // console.log(`Description: ${this.state.description}`);
      
  
        this.setState({first_name: '', last_name: '', email: '',phonenumber: '', gender: '', country_id: '',state_id: '', password: '',password_confirmation:''})
        this.props.nextStep()
      }
    
    render() {
        
        return (
            <div className="container" >
                <div className="steps" >
                    <div className="step-1"
                        style={{
                            width: '33%', height: '82px',
                            paddingTop: '20px', paddingLeft: '15px',
                            opacity: 0.3, borderRadius: '9px 0 0 9px',
                            backgroundColor: '#3f2c90'
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
        
            
             <Form.Group controlId="FirstName">
            
                <Form.Control placeholder="First Name" type="text" value={this.state.first_name} onChange={this.onChangeRegisterFirstName}/>
             </Form.Group>
            
            
            
            
             <Form.Group controlId="LastName">
                
                        <Form.Control placeholder="Last Name" type="text" value={this.state.last_name} onChange={this.onChangeRegisterLastName}/>
             </Form.Group>
            
             <Form.Group controlId="Email">
                
                <Form.Control placeholder="Email" type="email" value={this.state.email} onChange={this.onChangeRegisterEmail}/>
             </Form.Group>
            
            
            
            
             <Form.Group controlId="PhoneNumber">
                
                        <Form.Control placeholder="Phone Number" type="number" value={this.state.phonenumber} onChange={this.onChangeRegisterPhoneNumber}/>
             </Form.Group>
        
            

        <Form.Group controlId="Password">
          
                <Form.Control  placeholder="Choose a Password" type="password" value={this.state.password} onChange={this.onChangeRegisterPassword}/>
        </Form.Group>

        <Form.Group controlId="PasswordConfirmation">
          
                <Form.Control  placeholder="Confirm Password" type="password" value={this.state.password_confirmation} onChange={this.onChangeRegisterPasswordConfirmation}/>
        </Form.Group>
        <Form.Group controlId="State">
        <select value={this.state.state_id} onChange={this.onChangeRegisterState}>
                            <option value="1">Lagos</option>
                            <option value="lime">Abuja</option>
                            <option selected value="">Select State</option>
                            <option value="mango">Ogun</option>
                        </select>
                    </Form.Group>

                    <Form.Group controlId="Country">
                        <select value={this.state.country_id} onChange={this.onChangeRegisterCountry}>
                            <option value="grapefruit">Nigeria</option>
                            <option value="1">United State Of America</option>
                            <option selected value="">Select Country</option>
                            <option value="mango">Japan</option>
                        </select>
                    </Form.Group>

                    <Form.Group controlId="Gender">
                        <select value={this.state.gender} onChange={this.onChangeRegisterGender}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option selected value="">Select Gender</option>

                        </select>
                    </Form.Group>
       
        <Button id="id" type="submit" >Next Step
        
        </Button>
      </Form>
      <br></br>
      <br></br>

      </div>
    </div>
                      
                 
        );
    }
}

export default CreateAccount;