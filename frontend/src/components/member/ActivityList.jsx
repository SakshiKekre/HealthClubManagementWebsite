import React from "react";
import { useState, useEffect } from 'react';
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from "react-bootstrap";

function ActivityList() {

  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  const [searchResults, setSearchResults] = useState(rows);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    alert(`Searching for ${searchTerm}`)
    const results = rows.filter(row => {
      return row.equipment.includes(searchTerm) ;
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
    const memberID = "4";
    const getActivityAPI = process.env.REACT_APP_API_URL + "/getAllActivities/" + memberID;
    console.log("getActivityAPI API:" + getActivityAPI);
    fetch(getActivityAPI)
      .then((response) => response.json())
      .then((data) => {
  
        const width = 250
        // Assign columns
        setColumns([
          { field: "id", headerName: "id", width: width },
          { field: "location", headerName: "location", width: width },
          { field: "equipment", headerName: "equipment", width: width },
          { field: "activityPerformedDate", headerName: "Date", width: width },
          { field: "activityStartTime", headerName: "Start Time", width: width },
          { field: "activityEndTime", headerName: "End Time", width: width },
        ]);

        // Assign rows
        setRows(data.map((item) => ({
          id: item.activityId,
          location: item.location,
          equipment: item.equipment,
          activityPerformedDate: item.activityPerformedDate,
          activityStartTime: item.activityStartTime,
          activityEndTime: item.activityEndTime
        })));

      })
      .catch((error) => {
        console.log(error);
      });

  }, []);


  return (
    <div style={{ height: 400, width: '100%' }}>
      <div>
        <input type="text" placeholder="Search by equipment name" value={searchTerm} onChange={handleSearchTermChange} />
        <Button onClick={handleSearch}>Search</Button>
        <Button onClick={handleClear}>Clear</Button>
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
    form: "memberActivitiesForm",
  })
)(ActivityList);
