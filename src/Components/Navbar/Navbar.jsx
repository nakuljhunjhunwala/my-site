import React from 'react';
import "./Navbar.css";
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import SecurityOutlinedIcon from '@material-ui/icons/SecurityOutlined';
import OptionButton from '../OptionButton/OptionButton';
function Navbar() {
  return (
    <div className="navbarContainer">
        <OptionButton icon={<DashboardOutlinedIcon/>}  text="Projects"/>
        <OptionButton icon={<BusinessCenterOutlinedIcon />} text="Organization Profile"/>
        <OptionButton icon={<SecurityOutlinedIcon/>} isActive="true" text="Access Control"/>
    </div>
  )
}

export default Navbar
