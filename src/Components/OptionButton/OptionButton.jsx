import React from "react";
import "./OptionButton.css";

function OptionButton({ icon, text,isActive }) {
  return (
    <div className={`optionButton ${isActive ? "active":""}`}>
     <p className={`navbarIcon ${isActive ? "activeIcon":""}` }> {icon}</p>
      <p className={`optionText ${isActive ? "activeText":""}`}>{text}</p>
    </div>
  );
}

export default OptionButton;
