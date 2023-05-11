import React, { lazy, Component } from "react";
const EnrollForm = lazy(() => import("./../../components/account/EnrollmentForm"));
const LeftNavigation = lazy(() => import("../../components/LeftNavigation"));

const userName = "John";
const userRole = "employee";



class EnrollmentView extends Component {
  state = { imagePreview: "", isDeleting: false,success: false };



  onSubmitEnrollment = async (values) => {
    alert(JSON.stringify(values));

    fetch('http://localhost:8080/healthclub/doRegister', {
    method: 'POST',
   headers: {
      'Content-Type': 'application/json'
    },
   body: JSON.stringify(values)
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    if (data.status === "success") {
      this.setState({ success: true }); // Update success state
    }
  })
  .catch(error => console.error(error));
  

  };


  render() {
    const initialValues = {
      // Set the value of the hidden field
      LocationId: "640bb00c57241540e9c129d7",
      MembershipType: "basic",
    };

    return (
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-2">
            <LeftNavigation userName={userName} userRole={userRole}/>
          </div>
          <div className="col-md-6">
          <h4 className="text-center">Member Enrollment</h4>
          {this.state.success ? (
              <div className="alert alert-success" role="alert">
                Enrollment submitted submitted successfully!
              </div>
            ) : null
            }
            <EnrollForm initialValues={initialValues}
              onSubmit={this.onSubmitEnrollment}
            />
          </div>

        </div>
      </div>
    );
  }
}

export default EnrollmentView;
