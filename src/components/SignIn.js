import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import group from '../assets/group.png';
import { FiArrowLeft } from 'react-icons/fi';

import { Button, Form } from 'reactstrap';
import { useHistory, useLocation } from 'react-router-dom';

const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

export default function SignIn(props) {

    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };



    const handleLogin = async (event) => {

        event.preventDefault();
        //toggleModal();
        if (validEmail(email) && password !== null) {
            console.log(`email: ${email}, password: ${password}`)
            await props.loginUser(email, password);
            return localStorage.getItem('email') ? 
            setTimeout(() => {
                history.replace(from);
            }, 2000) : null;
        }
        else return console.log('invalid email');
    }

    

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
                <p>Welcome!</p>
            </div>
            <div className="sign-in-form">
                <p>Hello there, Sign in to continue!</p>
                <Form>
                    <input type="text" className="form-control" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                    <input type="password" className="form-control" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                </Form>
                <p className="forget-password"><Link to="#" style={{ textDecoration: 'none', color:'#3f2c90' }}>Forget Password?</Link></p>
                <Button
                    style={{
                        borderRadius: '25px',
                        borderColor: '#3f2c90',
                        backgroundColor: '#3f2c90',
                        marginBottom: '150px'
                    }} 
                    className="sign-in-button" type="button" onClick={handleLogin} >
                <span className="fa fa-sign-in fa-lg"></span> Sign in
                {props.auth.isLoading ?
                    <span className="fa fa-spinner fa-pulse fa-fw"></span>
                    : null
                }
                </Button>
                <div className="already-have-an-account"><p>Already have an account? <span><Link to="/create-account" style={{ textDecoration: 'none', color:'#3f2c90' }}>Sign up</Link></span></p></div>
            </div>
        </div>
    );   
}


