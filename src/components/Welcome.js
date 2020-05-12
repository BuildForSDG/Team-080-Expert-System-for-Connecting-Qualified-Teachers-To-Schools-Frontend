import React, { Component } from 'react';
import teacher from '../banner/teacher.png';
import linkedin from '../banner/linkedin.png'
//import { NavLink } from 'react-router-dom';


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
                    <div className="Sign-in-with-LinkedI">Sign in with LinkedIn</div>
                </div>
                <div className="create">Create an Account</div>
            </div>
        );
    }
}

export default Welcome;