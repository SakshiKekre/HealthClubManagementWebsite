import React, { lazy, Component } from "react";
const GymMembersList = lazy(() => import("../../components/Employee/GymMembersList"));
const LeftNavigation = lazy(() => import("../../components/LeftNavigation"));


class SearchMembersView extends Component {
  state = { imagePreview: "", isDeleting: false };
  
  onSubmit = async (values) => {
    alert(JSON.stringify(values));
  };

  

  render() {
    return (
      <div className="container-fluid my-3">
        <div className="row">
        <div className="col-md-2">
          <LeftNavigation /> 
          
          </div>
          <div className="col-md-6">
          <h4 className="text-center">Search Members</h4>
            <GymMembersList
              onSubmit={this.onSubmit}
            />
          </div>

        </div>
      </div>
    );
  }
}

export default SearchMembersView;
