import React from "react";
import { useState, useEffect } from 'react';
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
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
import { ReactComponent as IconPerson } from "bootstrap-icons/icons/person.svg";
import { ReactComponent as IconPhone } from "bootstrap-icons/icons/phone.svg";
import { ReactComponent as IconEnvelop } from "bootstrap-icons/icons/envelope.svg";
import { ReactComponent as IconGeoAlt } from "bootstrap-icons/icons/geo-alt.svg";
import { ReactComponent as IconCalendarEvent } from "bootstrap-icons/icons/calendar-event.svg";
import { ReactComponent as IconPersonSquareFill } from "bootstrap-icons/icons/person-lines-fill.svg";

const LOCATIONS = ['San Jose', 'Fremont', 'San Francisco', 'Dublin'];
const MEMBERSHIP_TYPES = ['Basic', 'Premium', 'Platinum'];

const EnrollmentForm = (props) => {
  const {
    handleSubmit,
    submitting,
    onSubmit,
    submitFailed,
    onImageChange,
    imagePreview,
  } = props;
  //const [locations, setLocations] = useState(LOCATIONS);
  //const [membershipTypes, setMembershipTypes] = useState(MEMBERSHIP_TYPES);
  const [locations, setLocations] = useState([]);
  const [membershipTypes, setMembershipTypes] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedMembershipType, setSelectedMembershipType] = useState(null);

  
  useEffect(() => {
    // Fetch locations
    fetch("http://localhost:8080/healthclub/findAllLocations")
      .then((response) => response.json())
      .then((data) => setLocations(data));

    // Fetch membership types
    fetch("http://localhost:8080/healthclub/getMembershipData")
      .then((response) => response.json())
      .then((data) => setMembershipTypes(data));
  }, []);

  const handleLocationDropdownChange = (location) => {
    console.log(location);
    setSelectedLocation(location);
  }

  const handleMembershipDropdownChange = (e) => {
    console.log(e);
    setSelectedMembershipType(e);
  }
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
              name="name"
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
              name="mobileNo"
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
            {/* <Field
              name="location"
              type="text"
              component={renderFormGroupField}
              placeholder="Member location"
              icon={IconGeoAlt}onClick={() => handleLocationDropdownChange(location.locationName)}
              validate={[required]}
              required={true}
            /> */}
        <Dropdown>
        <Dropdown.Toggle variant="secondary">
          {selectedLocation ? selectedLocation : 'Select Primary Location'}
          
          <input type="hidden" name="LocationId" value={selectedLocation} />
        </Dropdown.Toggle>
        <Dropdown.Menu >
          {locations.map(location => (
            <Dropdown.Item key={location.locationID} eventKey={location.locationID} value = {location.locationID  } >
              {location.locationName}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <br/>
      <Dropdown>
        <Dropdown.Toggle variant="secondary">
          {selectedMembershipType ? selectedMembershipType : 'Select Membership Type'}
        </Dropdown.Toggle>
    
        <Dropdown.Menu >
          {membershipTypes.map(membershipType => (
            <Dropdown.Item key={membershipType.membershipType} eventKey={membershipType.membershipType}  value={membershipType.membershipType} onClick={() => handleMembershipDropdownChange(membershipType.membershipType)}>
              {membershipType.membershipType}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
          </li>
          <li className="list-group-item">
          <h6 className="text-center">Membership StartDate</h6>
            <Field
              name="startDate"
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
            className="btn btn-primary  d-flex"
            disabled={submitting}
          >
            Submit
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
