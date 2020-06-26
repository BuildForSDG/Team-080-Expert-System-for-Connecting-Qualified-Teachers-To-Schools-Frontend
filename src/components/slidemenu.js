import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from 'react-router-dom';
import { FaRegUserCircle, FaSearchDollar } from 'react-icons/fa';
import { RiDashboardLine } from "react-icons/ri";
import { MdAssessment } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';


export default props => {

  return (
    <Menu>
      <Link className="menu-item" to="#">
       <span style={{color:'#7e8c95', marginRight:'10px'}}><RiDashboardLine /></span> Dashboard
      </Link>

      <Link className="menu-item" to="/">
        <span style={{color:'#7e8c95', marginRight:'10px'}}><FaRegUserCircle /></span> Profile
      </Link>

      <Link className="menu-item" to="/assessment">
        <span style={{color:'#7e8c95', marginRight:'10px'}}><MdAssessment /></span> Assessment
      </Link>

      <Link className="menu-item" to="/">
        <span style={{color:'#7e8c95', marginRight:'10px'}}><FaSearchDollar /></span> Jobs
      </Link>

      <Link className="menu-item" to="/">
        <span style={{color:'#7e8c95', marginRight:'10px'}}><FiLogOut /></span> Log Out
      </Link>
    </Menu>
  );
};