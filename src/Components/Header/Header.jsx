import React from "react";
import "./Header.css";
import logo from "../../logo.svg";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

function Header() {
  return (
    <div className="headerContainer">
      <div className="headerRight">
        <div className="logoContainer">
          <img src={logo} className="logo" alt="logo" />
          <p className="logoText">MYSITE</p>
        </div>
      </div>
      <div className="headerLeft">
        <div className="profileContainer">
          <div className="profileCircle"></div>
          <p className="userName">Kishore</p>
          <NotificationsNoneIcon className="icon" />
          <HelpOutlineIcon className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
