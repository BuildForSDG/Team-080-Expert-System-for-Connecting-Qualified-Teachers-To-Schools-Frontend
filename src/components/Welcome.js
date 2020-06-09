import React, { Component } from 'react';
import teacher from '../assets/teacher.png';
import linkedin from '../assets/linkedin.png'
import { NavLink, Link } from 'react-router-dom';
import Header from './header';



class Welcome extends Component {
    

    render() {
        return(
            <div>
            <Header />
            <div className="welcome" >
                <div className="teacher_vector" >
                    <img src={teacher} alt="teacher vector" />
                </div>
                <div className="message">
                    <h4>Welcome Teacher</h4>
                    <p className="get_hired">Get ready to get hired by becoming a TeachersTurf Pro</p>
			    </div>
                <div className="rectangle">
                    <span className="linkedin"><img src={linkedin} alt="linkedin logo" /></span> 
                    <div>Sign in with LinkedIn</div>
                </div>
                <Link to="/create-account" className="create" style={{ textDecoration: 'none', color:'white' }}>Create an Account</Link>
                <div className="sign-in"><span className="Already-have-an-acco">Already have an account?</span> <Link to="/signin" className="signin" style={{ textDecoration: 'none', color:'white' }} >Sign in</Link></div>
            </div>
            </div>
        );
    }
}

export default Welcome;