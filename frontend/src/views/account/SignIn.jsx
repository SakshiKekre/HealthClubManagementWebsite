import React, { lazy } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
const SignInForm = lazy(() => import("../../components/account/SignInForm"));




function SignInView()  {
 
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = React.useState('');
  
  const onSubmit = async (values) => {
    console.log(JSON.stringify(values));

    console.log('INSIDE Submit');
  
    const url = process.env.REACT_APP_API_URL +`/login/${values.email}/${values.password}`;
    //const userType = 'employee';

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      if (!response.ok) {
        console.log('inside response not ok'+response.statusText);
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
      //handle data
      console.log('data#####'+data)
      if (typeof data === 'string' && data.includes('Invalid:')) {
        setErrorMessage(data);
      } else {
        // set user info in redux store or local storage
        const userType = data.userType;
        console.log(userType);
        //dispatch(login(data.userName, data.userType));
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("userName", data.userName);
        localStorage.setItem("userType", userType);
      
      if(userType == 'employee') {
        navigate('/employee/enrollmember');
      } else if(userType == 'member') {
        navigate('/member/myprofile');
      } else {
        navigate('/');
      }
    }
    })
    .catch(error => {
      console.log(error);
      if (error.message.startsWith('Invalid:')) {
        // display the error message to the user
        console.log(error.message);
        setErrorMessage('error.message');
      } else {
        // handle other errors
        console.log('An error occurred:', error);
        setErrorMessage('Invalid credentials or user doesnot exist');
      }
      
    });

    
  };
    return (
      <div className="container-sm my-3">
        <div className="row border">
          <div className="col p-3">
            <h4 className="text-center">Sign In</h4>
            <SignInForm onSubmit={onSubmit} />
            {errorMessage && <div className="text-center text-danger font-weight-bold">{errorMessage}</div>}
            
          </div>
        </div>
      </div>
    );
  }

export default SignInView;
