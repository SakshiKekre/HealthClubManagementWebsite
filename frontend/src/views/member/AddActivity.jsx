import React, { lazy, Component } from "react";
import { Link,useHistory,useNavigate } from "react-router-dom";
const AddActivityForm = lazy(() => import("../../components/member/AddActivityForm"));
const LeftNav = lazy(() => import("../../components/LeftNavigation"));

function AddActivityView()  {
 
  const navigate = useNavigate();

  const onSubmit = async (values) => {

    let memberID = localStorage.getItem('memberId');
    const requestBody = {
      registrationNumber: memberID,
      activityStartTime: values.startTime,
      activityEndTime: values.endTime,
      activityPerformedDate: values.usageDate,
      equipment: values.equipment,
      location: values.location
    };

    console.log(JSON.stringify(values));
    console.log(JSON.stringify(requestBody));
    console.log('INSIDE SIBUMIT');
  
    const url =  process.env.REACT_APP_API_URL +'/addActivity';
    //const userType = 'employee';

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody),
      redirect: 'follow'
    })
    .then(response => {
      console.log('insode response');
      //console.log(response.json())
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      navigate('/member/activities');
    })
    
  };
    return (
      <div className="container-fluid my-3">
        <div className="row">
        <div className="col-md-2"> 
            <LeftNav/>
        </div>
        <div className="col-md-10 row border">
          {/* <div className="col-md-2"> */}
            <h4 className="text-center">Add activity data</h4>
            <AddActivityForm onSubmit={onSubmit} />
          {/* </div> */}
        </div>
        </div>

      </div>
    );
  }

export default AddActivityView;
