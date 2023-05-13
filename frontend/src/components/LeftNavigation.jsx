import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink, BrowserRouter, useNavigate } from 'react-router-dom';


const LeftNavigation = (props) => {
//const { userName, userRole } = props;
let isUserLoggedIn = localStorage.getItem('isLoggedIn');
let userName = localStorage.getItem('userName');
let userRole = localStorage.getItem('userType');

const navigate = useNavigate();

function handleLogout() {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('userName');
  localStorage.removeItem('userType');
  localStorage.removeItem('memberId');
  window.location = process.env.REACT_APP_HOME_URL;
}

// const handleLogout = () => {
//   localStorage.removeItem('isLoggedIn');
//   localStorage.removeItem('userName');
//   localStorage.removeItem('userType');
//   localStorage.removeItem('memberId');
//   navigate('/');
// };



  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            {userRole} View
          </a>
        </CDBSidebarHeader>
        {userRole === 'employee' && (

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>

            <NavLink exact to="/employee/enrollmember" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Enroll New Members </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/employee/searchmembers" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Manage Members</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/employee/viewanalytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact onClick={handleLogout} target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">Logout</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
        )}
        {userRole === 'member' && (

      <CDBSidebarContent className="sidebar-content">
        <CDBSidebarMenu>
          <NavLink exact to="/member/myprofile" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="columns">My Profile</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/member/classesView" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="table">Class Signup </CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/member/activities" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="user">My Activities</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/member/schedule" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="columns">My Schedule</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact onClick={handleLogout} activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="exclamation-circle">Logout</CDBSidebarMenuItem>
          </NavLink>

        </CDBSidebarMenu>
      </CDBSidebarContent>
      )}

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
 
  );
};

export default LeftNavigation;