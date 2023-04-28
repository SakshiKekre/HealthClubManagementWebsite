import React, { lazy, Component } from "react";
const EnrollForm = lazy(() => import("./../../components/account/EnrollmentForm"));


class EnrollmentView extends Component {
  state = { imagePreview: "", isDeleting: false };

  onSubmitEnrollment = async (values) => {
    alert(JSON.stringify(values));
  };


  render() {
    return (
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-6">
          <h4 className="text-center">Member Enrollment</h4>
            <EnrollForm
              onSubmit={this.onSubmitEnrollment}
            />
          </div>

        </div>
      </div>
    );
  }
}

export default EnrollmentView;
