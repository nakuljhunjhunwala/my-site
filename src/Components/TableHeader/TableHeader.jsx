import React from "react";
import "./TableHeader.css";
import TableHeaderOptionButton from "../TableHeaderOptionButton/TableHeaderOptionButton";
import RssFeedOutlinedIcon from "@material-ui/icons/RssFeedOutlined";
import ViewModuleOutlinedIcon from "@material-ui/icons/ViewModuleOutlined";
import SyncOutlinedIcon from '@material-ui/icons/SyncOutlined';
import Divider from "@material-ui/core/Divider";

function TableHeader() {
  return (
    <div class="tableHeaderContainer">
      <div className="tableHeaderRight">
        <TableHeaderOptionButton
          icon={<RssFeedOutlinedIcon />}
          text="Permission"
          isActive
        />
        <Divider orientation="vertical" variant="middle" className="divider" />
        <TableHeaderOptionButton
          icon={<ViewModuleOutlinedIcon />}
          text="Approval Matrix"
        />
      </div>
      <div className="tableHeaderLeft">
<SyncOutlinedIcon className="icon"/>
<p>Last sync 15 mins ago</p>
      </div>
    </div>
  );
}

export default TableHeader;
