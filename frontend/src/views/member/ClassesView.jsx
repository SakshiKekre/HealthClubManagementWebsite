import { useState,useEffect } from "react";
import {
  Button,
} from "@material-ui/core";
import { DataGrid } from '@mui/x-data-grid';
import { Dropdown } from 'react-bootstrap';
import LeftNavigation from "../../components/LeftNavigation";


let lastRenderedCell = null;

const handleRenderCell = (params) => {
  // check if the cell value has changed since the last time this function was called

  // update the lastRenderedCell variable to the current row
  lastRenderedCell = params.row;

  // render the custom button component
  return <CustomButton value={[params.row.classId, params.row.className, params.row.capacity, params.row.alreadySignedup, params.row.timeSlots, params.row.instructor, params.row.location]} />;
};

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
    renderCell: handleRenderCell
  }
];





function CustomButton( {value} ) {

  console.log('inside custom button, classId:'+value[0] + ',className:'+value[1] + ',capacity:'+value[2] + ',alreadySignedup:'+value[3]);
  const classId = value[0];
  const className = value[1];
  const capacity = value[2];  
  const alreadySignedup = value[3];
  const timeSlot = value[4];  
  const instructor = value[5];
  const location = value[6];

  function handleClick() {
    const regNumber = localStorage.getItem('memberId');
    console.log('inside classes view,regNumber:'+regNumber);
    const payload = JSON.stringify({
      "className": className,
      "classId": classId,
      "regNumber": regNumber,
      "timeSlot": timeSlot,
      "instructor": instructor,
      "location": location
    })
    console.log(payload);

    fetch(process.env.REACT_APP_API_URL +'/addSchedule', {
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
      {
      capacity > 0 ? (
        alreadySignedup ? (
        <button disabled>Signedup</button>
        ) : (
        <button onClick={handleClick}>Available</button>
      )) : (
        <button disabled>Full</button>
      )}
    </>
  );
}


function ClassesView() {
  const [locations, setLocations] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedLocationId, setSelectedLocatioId] = useState("");
  const [selectedClassType, setSelectedClassType] = useState("");
  const  [userSignups, setUserSignups] =  useState([]);;

  useEffect(() => {
    // Fetch locations
    fetch(process.env.REACT_APP_API_URL +"/findAllLocations")
      .then((response) => response.json())
      .then((data) => setLocations(data));

  }, []);
  
  const handleLocationDropdownChange = (locationName,locationID) => {
    console.log('inside handleLocationDropdownChange');
    console.log('locationName'+locationName);
    console.log('locationID'+locationID);

    setSelectedLocation(locationName);
    setSelectedLocatioId(locationID);
  }

  const handleSearch = () => {
    console.log('inside handleSearch');
    let memberId = localStorage.getItem('memberId');
    console.log('inside classes view,getfrom localstorage,memberId:'+memberId);
    if (memberId == null || memberId == undefined || memberId == '') {
      memberId= "4";
    }
    let uniqueClassIds = [];
    fetch(process.env.REACT_APP_API_URL +"/getAllScheduleForMember/"+memberId)
    .then((response) => response.json())
    .then((data) => {
      const filteredData = data.filter(row => row.classId !== null); // filter out null class_id
      console.log('Data in Step 1:'+filteredData);

      const classIds = filteredData.map((row) => (row.classId)); // get an array of classIds
      console.log('Data in Step 2:'+classIds);
      uniqueClassIds = [...new Set(classIds)]; // remove duplicates using Set and spread operator
      console.log('Data in Step 3 uniqueClassIds:'+uniqueClassIds);
      setUserSignups(uniqueClassIds); // update state with unique classIds
    });

    console.log('inside handleSearch, selectedLocationId: ' + selectedLocationId);

    fetch(process.env.REACT_APP_API_URL + "/getClassesByLoc/" + selectedLocationId)
      .then((response) => response.json())
      .then((data) => {
        //const enhancedData = data.map((row, index) => ({ id: index + 1, already_signup: uniqueClassIds.includes(row.classId), ...row }))
  
        setSearchResults(data.map((row, index) => ({ id: index + 1,alreadySignedup: uniqueClassIds.includes(row.classId), ...row })) , () => {
          console.log(searchResults);
        });

      });

  };


  return (

    <div className="container-fluid my-3">
      <div className="row">
        <div className="col-md-2">
          <LeftNavigation />

        </div>
        <div className="col-md-6">
          <h4 className="text-center">Search Classes</h4>

          <form className="form"
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
                        <Dropdown.Item key={location.locationID} value={location.locationID} onClick={() => handleLocationDropdownChange(location.locationName, location.locationID)}>
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
