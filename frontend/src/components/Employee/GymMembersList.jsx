import React, { useState } from "react";
import { reduxForm } from "redux-form";
import { compose } from "redux";
import { DataGrid } from '@mui/x-data-grid';


const columns = [
  { field: 'registrationNumber', headerName: 'Member ID', width: 100 },
  { field: 'fname', headerName: 'Name', width: 130 },
  { field: 'email', headerName: 'Email', width: 130 },
  { field: 'phone', headerName: 'Phone', width: 100 },
  { field: 'location', headerName: 'Primary Location', width: 150 },
  { field: 'membershipStartDate', headerName: 'Date of Joining', width: 150 },
  {
    field: 'checkedIn',
    headerName: 'Checked In',
    width: 120,
    renderCell: (params) => {
      return <CustomButton value={[params.row.registrationNumber,params.row.enrolled]} />;
    },
  },
];

function CustomButton({ value }) {

  const [checkedInId, setCheckedInId] = useState(null);

  const handleCheckin = (id) => {
    if (checkedInId === null) {
      setCheckedInId(id);

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "registrationNumber": id }),
      };
      fetch(process.env.REACT_APP_API_URL+'/checkinMember', requestOptions)
      .then(response => {
        if (response.ok) {
          console.log('Checked in member successfully!');
      //fetchData();
        } else {
          console.error('Error :', response.statusText);
        }
      })
      .catch(error => console.error(error));
    // Add your custom onClick logic here
  }
}

const handleCheckout = (id) => {


    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "registrationNumber": id }),
    };
    fetch(process.env.REACT_APP_API_URL+'/checkoutMember', requestOptions)
    .then(response => {
      if (response.ok) {
        console.log('Checked out member successfully!');
    //fetchData();
      } else {
        console.error('Error :', response.statusText);
      }
    })
    .catch(error => console.error(error));
  // Add your custom onClick logic here
}

  
  return (
    <>
    {value[1] ? (
      <button onClick={handleCheckout(value[0])}>
      Checkout
    </button>
    ) : (
      <button onClick={handleCheckin(value[0])}>
      Checkin
    </button>
    )}
    </>
  );
}

function GymMembersList() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
 

  const handleSearch = () => {
    console.log(`Searching for ${searchTerm}`)
    const url = process.env.REACT_APP_API_URL+'/getMemberByID/'+searchTerm;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const rowsWithCheckinStatus = data.map((row, index) => ({ id: index + 1, ...row, checkedIn: row.enrolled  }))
      setSearchResults(rowsWithCheckinStatus);
    })
    .catch(error => console.error(error));
  };

  const handleClear = () => {
    setSearchTerm('');
    setSearchResults([]);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  
  return (
    <div>
    <div>
        <input type="text" placeholder="Search by ID or Email" value={searchTerm} onChange={handleSearchTermChange} />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleClear}>Clear</button>
      </div>

    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={searchResults}
        columns={columns}
        pageSize={5}
        
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
