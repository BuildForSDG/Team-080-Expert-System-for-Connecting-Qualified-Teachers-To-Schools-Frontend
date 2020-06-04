import React, { Component } from 'react';
import teacher from '../banner/teacher.png';
import linkedin from '../banner/linkedin.png'
import { NavLink, Link } from 'react-router-dom';


class Welcome extends Component {
    

    render() {
        return(
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
                <Link to="/createAccount" className="create">Create an Account</Link>
                <div className="sign-in"><span className="Already-have-an-acco">Already have an account?</span> <NavLink to="/signin" className="signin">Sign in</NavLink></div>
            </div>
        );
    }
}

export default Welcome;