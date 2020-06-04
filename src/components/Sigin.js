// BasicDetails.jsx
import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import teacher from '../banner/teacher.png';


class Sigin extends Component {

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }
    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }

    render() {
        const { values } = this.props;
        return (

            <div className="welcome" >
                <div className="teacher_vector" >
                    <img src={teacher} alt="teacher vector" />
                </div>
                <div className="message">
                    <h4>Sign</h4>
                    
                </div>
               
                    <Form>
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
                            placeholder='Choose a Password'
                            type='password'
                            onChange={this.props.handleChange('password')}
                            defaultValue={values.password}
                        />
                    </Form.Field>

                    <Button id="id" onClick={this.saveAndContinue}>Login </Button>
</Form>
               
            </div>
        )
    }
}

export default Sigin;