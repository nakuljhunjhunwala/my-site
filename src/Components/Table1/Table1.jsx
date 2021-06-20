import React from 'react';
import "./Table1.css";
import Table1Heading from './Table1Heading/Table1Heading';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import Button from '../Button/Button';

function Table1() {
  return (
    <>
<Table1Heading/>
<table className="table1">
<thead>
    <tr>
      <th>Department/Role Name</th>
      <th>Access Name</th>
      <th>No. of members</th>
      <th>Last Updated</th>
      <th> </th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td align="left">
        <input type="radio" /> Management Team
      </td>
      <td><Button text="All Access" color="green"/></td>
      <td>4</td>
      <td>1 min ago</td>
      <td> <VisibilityOutlinedIcon className="icon"/></td>
    </tr>
    <tr>
      <td align="left">
      <input type="radio" /> Procurement Team
      </td>
      <td><Button text="Restricted" color="red"/></td>
      <td>8</td>
      <td>1 min ago</td>
      <td> <VisibilityOutlinedIcon className="icon"/> </td>
    </tr>
    <tr>
      <td align="left">
      <input type="radio" /> Project Team
      </td>
      <td><Button text="Restricted" color="red"/></td>
      <td>16</td>
      <td>1 min ago</td>
      <td> <VisibilityOutlinedIcon className="icon"/> </td>
    </tr>
    <tr>
      <td align="left">
      <input type="radio" /> IT Team
      </td>
      <td><Button text="Restricted" color="red"/></td>
      <td>4</td>
      <td>1 min ago</td>
      <td> <VisibilityOutlinedIcon className="icon"/> </td>
    </tr>
    <tr>
      <td align="left">
      <input type="radio" /> Super Admin
      </td>
      <td><Button text="All Access" color="green"/></td>
      <td>1</td>
      <td>1 min ago</td>
      <td> <VisibilityOutlinedIcon className="icon"/> </td>
    </tr>
  </tbody>
</table>
    </>
  )
}

export default Table1
