import React from "react";
import { reduxForm } from "redux-form";
import { compose } from "redux";
import{Container,Row,Col,Form} from 'react-bootstrap';
import { useState,useEffect } from "react";

const ProfileForm = (props) => {
  const {
    handleSubmit,
    onSubmit,
    submitFailed,
  } = props;
  let userName = localStorage.getItem('userName');

  const [user, setUser] = useState({});

  useEffect(() => {
    // Make the API call to get the member profile
    //const memberID = 27; // Replace with the member ID you want to fetch


    fetch(process.env.REACT_APP_API_URL+`/getMemberByEmail/${userName}`)
      .then((response) => response.json())
      .then((data) => {
        // Set up the userProfile object based on the response data
        const profile = data[0]; // Take the first profile from the array
        console.log(profile);
        const location = profile.location ? profile.location.locationName : '';
        const membershipType = profile.membership ? profile.membership.membershipType : '';
        const membershipValidity = profile.membership ? profile.membership.validity : '';
        const enrollmentStatus = profile.enrolled ? 'Enrolled' : 'Not Enrolled';
        const membershipStartDate = profile.membershipStartDate ? profile.membershipStartDate : '';
        const date = new Date(membershipStartDate);
        const formattedDate = date.toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        });
        localStorage.setItem("memberId", profile.registrationNumber);
        console.log(formattedDate); // Output: "12-May-2023"
        const userProfileData = {
          registrationNumber: profile.registrationNumber,
          userName: profile.userName,
          phone: profile.phone,
          email: profile.email,
          location: location,
          membershipType: membershipType,
          membershipValidity: membershipValidity,
          membershipStartDate: formattedDate,
          enrollmentStatus: enrollmentStatus,
          fname: profile.fname,
          lastName: profile.lname,
          age: profile.age,
        };
        setUser(userProfileData);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <form
      className={`needs-validation ${submitFailed ? "was-validated" : ""}`}
      noValidate
    >
      <div className="card border-primary">
  
        <ul className="list-group list-group-flush">
        <li className="list-group-item">
        <Container className="my-5">
      <Row>
        <Col>
          <h2>My Profile</h2>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={4}>
          <h5>Personal Information</h5>
          <hr />
          <Form.Group>
            <Form.Label>Membership Number</Form.Label>
            <Form.Control type="text" value={user.registrationNumber} readOnly disabled />
          </Form.Group>
          <Form.Group>
            <Form.Label>Full Name:</Form.Label>
            <Form.Control type="text" value={user.fname} readOnly disabled/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Username:</Form.Label>
            <Form.Control type="text" value={user.userName} readOnly disabled/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" value={user.email} readOnly disabled/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone Number:</Form.Label>
            <Form.Control type="text" value={user.phone} readOnly disabled/>
          </Form.Group>
        </Col>
        <Col sm={4}>
          <h5>Membership Information</h5>
          <hr />
          <Form.Group>
            <Form.Label>Membership Type:</Form.Label>
            <Form.Control type="text" value={user.membershipType} readOnly disabled/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Membership Start Date:</Form.Label>
            <Form.Control type="text" value={user.membershipStartDate} readOnly disabled/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Membership Validity:</Form.Label>
            <Form.Control type="text" value={user.membershipValidity} readOnly disabled/>
          </Form.Group>
        </Col>
        <Col sm={4}>
          <h5>Location Information</h5>
          <hr />
          <Form.Group>
            <Form.Label>Primary Location :</Form.Label>
            <Form.Control type="text" value={user.location} readOnly disabled/>
          </Form.Group>
        </Col>
      </Row>
    </Container>

        </li>
        </ul>
      
      </div>
    </form>
  );
};

export default compose(
  reduxForm({
    form: "profile",
  })
)(ProfileForm);
