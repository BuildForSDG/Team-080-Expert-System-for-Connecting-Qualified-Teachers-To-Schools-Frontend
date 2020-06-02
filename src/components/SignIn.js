import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import group from '../banner/group.png';
import { FiArrowLeft } from 'react-icons/fi';



class SignIn extends Component {
    

    render() {
        return(
            <div className="login-page" >
                <div className="sign-in-header" >
                    <div className="signIn">
                        <div className="first-div">
                            <Link to="/welcome" style={{ textDecoration: 'none', color:'white' }} ><FiArrowLeft /></Link>
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
                    <form>
                        <input type="text" className="form-control" placeholder="Email" />
                        <input type="password" className="form-control" placeholder="Password" />
                    </form>
                    <p className="forget-password"><Link to="#" style={{ textDecoration: 'none', color:'#3f2c90' }}>Forget Password?</Link></p>
                    <Button className="sign-in-button">Sign in</Button>
                    <div className="already-have-an-account"><p>Already have an account? <span><Link to="/welcome" style={{ textDecoration: 'none', color:'#3f2c90' }}>Sign up</Link></span></p></div>
                </div>
            </div>
        );
    }
}

export default SignIn;