import React, { lazy } from "react";
import { useSelector } from 'react-redux';

const ProfileForm = lazy(() => import("./../../components/account/ProfileForm"));
const LeftNavigation = lazy(() => import("../../components/LeftNavigation"));


const MyProfileView = () => {

  // const userName = useSelector((state) => state.authReducer.userName);
  // const userRole = useSelector((state) => state.authReducer.userRole);




    return (
      <div className="container-fluid my-3">
        <div className="row">
        <div className="col-md-2">
          <LeftNavigation /> 

          </div>
          <div className="col-md-6">
            <ProfileForm/>
          </div>

        </div>
      </div>
    );
}

export default MyProfileView;
