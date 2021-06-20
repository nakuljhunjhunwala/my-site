import React from "react";
import "./TableHeaderOptionButton.css";

function TableHeaderOptionButton({ icon, text, isActive }) {
  return (
    <div
      className={`tableHeadingOptionButton ${
        isActive ? "tableHeadingActive" : ""
      } `}
    >
      <p
        className={`tableHeadingNavbarIcon  ${
          isActive ? "tableHeadingActiveIcon" : ""
        }`}
      >
        {" "}
        {icon}
      </p>
      <p
        className={`tableHeadingOptionText ${
          isActive ? "tableHeadingActiveText" : ""
        }`}
      >
        {text}
      </p>
    </div>
  );
}

export default TableHeaderOptionButton;
