import { useState,useEffect } from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { DataGrid } from '@mui/x-data-grid';
import { Dropdown } from 'react-bootstrap';
import LeftNavigation from "../../components/LeftNavigation";


const columns = [
  {field: "id", headerName: "ID", width: 70 },
  { field: "className", headerName: "Class Name", width: 130 },
  { field: "availableDays", headerName: "Schedule Days ", width: 130 },
  { field: "timeSlots", headerName: "Time slot", width: 100 },
  { field: "location", headerName: "Location", width: 200 },
  { field: "capacity", headerName: "Capacity", width: 100 },
  { field: "instructor", headerName: "Instructor", width: 100},
  {
    field: 'signup',
    headerName: ' ',
    width: 120,
    renderCell: (params) => {
      return <CustomButton value={[params.row.classId, params.row.capacity,params.row.already_signup]} />;
    }
  }
];

const rows = [
  { id: 1, location: "Gym A", classType: "Yoga", classDetails: "10-11 AM M-F", signup: "Open" },
  { id: 2, location: "Gym B", classType: "Cardio", classDetails: "5-6 PM M-W-F", signup: "Open" },
  { id: 3, location: "Gym C", classType: "Pilates", classDetails: "10-11 AM Sat-Sun", signup: "Full" },
];

const LOCATIONS = ['San Jose', 'Fremont', 'San Francisco', 'Dublin'];

const userName = "John";
const userRole = "member";
const regNumber = "4";


function CustomButton({ value,value1,value2 }) {
  function handleClick() {
    console.log('Button clicked:', value);
    console.log('Button clicked:', value1);
    console.log('Button clicked:', value2);
    
    const payload = JSON.stringify({
      "className": "Yoga",
      "classId": value[0],
      "regNumber": regNumber
    })
    console.log(payload);
  //   {
  //     "className": "Yoga",
  //     "classId": "6452e8004fc80f17503b1c17",
  //     "regNumber": "4"
  // }
    fetch('http://localhost:8080/healthclub/addSchedule', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
      },
    body: payload
  })
  .then(response => {
    if (response.ok) {
      alert('Class added successfully!');
      //fetchData();
    } else {
      console.error('Error adding class:', response.statusText);
    }
  })
  .catch(error => console.error(error));
    // Add your custom onClick logic here
  }

  return (
    <>
      {value[1] > 0 ? (
        <button onClick={handleClick}>Signup</button>
      ) : (
        <button onClick={handleClick}>Class is Full</button>
      )}
    </>
  );
}


function ClassesView() {
  const [locations, setLocations] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedClassType, setSelectedClassType] = useState("");
  const  [userSignups, setUserSignups] =  useState([]);;

  useEffect(() => {
    // Fetch locations
    fetch("http://localhost:8080/healthclub/findAllLocations")
      .then((response) => response.json())
      .then((data) => setLocations(data));

  }, []);
  
  const handleLocationDropdownChange = (location) => {
    console.log(location);
    setSelectedLocation(location);
  }

  const handleSearch = () => {
    // Perform search logic here and update searchResults state
    // const filteredResults = rows.filter(
    //   (row) =>
    //     (!selectedLocation || row.location === selectedLocation) &&
    //     (!selectedClassType || row.classType === selectedClassType)
    // );

    let filter2 = [];

    fetch("http://localhost:8080/healthclub/getAllScheduleForMember/4")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data)
        const filteredData = data.filter(row => row.classId != null);
        console.log(filteredData);

        filter2 = filteredData.map((row) => (row.classId ));
        console.log(filter2);
        setUserSignups(filter2);
        console.log(userSignups);
      });

    fetch("http://localhost:8080/healthclub/getClassesByLoc/640bb00c57241540e9c129d7")
    .then((response) => response.json())
    .then((data) => {
      setSearchResults(data.map((row, index) => ({ id: index + 1,already_signup: filter2.includes(row.classId), ...row })) , () => {
        console.log(searchResults);
      });

    });


  };

  const handleSubmit = () => {

  }

  return (

       <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-2">
          <LeftNavigation userName={userName} userRole={userRole}/> 
          
          </div>
          <div className="col-md-6">
          <h4 className="text-center">Search Classes</h4>

          <form onSubmit={handleSubmit()}
      noValidate
      >
      <div className="card border-primary">


        <ul className="list-group list-group-flush">
         

          <li className="list-group-item">
            <Dropdown>
              <Dropdown.Toggle variant="secondary">
                {selectedLocation ? selectedLocation : 'Select Location'}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {locations.map(location => (
                  <Dropdown.Item key={location.locationID} value={location.locationID} onClick={() => handleLocationDropdownChange(location.locationName)}>
                    {location.locationName}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </li> 
  
        </ul>
        <div className="card-body">
        <Button variant="contained" onClick={handleSearch}>
                Search
              </Button>
        </div>
      </div>
    </form>

              <div style={{ height: 400, width: "100%" }}>
                <DataGrid rows={searchResults} columns={columns} pageSize={5} />
              </div>
            </div>
          </div>
        </div>
  );
}

export default ClassesView;
