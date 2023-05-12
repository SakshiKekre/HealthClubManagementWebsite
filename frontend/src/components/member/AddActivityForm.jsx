import React, {useEffect, useState} from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import renderFormGroupField from "../../helpers/renderFormGroupField";
import renderFormSelect from "../../helpers/renderFormSelect";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

import {
  required,
  name
} from "../../helpers/validation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ReactComponent as IconPhone } from "bootstrap-icons/icons/phone.svg";
import { ReactComponent as IconEmail } from "bootstrap-icons/icons/envelope.svg";
import { ReactComponent as IconShieldLock } from "bootstrap-icons/icons/shield-lock.svg";
import { ReactComponent as IconPerson } from "bootstrap-icons/icons/person.svg";

import { ReactComponent as IconGeoAlt } from "bootstrap-icons/icons/geo-alt.svg";
import { ReactComponent as IconCalendarEvent } from "bootstrap-icons/icons/calendar-event.svg";
import { ReactComponent as IconPersonSquareFill } from "bootstrap-icons/icons/person-lines-fill.svg";

const AddActivityForm = (props) => {
  const { handleSubmit, submitting, onSubmit, submitFailed } = props;

  // const locations = {label:"SJ",value:"SJ"}
  const [response, setResponse] = useState([]);
  const [locations, setLocations] = useState([]);
  const [responseEqp, setResponseEqp] = useState([]);
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    // Fetch all the memberships and set the state
    const LocationAPI = process.env.REACT_APP_API_URL +"/findAllLocations";
    fetch(LocationAPI)
      .then(response => response.json())
      .then(payload=>{setResponse(payload)})
      .catch(error => console.error(error));
  },[]);

  useEffect(() => {
    const locationOptions = response.map((location) => ({
      label: location.locationName,
      value: location.locationName,
    }));
    locationOptions.unshift({ label: "", value: "" });
    setLocations(locationOptions);
  },[response]);

  useEffect(() => {
    // Fetch all the memberships and set the state
    const equipmentAPI = process.env.REACT_APP_API_URL +"/fetchAllMachines";
    fetch(equipmentAPI)
      .then(response => response.json())
      .then(payload=>{setResponseEqp(payload)})
      .catch(error => console.error(error));
  },[]);

  useEffect(() => {
    const eqpOptions = responseEqp.map((machines) => ({
      label: machines.machineName,
      value: machines.machineName,
    }));
    eqpOptions.unshift({ label: "", value: "" });
    setEquipment(eqpOptions);
  },[responseEqp]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`needs-validation ${submitFailed ? "was-validated" : ""}`}
      noValidate
    >
      <div className="card border-primary">
         <h6 className="card-header">
           <IconPersonSquareFill /> Add a new activity
         </h6>
         <ul className="list-group list-group-flush">
           <li className="list-group-item">
             <Field
              name="location"
              type="text"
              component={renderFormSelect}
              options={locations}
              label="Location"
              icon={IconPerson}
              validate={[required]}
              required={true}
            />
          </li>
          <li className="list-group-item">
            <Field
              name="equipment"
              type="text"
              component={renderFormSelect}
              options={equipment}
              label="Equipment"
              icon={IconPhone}
              validate={required}
              required={true}
            />
          </li>
          <li className="list-group-item">
            <Field
              name="usageDate"
              type="date"
              component={renderFormGroupField}
              label="Usage Date"
              icon={IconGeoAlt}
              validate={[required]}
              required={true}
            />
          </li>
          <li className="list-group-item">
            <Field
              name="startTime"
              type="time"
              component={renderFormGroupField}
              label="Start Time"
              icon={IconCalendarEvent}
              validate={[required]}
              required={true}
            />
          </li>
          <li className="list-group-item">
            <Field
              name="endTime"
              type="time"
              component={renderFormGroupField}
              label="End Time"
              icon={IconCalendarEvent}
              validate={[required]}
              required={true}
            />
          </li>
        </ul>
        <div className="card-body d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginRight: '0.5rem' }}

            disabled={submitting}
          >
            Add
          </button>
          <Link to="/member/activities">
            <button
              // type="cancel"
              className="btn btn-primary"
              style={{ marginRight: '0.5rem' }}
              disabled={submitting}
            >
              Cancel
            </button>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default compose(
  reduxForm({
    form: "addactivity",
  })
)(AddActivityForm);