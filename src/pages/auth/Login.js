import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
// import { userslogin } from '../../actions/auth';

const Login = () => {
  const [formData, setFormData] = useState({
    role: 'admini',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState('');
  const [remainingAttempt, setRemainingAttempt] = useState(0);
  // const loading = useSelector(state => state.auth.loading);
  let loading= false;
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const handleChange = e => {
    setFormData(current => {
      return {...current, [e.target.name]: e.target.value}
    });
  }

  const { role, email, password } = formData;

  const handleSubmit = async e => {
    e.preventDefault();

    // const {success, message, remaining} = await dispatch(userslogin(formData));
    let success = true;
    let message = 'success'
    let remaining = 1

    if (success) {
      let route = `/dashboard`;
      navigate(route);
    } else {
      setErrors(message);
      setRemainingAttempt(remaining - 1);
      setTimeout(() => {
        setErrors('');
        setRemainingAttempt(0);
      }, 5000);
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
                { remainingAttempt > 0 && <div className="text-center mt-2 mb-2">{remainingAttempt} attempt remaining</div>}
                <div className="form-group text-center mt-3 mb-2">
                  <button type="submit" disabled={loading} className="btn btn-primary text-uppercase custom-label">{loading ? 'logging....' : role === 'superadmin' ? 'Continue' : 'Login'}</button>
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