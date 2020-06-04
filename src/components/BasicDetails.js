// BasicDetails.jsx
import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';


class BasicDetails extends Component {

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render() {
        const { values } = this.props;
        return (
            
            <Form >
                
                <h3 className="ui centered">Basic Details</h3>
                <p>Please fill some of your details to get started</p>
                <Form.Field>

                    <input
                        placeholder='First Name'
                        onChange={this.props.handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                </Form.Field>
                <Form.Field>

                    <input
                        placeholder='Last Name'
                        onChange={this.props.handleChange('lastName')}
                        defaultValue={values.lastName}
                    />
                </Form.Field>
                <Form.Field>

                    <input
                        type='email'
                        placeholder='Email'
                        onChange={this.props.handleChange('email')}
                        defaultValue={values.email}
                    />
                </Form.Field>

                <Form.Field>

                    <input
                        placeholder='Phone Number'
                        onChange={this.props.handleChange('mobilenumber')}
                        defaultValue={values.mobilenumber}
                    />
                </Form.Field>

                <Form.Field>

                    <input
                        placeholder='Choose a Password'
                        type='password'
                        onChange={this.props.handleChange('password')}
                        defaultValue={values.password}
                    />
                </Form.Field>

                <Form.Field>
                    <select>
                        <option value="grapefruit">Lagos</option>
                        <option value="lime">Abuja</option>
                        <option selected value="">Select State</option>
                        <option value="mango">Ogun</option>
                    </select>
                </Form.Field>

                <Form.Field>
                    <select>
                        <option value="grapefruit">Nigeria</option>
                        <option value="lime">United State Of America</option>
                        <option selected value="">Select Country</option>
                        <option value="mango">Japan</option>
                    </select>
                </Form.Field>

                <Form.Field>
                    <select>
                        <option value="grapefruit">Male</option>
                        <option value="lime">Female</option>
                        <option selected value="">Select Gender</option>
                        
                    </select>
                </Form.Field>
                <Button id="id" onClick={this.saveAndContinue}>Next Step </Button>
            </Form>
        )
    }
}

export default BasicDetails;