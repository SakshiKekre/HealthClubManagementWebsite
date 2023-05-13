import React from "react";
import { useState, useEffect } from 'react';
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import renderFormGroupField from "../../helpers/renderFormGroupField";
import renderFormSelect from "../../helpers/renderFormSelect";
import renderFormFileInput from "../../helpers/renderFormFileInput";
import {
  required,
  maxLengthMobileNo,
  minLengthMobileNo,
  digit,
  name,
  email,
} from "../../helpers/validation";

import { ReactComponent as IconPerson } from "bootstrap-icons/icons/person.svg";
import { ReactComponent as IconPhone } from "bootstrap-icons/icons/phone.svg";
import { ReactComponent as IconEnvelop } from "bootstrap-icons/icons/envelope.svg";
import { ReactComponent as IconCalendarEvent } from "bootstrap-icons/icons/calendar-event.svg";
import { ReactComponent as IconKeyFill } from "bootstrap-icons/icons/key-fill.svg";


const EnrollmentForm = (props) => {
  const {
    handleSubmit,
    submitting,
    onSubmit,
    submitFailed,
    reset
  } = props;

  const [locations, setLocations] = useState([]);
  const [membershipTypes, setMembershipTypes] = useState([]);
  const [selectedLocationId, setSelectedLocationId] = useState("");
  const [selectedLocationName, setSelectedLocationName] = useState("");
  const [selectedMembershipType, setSelectedMembershipType] = useState("");
  //const [initialValues, setInitialValues] = useState(props.initialValues);
  

  
  useEffect(() => {
    // Fetch locations
    fetch(process.env.REACT_APP_API_URL+"/findAllLocations")
      .then((response) => response.json())
      .then((data) => {
        const options = data.map((location) => ({
          value: `${location.locationID}-${location.locationName}`,
          label: location.locationName,
        }));
        setLocations(options);
      });

    // Fetch membership types
    fetch(process.env.REACT_APP_API_URL+"/getMembershipData")
      .then((response) => response.json())
      .then((data) => {
        const types = data.map((type) => ({
          value: type.membershipType,
          label: type.membershipType,
        }));
        setMembershipTypes(types);
      });

  }, []);

  const handleClear = () => {
    reset();
    
  };


  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`needs-validation ${submitFailed ? "was-validated" : ""}`}
      noValidate
    >

      <div className="card border-primary">


        <ul className="list-group list-group-flush">
        <li className="list-group-item">
            <Field
              name="email"
              type="email"
              component={renderFormGroupField}
              placeholder="Members email"
              icon={IconEnvelop}
              validate={[required, email]}
              required={true}
            />
          </li>          
          <li className="list-group-item">
            <Field
              name="password"
              type="password"
              component={renderFormGroupField}
              placeholder="Password"
              icon={IconKeyFill}
              validate={[required, maxLengthMobileNo, minLengthMobileNo]}
              required={true}
              max="999999999999999"
              min="9999999"
            />
          </li>
          <li className="list-group-item">
            <Field
              name="fname"
              type="text"
              component={renderFormGroupField}
              placeholder="Members name"
              icon={IconPerson}
              validate={[required, name]}
              required={true}
            />
          </li>
          <li className="list-group-item">
            <Field
              name="phone"
              type="number"
              component={renderFormGroupField}
              placeholder="Mobile no"
              icon={IconPhone}
              validate={[required, maxLengthMobileNo, minLengthMobileNo, digit]}
              required={true}
              max="999999999999999"
              min="9999"
            />
          </li>

          <li className="list-group-item">
            {/* <Field
              name="location"
              type="text"
              component={renderFormGroupField}
              placeholder="Member location"
              icon={IconGeoAlt}onClick={() => handleLocationDropdownChange(location.locationName)}
              validate={[required]}
              required={true}
            /> */}
        {/* <Dropdown>
        <Dropdown.Toggle variant="secondary">
          {selectedLocationName ? selectedLocationName : 'Select Primary Location'}
          
        </Dropdown.Toggle>
        <Dropdown.Menu >
          {locations.map(location => (
            <Dropdown.Item key={location.locationID} eventKey={location.locationID} value = {location.locationID} onClick={() => handleLocationDropdownChange(location.locationID,location.locationName)} >
              {location.locationName}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown> */}
  {/* <Form.Control as="select" name="locationId" value={selectedLocationId} onChange={(e) => handleLocationSelectChange(e.target.value)}>
  <option value="">Select Primary Location</option>
  {locations.map(location => (
    <option key={location.locationID} value={location.locationID}>{location.locationName}</option>
  ))}
</Form.Control> */}

<Field
  name="locationId"
  component={renderFormSelect}
  options={locations}
  label="Select a Location"
  required={true}
/>

      <br/>
  
<Field
  name="membershipType"
  component={renderFormSelect}
  options={membershipTypes}
  label="Select a Membership Type"
  required={true}
/>
          </li>
          <li className="list-group-item">
          <h6 className="text-center">Membership StartDate</h6>
            <Field
              name="membershipStartDate"
              type="date"
              component={renderFormGroupField}
              placeholder="Start Date of Membership"
              icon={IconCalendarEvent}
              validate={[required]}
              required={true}
            />
          </li>
        </ul>
        <div className="card-body">
          <button
            type="submit"
            disabled={submitting}
          >
            Submit
          </button>
          
          <button type="button" onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>
    </form>
  );
};

export default compose(
  reduxForm({
    form: "profile",
  })
)(EnrollmentForm);
