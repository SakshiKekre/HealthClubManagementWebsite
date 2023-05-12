<<<<<<< HEAD
import React, { lazy, Component } from "react";
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom';

const LeftNav = lazy(() => import("../../components/LeftNavigation"));
const ActivityList = lazy(() => import("../../components/member/ActivityList"));
=======
import React, { lazy } from "react";
import { useSelector } from "react-redux";
import ActivityList from "../../components/member/ActivityList";
import LeftNavigation from "../../components/LeftNavigation";
>>>>>>> 5aa7e61e730b37da74f548c4d7bee26653dd3496

const MyActivitiesView = () => {
  // const userName = useSelector((state) => state.authReducer.userName);
  // const userRole = useSelector((state) => state.authReducer.userRole);

<<<<<<< HEAD
class MyActivitiesView extends Component {
  state = { imagePreview: "", isDeleting: false };

  onSubmit = async (values) => {
    // alert(JSON.stringify(values));
  };

   handleAddActivity = () =>{

   };

  render() {
    return (
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-2"> 
            <LeftNav/>
          </div>
          <div className="col-md-10"> 
            <div className="row">
            <h4 className="text-center">View Member Activities</h4>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Link to="/member/AddActivity">
                <Button onClick={this.handleAddActivity}>Add Activity</Button>
              </Link>
              </div>
            </div>
            
            <ActivityList onSubmit={this.onSubmit}/>
          </div>
=======
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
          <ActivityList onSubmit={onSubmit} />
>>>>>>> 5aa7e61e730b37da74f548c4d7bee26653dd3496
        </div>
      </div>
    </div>
  );
};

export default MyActivitiesView;