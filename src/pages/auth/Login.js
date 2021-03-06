import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { userslogin } from '../../redux/actions/auth';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState('');
  const loading = useSelector(state => state.auth.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  const handleChange = e => {
    setFormData(current => {
      return {...current, [e.target.name]: e.target.value}
    });
  }

  const { email, password } = formData;

  const handleSubmit = async e => {
    e.preventDefault();

    const {success, message} = await dispatch(userslogin(formData));
    if (success) {
      let route = `/dashboard`;
      navigate(route);
    } else {
      setErrors(message);
    }
  }

  return (
    <div className="auth-bg-color">
      <div className="container">
        <div className="row">
          <div className="col-md-5 mx-auto mt-custom">
            <div className="card card-body">
              <p className="login-heading">ADMINISTRATOR LOGIN</p>
              <form onSubmit={e => handleSubmit(e)}>
                <div className="form-group">
                  <div className="text-center text-uppercase">
                    <span className="custom-label mr-2">Login</span>
                  </div> 
                </div> 
                <div className="form-group">
                  <label htmlFor="email" className="custom-label">Email</label>
                  <input
                   type="email" 
                   id="email" 
                   name="email" 
                   value={email}
                   required
                   onChange={e => handleChange(e)}
                   className="form-control"  />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="custom-label">Password</label>
                  <input
                   type="password" 
                   id="password" 
                   name="password" 
                   value={password}
                   required
                   onChange={e => handleChange(e)}
                   className="form-control"  />
                </div>
                {errors && <div className="pwd-error text-center mt-2 mb-2">
                  {errors}
                </div>}
                <div className="form-group text-center mt-3 mb-2">
                  <button type="submit" disabled={loading} className="btn btn-primary text-uppercase custom-label">{loading ? 'logging....' : 'Login'}</button>
                </div>
                <div className="form-group">
                  <Link to="/forgotpassword" className="custom-label">Forgot Password?</Link>
                </div>
              </form>
            </div>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Login;