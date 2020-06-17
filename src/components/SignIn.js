import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import group from '../assets/group.png';
import { FiArrowLeft } from 'react-icons/fi';
import axios from 'axios';



class SignIn extends Component {
    constructor(props) {
        super(props);

        this.onChangeRegisterEmail = this.onChangeRegisterEmail.bind(this);
        this.onChangeRegisterPassword = this.onChangeRegisterPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            email: '',
            password: '',
        }
    }

    
    onChangeRegisterEmail(e) {
        this.setState({email: e.target.value})
      }

      onChangeRegisterPassword(e) {
        this.setState({password: e.target.value})
      }

    onSubmit(e) {
        e.preventDefault();
        
        this.setState({ error: false });
        const user = 
        {  
            email: this.state.email,
            password: this.state.password
         };
        axios.post('http://localhost:8000/api/login',user,{
            headers: {'Content-Type' : 'application/json'}
        })
        .then(res => {
           
            localStorage.setItem('usertoken',res.data.token)
            console.log(res);
            if(res){
                this.props.history.push('/welcome')
            }
        })
           .catch(error => {
                this.refs.email.value = "";
                this.refs.password.value = "";
                this.setState({ err: true });
                console.log(error);
            });

            this.setState({email: '', password: ''})
    }

    onChange(e) {
        const { first_name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        let error = this.state.err;
        let msg = (!error) ? 'Login Successful' : 'Wrong Credentials';
        let name = (!error) ? 'alert alert-success' : 'alert alert-danger';
        return (
            <div className="login-page" >
                <div className="sign-in-header" >
                    <div className="panel-body">

                        {error != undefined && <div className={name} role="alert">{msg}</div>}
                    </div>
                    <div className="signIn">
                        <div className="first-div">
                            <Link to="/welcome" style={{ textDecoration: 'none', color: 'white' }} ><FiArrowLeft /></Link>
                        </div>
                        <div>
                            <p>Sign in</p>
                        </div>
                    </div>
                    <img className="group-icon" src={group} alt="group header" />
                </div>
                <div className="welcome-back">
                    <p>Welcome Back</p>
                </div>
                <div className="sign-in-form">
                    <p>Hello there, Sign in to continue!</p>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group controlId="Email">
                          

                            
                                <Form.Control placeholder="Email" ref="email"  type="email" value={this.state.email}  className="form-control"  onChange={this.onChangeRegisterEmail} required />
                            
                        </Form.Group>

                        <Form.Group controlId="Password">
                          

                           
                                <Form.Control placeholder="Password" ref="password" type="password"  className="form-control" value={this.state.password}  onChange={this.onChangeRegisterPassword} required />
                            
                        </Form.Group>

                        
                        <div className="form-group">
                                            
                                                <div className="checkbox">
                                                    <label>
                                                        <input type="checkbox" name="remember" /> Remember Me
                                                    </label>
                                                </div>
                                        
                                        </div>

                                        <div className="form-group">
                                            
                                                <Button type="submit" className="sign-in-button">
                                                    Login
                                                </Button>
                                                <div className="already-have-an-account"><p>Already have an account? <span><Link to="/welcome" style={{ textDecoration: 'none', color: '#3f2c90' }}>Sign up</Link></span></p></div>
                                                <li className="forget-password">
                                                    <Link to = "/" style={{ textDecoration: 'none', color: '#3f2c90' }}>Forgot Your Password?</Link>
                                                </li>
                                    
                                        </div>
                    </Form>
                   
                </div>
            </div>
        );
    }
}

export default SignIn;