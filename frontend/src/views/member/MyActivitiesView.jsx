import React, { lazy, Component } from "react";
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom';

const LeftNav = lazy(() => import("../../components/LeftNavigation"));
const ActivityList = lazy(() => import("../../components/member/ActivityList"));


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
        </div>
      </div>
    );
  }
}

export default MyActivitiesView;
