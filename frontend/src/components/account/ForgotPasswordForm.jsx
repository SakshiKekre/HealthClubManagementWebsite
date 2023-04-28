import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { Link } from "react-router-dom";
import renderFormGroupField from "../../helpers/renderFormGroupField";
import {
  required,
  maxLengthMobileNo,
  minLengthMobileNo,
  digit,
  email,
} from "../../helpers/validation";
import { ReactComponent as IconPhone } from "bootstrap-icons/icons/phone.svg";
import { ReactComponent as IconEmail } from "bootstrap-icons/icons/envelope.svg";

const ForgotPasswordForm = (props) => {
  const { handleSubmit, submitting, onSubmit, submitFailed } = props;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`needs-validation ${submitFailed ? "was-validated" : ""}`}
      noValidate
    >

<Field
        name="email"
        type="string"
        label="Email"
        component={renderFormGroupField}
        placeholder="Please Enter Email"
        icon={IconEmail}
        validate={[required, email]}
        required={true}
        className="mb-3"
      />

      <div className="d-grid">
        <button
          type="submit"
          className="btn btn-primary mb-3"
          disabled={submitting}
        >
          Submit
        </button>
      </div>
      <Link className="float-end" to="/account/signin" title="Sign In">
        Sign In
      </Link>
    </form>
  );
};

export default compose(
  reduxForm({
    form: "forgotpassword",
  })
)(ForgotPasswordForm);
