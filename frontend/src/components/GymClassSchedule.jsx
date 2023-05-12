import { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';

function GymClassSchedule() {
  const [locations, setLocations] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedLocationId, setSelectedLocatioId] = useState("");

  const handleLocationDropdownChange = (locationName,locationID) => {
    console.log('inside handleLocationDropdownChange');
    console.log('locationName'+locationName);
    console.log('locationID'+locationID);

    setSelectedLocation(locationName);
    setSelectedLocatioId(locationID);
  }

  useEffect(() => {
    // Fetch the list of locations and set the state
    fetch(process.env.REACT_APP_API_URL +"/findAllLocations")
      .then(response => response.json())
      .then(data => setLocations(data))
      .catch(error => console.error(error));
  }, []);

  useEffect(() =>{
    fetch(process.env.REACT_APP_API_URL +"/getClassesByLoc/"+selectedLocationId)
    .then((response) => response.json())
    .then(data => setSchedule(data))
  },[selectedLocationId]);

  return (
    <>
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="secondary">
          {selectedLocation ? selectedLocation : 'Select a location'}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {locations.map(location => (
            <Dropdown.Item key={location.locationID} value={location.locationID} onClick={() => handleLocationDropdownChange(location.locationName, location.locationID)}>
              {location.locationName}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <div className="row mt-4">
        <div className="col-md-10">
          <div class="container">

            <h4>Class Schedule - {selectedLocation}</h4>
            <ul className="list-unstyled">
             {schedule.length > 0 ? (
                schedule.map((classSchedule) => (
                  <div className="card membership-block"> 
                    <li key={classSchedule.id}>
                      <ul className="list-unstyled">
                        <li>Class: {classSchedule.className}</li>
                        <li>Day & Time: {classSchedule.availableDays} - {classSchedule.timeSlots}</li>
                        <li>Instructor: {classSchedule.instructor}</li>
                        <li>Membership required: {classSchedule.membership}</li>
                      </ul>
                    </li>
                  </div>
                ))
              ) : (
                <div className="card membership-block">
                  <li>No class schedule available</li>
                </div>
              )}
            </ul>
          </div> 
        </div>
      </div>
    </div>
    </>
  );
}

export default GymClassSchedule;
