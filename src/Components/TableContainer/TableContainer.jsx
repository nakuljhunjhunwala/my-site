import React from 'react';
import "./TableContainer.css";
import TableHeader from '../TableHeader/TableHeader';
import MainTablePage from '../MainTablePage/MainTablePage';

function TableContainer() {
  return (
    <div className="tableContainer">
      <TableHeader/>
<MainTablePage/>
    </div>
  )
}

export default TableContainer
