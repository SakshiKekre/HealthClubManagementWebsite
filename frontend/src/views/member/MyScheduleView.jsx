import React, { lazy } from "react";
import { useSelector } from "react-redux";
import MemberSchedule from "../../components/member/Schedule";
import LeftNavigation from "../../components/LeftNavigation";
import {Link} from 'react-router-dom';

const MyScheduleView = () => {
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
          <h4 className="text-center">My Schedule</h4>
            {/* <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Link to="/member/AddActivity">
                <button>Add Activity</button>
              </Link>
            </div> */}
          <MemberSchedule onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default MyScheduleView;