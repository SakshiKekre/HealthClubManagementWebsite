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

const EnrollmentForm = (props) => {
  const {
    handleSubmit,
    submitting,
    onSubmit,
    submitFailed,
    onImageChange,
    imagePreview,
  } = props;
  const [locations, setLocations] = useState(LOCATIONS);
  const [selectedLocation, setSelectedLocation] = useState(null);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`needs-validation ${submitFailed ? "was-validated" : ""}`}
      noValidate
    >
      <div className="card border-primary">

        <div className="card-body">
         
        </div>
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
              icon={IconGeoAlt}
              validate={[required]}
              required={true}
            /> */}
             <Dropdown>
        <Dropdown.Toggle variant="secondary">
          {selectedLocation ? selectedLocation : 'Select Primary Location'}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {locations.map(location => (
            <Dropdown.Item key={location} value={location} >
              {location}
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
