import React, { lazy, Component } from "react";
const ActivityList = lazy(() => import("../../components/member/ActivityList"));


class MyActivitiesView extends Component {
  state = { imagePreview: "", isDeleting: false };

  onSubmit = async (values) => {
    alert(JSON.stringify(values));
  };


  render() {
    return (
      <div className="container-fluid my-3">
         <div className="row">
          <div className="col-md-20"> 
          <h4 className="text-center">View Member Activities</h4>
            <ActivityList
              onSubmit={this.onSubmit}
            />
          </div>

        </div>
      </div>
    );
  }
}

export default MyActivitiesView;
