import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#ff6700">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="./Profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/workexperienceandskills" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="briefcase">Work Experience & Skills</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tasks" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="tasks">Tasks</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/myproject" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="cubes">My Project</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/leavesandleavebank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="calendar">Leaves and Leave Bank</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/bankdetails" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="university">Bank Details</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/logout" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="times">LogOut</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;