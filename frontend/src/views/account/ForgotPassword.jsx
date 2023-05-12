import React, { lazy, Component } from "react";
const ForgotPasswordForm = lazy(() =>
  import("../../components/account/ForgotPasswordForm")
);

function ForgotPasswordView()  {

  const [errorMessage, setErrorMessage] = React.useState('');

  const onSubmit = async (values) => {
    setErrorMessage('Email sent to '+values.email +' sucessfully');
  };

    return (
      <div className="container my-3">
        <div className="row justify-content-md-center ">
          <div className="col-md-4 p-3 border">
            <h4 className="text-center">Forgot Password</h4>
            <ForgotPasswordForm onSubmit={onSubmit} />
            <div className="text-center text-danger font-weight-bold">{errorMessage}</div>
          </div>
        </div>
      </div>
    );
  }

export default ForgotPasswordView;
