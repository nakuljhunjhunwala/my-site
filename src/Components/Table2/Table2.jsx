import React from "react";
import "./Table2.css";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import { Divider } from "@material-ui/core";
import Button from '../Button/Button';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

function Table2() {
  return (
    <>
      <div className="Table2HeadingContainer">
        <ArrowBackOutlinedIcon />
        <p>Management Team</p>
        <CreateOutlinedIcon />
      </div>
      <div className="Table2Options">
        <p className="activeOption">Access Control</p>
        <Divider
          orientation="vertical"
          flexItem
          variant="middle"
          style={{ height: "20px", marginTop: "25px" }}
        />
        <p>Assiged Members</p>
      </div>

      <table className="table2">
<thead>
    <tr>
      <th>Department/Role Name</th>
      <th>Access Name</th>
      <th>Summary</th>
      <th>Last Updated</th>
      <th> </th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td align="left" >
        <p>
        <AddCircleOutlineOutlinedIcon /> &nbsp; Budget
        </p>
      </td>
      <td><Button text="All Access" color="green"/></td>
      <td>view | create | edit | delete</td>
      <td>1 min ago</td>
      <td>
      <input class="switch" type="checkbox" />
  </td>
    </tr>
    <tr>
      <td align="left">
      <p>
        <AddCircleOutlineOutlinedIcon /> &nbsp; Bidding
        </p>
      </td>
      <td><Button text="No Access" color="grey"/></td>
      <td>-</td>
      <td>1 min ago</td>
      <td> <input class="switch" type="checkbox" /> </td>
    </tr>
    <tr>
      <td align="left">
      <p>
        <AddCircleOutlineOutlinedIcon /> &nbsp; vendor Portal
        </p>
      </td>
      <td><Button text="Restricted" color="red"/></td>
      <td>view | create</td>
      <td>1 min ago</td>
      <td>  <input class="switch" type="checkbox" /> </td>
    </tr>
    <tr>
      <td align="left">
      <p>
        <AddCircleOutlineOutlinedIcon /> &nbsp; Purchase Order/Work Order
        </p>
      </td>
      <td><Button text="Restricted" color="red"/></td>
      <td>view | create</td>
      <td>1 min ago</td>
      <td>  <input class="switch" type="checkbox" /></td>
    </tr>
    <tr>
      <td align="left">
      <p>
        <AddCircleOutlineOutlinedIcon /> &nbsp; Organizatinal Profile
        </p>
      </td>
      <td><Button text="All Access" color="green"/></td>
      <td>view | create | edit | delete</td>
      <td>1 min ago</td>
      <td> <input class="switch" type="checkbox" />  </td>
    </tr>
    <tr>
      <td align="left">
      <p>
        <AddCircleOutlineOutlinedIcon /> &nbsp; Permissions & Access control
        </p>
      </td>
      <td><Button text="No Access" color="grey"/></td>
      <td>-</td>
      <td>1 min ago</td>
      <td> <input class="switch" type="checkbox" />  </td>
    </tr>
  </tbody>
</table>
    
    </>
  );
}

export default Table2;
