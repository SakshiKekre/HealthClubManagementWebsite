import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import renderFormGroupField from "../../helpers/renderFormGroupField";
import renderFormSelect from "../../helpers/renderFormSelect";
import {
  required,
  name
} from "../../helpers/validation";
import { ReactComponent as IconPerson } from "bootstrap-icons/icons/person.svg";
import { ReactComponent as IconPhone } from "bootstrap-icons/icons/phone.svg";
import { ReactComponent as IconGeoAlt } from "bootstrap-icons/icons/geo-alt.svg";
import { ReactComponent as IconCalendarEvent } from "bootstrap-icons/icons/calendar-event.svg";
import { ReactComponent as IconPersonSquareFill } from "bootstrap-icons/icons/person-lines-fill.svg";

const locationOptions = [
  { label: 'San Jose', value: 'San Jose' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' }
];

const AddActivityForm = (props) => {
  const {
    handleSubmit,
    submitting,
    onSubmit,
    submitFailed,
    onImageChange,
    imagePreview,
  } = props;
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
        {/* <img
          src={imagePreview ? imagePreview : "../../images/NO_IMG.png"}
          alt=""
          className="card-img-top rounded-0 img-fluid bg-secondary"
        /> */}
        {/* <div className="card-body">
          <Field
            name="formFile"
            component={renderFormFileInput}
            onImageChange={onImageChange}
            validate={[required]}
            tips="You don't allow uploading a photo more than 5MB"
          />
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
        </div> */}
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <Field
              name="location"
              type="text"
              component={renderFormSelect}
              options={locationOptions}
              label="Location"
              icon={IconPerson}
              validate={[required, name]}
              required={true}
            />
          </li>
          <li className="list-group-item">
            <Field
              name="equipment"
              type="text"
              component={renderFormSelect}
              options={locationOptions}
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
)(AddActivityForm);
