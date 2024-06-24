import React from "react";
import { Link } from "react-router-dom";
import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarMenuItem,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBSidebarFooter,
} from "cdbreact";

const Sidenav = () => {
  return (
    <div className="sideNav">
      <CDBSidebar>
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
          <Link to={"/"} style={{ color: "#fff" }}>
            SOON KITCHEN
          </Link>
        </CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <CDBSidebarMenuItem icon="th-large">
              {" "}
              <Link to="/Dashboard">Dashboard</Link>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="sticky-note">
              <Link to="/Dashboard/Brands">Brands</Link>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="sticky-note">
              <Link to="/Dashboard/Labels">Labels</Link>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="sticky-note">
              <Link to="/">webSite</Link>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="sticky-note">
              <Link to="/menu">Menu</Link>
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div className="sidebar-btn-wrapper" style={{ padding: "20px 5px" }}>
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidenav;
