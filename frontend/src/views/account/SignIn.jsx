import React, { lazy, Component } from "react";
import { Link,useHistory,useNavigate } from "react-router-dom";
const SignInForm = lazy(() => import("../../components/account/SignInForm"));

function SignInView()  {
 
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    console.log(JSON.stringify(values));
    console.log(values.email);
    console.log(values.password);

    console.log('INSIDE SIBUMIT');
  
    const url = 'http://localhost:8080/healthclub/login/shiva/shiva';
    //const userType = 'employee';

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log('insode response');
      //console.log(response.json())
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      //handle data
      console.log('insode data handling');
      console.log(data);
      console.log(data.userName);
      console.log(data.userType);
      const userType = data.userType;

    
    if(userType == 'employee') {
      navigate('/employee/enrollmember');
    } else if(userType == 'member') {
      navigate('/member/myprofile');
    } else {
      navigate('/');
    }

    })
    .catch(error => {
      console.log(error);
    });

    
  };
    return (
      <div className="container-sm my-3">
        <div className="row border">
          <div className="col p-3">
            <h4 className="text-center">Sign In</h4>
            <SignInForm onSubmit={onSubmit} />
          </div>
        </div>
      </div>
    );
  }

export default SignInView;
