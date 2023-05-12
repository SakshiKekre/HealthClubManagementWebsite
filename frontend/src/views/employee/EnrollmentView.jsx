import React, { lazy, Component } from "react";
const EnrollForm = lazy(() => import("./../../components/account/EnrollmentForm"));
const LeftNavigation = lazy(() => import("../../components/LeftNavigation"));



class EnrollmentView extends Component {
  state = { imagePreview: "", isDeleting: false,success: false };

  onSubmitEnrollment = async (values) => {
    console.log(JSON.stringify(values));
    const [locationId, locationName] = values.locationId.split("-");
    const jsonStructure = {
      fname: values.fname,
      userName: values.email,
      password: values.password,
      phone: values.phone,
      email: values.email,
      membershipStartDate:values.membershipStartDate,
      location: {
        locationID: locationId,
        locationName: locationName,
      },
      membership: {
        membershipType: values.membershipType,
        validity: "90"
      },
      enrolled: false,
    };

    fetch(process.env.REACT_APP_API_URL +'/healthclub/doRegister', {
    method: 'POST',
   headers: {
      'Content-Type': 'application/json'
    },
   body: JSON.stringify(jsonStructure)
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

    return (
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-2">
            <LeftNavigation />
          </div>
          <div className="col-md-6">
          <h4 className="text-center">Member Enrollment</h4>
          {this.state.success ? (
              <div className="alert alert-success" role="alert">
                Enrollment submitted submitted successfully!
              </div>
            ) : null
            }
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
