import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import Sidebar from "./Sidebar";
import { logout } from '../redux/actions/auth';

const Layout =  (props) => {
  const [ showModal, setShowModal ] = useState(false);
  const toggleShowModal = () => setShowModal(!showModal);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Sidebar />
      <div className="main-content">
        <header>
          <h2>
            <label htmlFor="nav-toggle">
              <span className="las la-bars"></span>
            </label>
            Dashboard
          </h2> 

          <div className="user-wrapper">
            <img onClick={toggleShowModal} src={"https://images.unsplash.com/photo-1617722944387-5166b39cd735?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"} alt="" height="40px" width="40px" />
            {showModal && (
              <div className="profile-modal">
              <small>Profile</small>
              <small>Settings</small>
              <small onClick={() => dispatch(logout())}>Logout</small>
            </div>
            )}
          </div>
        </header>

        <main>
          <div className="container">
            {props.children}
          </div>
        </main>
        
      </div>
    </React.Fragment>
  )
}

export default Layout;