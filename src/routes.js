import React from "react";
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";


const RoutesPages = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}  />
        <Route path="/forgotpassword" element={<ForgotPassword />}  />
        <Route path="/resetpassword" element={<ResetPassword />}  />
        <Route path="/dashboard" element={<Home/>} />
      </Routes>
    </Router>
  )
}

export default RoutesPages;