import { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';

// Define constant data for locations and class schedules
const LOCATIONS = ['San Jose', 'Fremont', 'San Francisco', 'Dublin'];
const SCHEDULES = {
  'San Jose': [
    { id: 1, className: 'Yoga', time: '9:00am - 10:00am' },
    { id: 2, className: 'Pilates', time: '10:00am - 11:00am' },
    { id: 3, className: 'Zumba', time: '11:00am - 12:00pm' },
  ],
  'Fremont': [
    { id: 4, className: 'Yoga', time: '10:00am - 11:00am' },
    { id: 5, className: 'Pilates', time: '11:00am - 12:00pm' },
    { id: 6, className: 'Spinning', time: '12:00pm - 1:00pm' },
  ],
  'San Francisco': [
    { id: 7, className: 'Yoga', time: '11:00am - 12:00pm' },
    { id: 8, className: 'Zumba', time: '12:00pm - 1:00pm' },
    { id: 9, className: 'Spinning', time: '1:00pm - 2:00pm' },
  ],'Dublin': [
    { id: 10, className: 'Yoga', time: '11:00am - 12:00pm' },
    { id: 11, className: 'Zumba', time: '12:00pm - 1:00pm' },
    { id: 12, className: 'Spinning', time: '1:00pm - 2:00pm' },
  ],
};

const processPayload = (jsonData)=>{
  return jsonData.map(obj=>{
    return obj.locationName
  });
}

function GymClassSchedule() {
  const [locations, setLocations] = useState(LOCATIONS);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    // Fetch the list of locations and set the state
    fetch('http://localhost:8080/healthclub/findAllLocations')
      .then(response => response.json())
      .then(payload=>processPayload(payload))
      .then(data => setLocations(data))
      .catch(error => console.error(error));
  }, []);

  // useEffect(() => {
  //   if (selectedLocation) {
  //     // Fetch the schedule for the selected location and set the state
  //     fetch(`api/schedule/${selectedLocation}`)
  //       .then(response => response.json())
  //       .then(data => setSchedule(data))
  //       .catch(error => console.error(error));
  //   }
  // }, [selectedLocation]);

  useEffect(() => {
    if (selectedLocation) {
      // Set the schedule for the selected location from the constant data
      setSchedule(SCHEDULES[selectedLocation]);
    }
  }, [selectedLocation]);


  function handleLocationChange(event) {
    const location = event.target.value;
    setSelectedLocation(location);
  }
  


  return (
    <>
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="secondary">
          {selectedLocation ? selectedLocation : 'Select a location'}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {locations.map(location => (
            <Dropdown.Item key={location} value={location} onClick={handleLocationChange}>
              {location}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <div className="row mt-4">
        <div className="col-md-6">
          <h4>Class Schedule - {selectedLocation}</h4>
          <ul>
            {schedule.map(classSchedule => (
              <li key={classSchedule.id}>
                {classSchedule.className} - {classSchedule.time}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-6">
          <h4>Class Instructors</h4>
          <ul>
            <li>John Doe - Yoga</li>
            <li>Jane Doe - Pilates</li>
            <li>Mike Smith - Zumba</li>
            <li>Sarah Johnson - Spinning</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}

export default GymClassSchedule;
