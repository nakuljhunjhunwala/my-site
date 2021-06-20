import React from "react";
import "./Table1Heading.css";
import Button from "@material-ui/core/Button";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import CreateIcon from '@material-ui/icons/Create';

function Table1Heading() {
  return (
    <div className="Table1HeadingContainer">
      <Button
        variant="contained"
        className="addButton"
        startIcon={<AddOutlinedIcon />}
      >
        Add Role
      </Button>
      <CreateIcon className="Table1Icon" />
      <DeleteOutlineIcon className="Table1Icon" />
    </div>
  );
}

export default Table1Heading;
