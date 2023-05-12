import React, { lazy } from "react";
import { useSelector } from "react-redux";
import ActivityList from "../../components/member/ActivityList";
import LeftNavigation from "../../components/LeftNavigation";
import {Link} from 'react-router-dom';

const MyActivitiesView = () => {
  // const userName = useSelector((state) => state.authReducer.userName);
  // const userRole = useSelector((state) => state.authReducer.userRole);

  const onSubmit = async (values) => {
    alert(JSON.stringify(values));
  };

  return (
    <div className="container-fluid my-3">
      <div className="row">
        <div className="col-md-2">
          <LeftNavigation />
        </div>
        <div className="col-md-10">
          <h4 className="text-center">View Member Activities</h4>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Link to="/member/AddActivity">
                <button>Add Activity</button>
              </Link>
            </div>
          <ActivityList onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default MyActivitiesView;