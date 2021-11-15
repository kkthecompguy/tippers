import React from "react";

const Sidebar = () => {
  return (
    <React.Fragment>
      <input type="checkbox" id="nav-toggle" />
      <div className="sidebar">
        <div className="sidebar-brand">
          <h3><span className="lab la-accusoft"></span><span>Tippers</span></h3>
        </div>

        <div className="sidebar-menu">
          <ul>
            <li>
              <a href="#!" className="active"><span className="las la-igloo"></span><span>Home</span></a>
            </li>
            <li>
              <a href="#!" className=""><span className="las la-clipboard-list"></span><span>Issues</span></a>
            </li> 
            <li>
              <a href="#!" className=""><span className="las la-users"></span><span>Users</span></a>
            </li>
            <li>
              <a href="#!" className=""><span className="las la-user"></span><span>Add User</span></a>
            </li>
            <li>
              <a href="#!" className=""><span className="las la-user"></span><span>User Roles</span></a>
            </li>
            <li>
              <a href="#!" className=""><span className="las la-clipboard-list"></span><span>Category</span></a>
            </li>
            <li>
              <a href="#!" className=""><span className="las la-user-circle"></span><span>Accounts</span></a>
            </li> 
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Sidebar;