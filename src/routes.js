import React from "react";
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import Permissions from "./pages/roles/Permissions";
import Roles from "./pages/roles/Roles";
import UsersList from "./pages/users/Users";


const RoutesPages = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}  />
        <Route path="/forgotpassword" element={<ForgotPassword />}  />
        <Route path="/resetpassword" element={<ResetPassword />}  />
        <Route path="/dashboard" element={<Home/>} />
        <Route path="/permissions" element={<Permissions/>} />
        <Route path="/roles" element={<Roles/>} />
        <Route path="/users" element={<UsersList/>} />
      </Routes>
    </Router>
  )
}

export default RoutesPages;