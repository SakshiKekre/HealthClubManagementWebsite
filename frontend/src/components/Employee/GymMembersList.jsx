import React from "react";
import { useState, useEffect } from 'react';
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button'
import renderFormGroupField from "../../helpers/renderFormGroupField";
import renderFormFileInput from "../../helpers/renderFormFileInput";
import {
  required,
  maxLengthMobileNo,
  minLengthMobileNo,
  digit,
  name,
  email,
} from "../../helpers/validation";
import { Dropdown } from 'react-bootstrap';


const LOCATIONS = ['San Jose', 'Fremont', 'San Francisco', 'Dublin'];
const columns = [
  { field: 'id', headerName: 'Member ID', width: 100 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'email', headerName: 'Email', width: 130 },
  { field: 'phone', headerName: 'Phone', width: 100 },
  { field: 'location', headerName: 'Primary Location', width: 150 },
  { field: 'doj', headerName: 'Date of Joining', width: 150 },
  { field: 'membership_status', headerName: 'Status', width: 100 },
  {
    field: 'checkedIn',
    headerName: 'Checked In',
    width: 120,
    renderCell: (params) => {
      return <CustomButton value={params.row.id} />;
    },
  },
];

const rows = [
  { id: 1, name: 'John Doe',  email: 'john.doe@example.com', phone: '555-1234',location:'San Jose',doj:'2021-09-01',membership_status:'Active',checkedIn:false},
  { id: 2, name: 'Jane Doe',  email: 'jane.doe@example.com', phone: '555-5678',location:'San Jose',doj:'2021-09-01',membership_status:'Active',checkedIn:false},
  { id: 3, name: 'Bob Smith', email: 'bob.smith@example.com', phone: '555-9876',location:'San Jose',doj:'2021-09-01',membership_status:'Active',checkedIn:false},
  // add more rows as needed
];

function CustomButton({ value }) {
  function handleClick() {
    console.log('Button clicked:', value);
    // Add your custom onClick logic here
  }

  return (
    <button onClick={handleClick}>
      Checkin
    </button>
  );
}

function GymMembersList() {

  const [searchResults, setSearchResults] = useState(rows);
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  const { history } = location;
  const [checkedInId, setCheckedInId] = useState(null);

  const handleSearch = () => {
    alert(`Searching for ${searchTerm}`)
    const results = rows.filter(row => {
      return row.id.toString().includes(searchTerm) || row.email.includes(searchTerm);
    });
    setSearchResults(results);
  };

  const handleClear = () => {
    setSearchTerm('');
    setSearchResults(rows);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleCheckin = (id) => {
    if (checkedInId === null) {
      setCheckedInId(id);
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: id }),
      };
      fetch('/checkin', requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };

  const rowsWithCheckinStatus = rows.map((row) => {
    return {
      ...row,
      checkedIn: row.id === checkedInId,
    };
  });
  return (
    <div>
    <div>
        <input type="text" placeholder="Search by ID or Email" value={searchTerm} onChange={handleSearchTermChange} />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleClear}>Clear</button>
      </div>

    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rowsWithCheckinStatus}
        columns={columns}
        pageSize={5}
        disableSelectionOnClick
        onRowClick={(params) => console.log(`Row clicked: ${params.id}`)}
      />
    </div>
    </div>
  );
}

export default compose(
  reduxForm({
    form: "searchMembersForm",
  })
)(GymMembersList);
