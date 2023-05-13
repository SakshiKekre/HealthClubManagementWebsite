import React from "react";
import { useState, useEffect } from 'react';
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from "react-bootstrap";

function Schedule() {

  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  const [searchResults, setSearchResults] = useState(rows);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    alert(`Searching for ${searchTerm}`)
    const results = rows.filter(row => {
      if (row.className !== null) {
        return row.className.toLowerCase().includes(searchTerm) ;
      }
      // if (row.instructor !== null) {
      //   return row.instructor.includes(searchTerm) ;
      // }
      // if (row.membership !== null) {
      //   return row.membership.includes(searchTerm) ;
      // }
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


  useEffect(() => {
    setSearchResults(rows);
  },[rows])

  useEffect(() => {
    // Fetch all the activities of member and set the state
    let memberID = localStorage.getItem('memberId');
    const getActivityAPI = process.env.REACT_APP_API_URL + "/getAllScheduleForMember/" + memberID;
    console.log("getActivityAPI API:" + getActivityAPI);
    fetch(getActivityAPI)
      .then((response) => response.json())
      .then((data) => {
  
        const width = 250
        // Assign columns
        setColumns([
          // { field: "id", headerName: "id", width: width },
          { field: "className", headerName: "Class", width: width },
          { field: "timeSlot", headerName: "Time", width: width },
          { field: "instructor", headerName: "Instructor", width: width },
          { field: "location", headerName: "Location", width: width },
        ]);

        // Assign rows
        setRows(data.map((item, index) => ({
          id: index,
          className: item.className,
          timeSlot: item.timeSlot,
          instructor: item.instructor,
          location: item.location
        })));

      })
      .catch((error) => {
        console.log(error);
      });

  }, []);


  return (
    <div style={{ height: 400, width: '100%' }}>
      <div>
        <input type="text" placeholder="Search by class name" value={searchTerm} onChange={handleSearchTermChange} />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleClear}>Clear</button>
      </div>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={searchResults}
          columns={columns}
          pageSize={5}
          disableSelectionOnClick
          onFilterChange={() => {}}
          onRowClick={(params) => console.log(`Row clicked: ${params.id}`)}
        />
    </div>
    </div>
  );
}

export default compose(
  reduxForm({
    form: "memberSchedule",
  })
)(Schedule);
