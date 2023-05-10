import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const LeftNavigation = (props) => {
const { userName, userRole } = props;
// const path = window.location.pathname;
// const isMember = path.includes("/member");
// const isEmployee = path.includes("/employee");



  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            You loggedin as {userName}
          </a>
        </CDBSidebarHeader>
        {userRole === 'employee' && (

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">My Profile</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Enroll New Members </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Manage Members</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">Logout</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
        )}
        {userRole === 'member' && (

      <CDBSidebarContent className="sidebar-content">
        <CDBSidebarMenu>
          <NavLink exact to="/" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="columns">My Profile</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/tables" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="table">Class Signup </CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/profile" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="user">My Activities</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/analytics" activeClassName="activeClicked">
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
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default LeftNavigation;