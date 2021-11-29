import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import Layout from "../../components/Layout";
import { listPermission, listRoles } from "../../redux/actions/rolesPermissions";
import { createuser } from "../../redux/actions/users";
import { passwordGenerator, phoneFormatter, removeUndefined } from "../../utils/utils";

let permissionss = ['CREATEUSER', 'VIEWTRANSACTION', 'DELETEUSER', 'DELETEUSER']

const CreateUser = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    idno: "",
    role: ""
  });
  const [userPermission, setUserPermission] = useState('');
  const [permissions, setPermissions] = useState([]);
  const [roles, setRoles] = useState([]);

  const [checkedState, setCheckedState] = useState(
    new Array(permissionss.length).fill(false)
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    const getPermissions = async() => {
      const res = await dispatch(listPermission());
      setPermissions(current => res)
      setCheckedState(current => new Array(res.length).fill(false))
    }
    getPermissions();
    const getRoles = async() => {
      const res = await dispatch(listRoles());
      setRoles(current => res);
    }
    getRoles()
  }, [dispatch])

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const returnVal  = updatedCheckedState.map((currentState, index) => {
      let newArray = []
      if(currentState === true) {
        newArray.push(permissions[index].name)
        return newArray
      } else {
        return newArray
      }
    });
    setUserPermission(returnVal.toString())
    
  };

  console.log({userPermission})

  const handleChange = e => setFormData(current => {
    return  {...current, [e.target.name]: e.target.value}
  })

  const handleSubmit = async e => {
    e.preventDefault();
    let splitPermission = userPermission.split(",")
    let removed = removeUndefined(splitPermission);
    let phone = phoneFormatter(formData.mobile);
    let password = passwordGenerator();

    let newFormData = {...formData, mobile: phone, permission:removed, password, password_confirmation: password}
    console.log(newFormData)

    const success = await dispatch(createuser(newFormData));
    if (success) {
      Swal.fire({
        icon: "success",
        "title": "success",
        "text": "users created successfully"
      });
      setFormData(current => {
        return {...current, first_name: "", last_name: "", mobile: "",  idno: "", role: "", email: ""}
      })
      setCheckedState(new Array(permissions.length).fill(false));
      let route = '/users';
      navigate(route);
    } else {
      Swal.fire({
        icon: "error",
        "title": "error",
        "text": "something went wrong"
      });
    }
  }

  const { first_name, last_name, email, idno, role, mobile } = formData;

  return (
    <Layout>
      <div className="card card-body">
        <form onSubmit={e => handleSubmit(e)}>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="first_name">First Name</label>
              <input
               type="text" 
               name="first_name" 
               id="first_name" 
               value={first_name}
               onChange={e => handleChange(e)}
               className="form-control" required />
            </div>
            <div className="col-md-6">
              <label htmlFor="last_name">Last Name</label>
              <input
               type="text" 
               name="last_name" 
               id="last_name" 
               value={last_name}
               onChange={e => handleChange(e)}
               className="form-control" 
               required />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <label htmlFor="mobile">Mobile Number</label>
              <input
               type="text" 
               maxLength={10} 
               name="mobile" 
               id="mobile" 
               value={mobile}
               onChange={e => handleChange(e)}
               className="form-control" 
               required />
            </div>
            <div className="col-md-6">
              <label htmlFor="idno">ID Number</label>
              <input
               type="text" 
               maxLength={8} 
               name="idno" 
               id="idno" 
               value={idno}
               onChange={e => handleChange(e)}
               className="form-control" 
               required />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <label htmlFor="email">Email</label>
              <input
               type="email" 
               name="email" 
               id="email" 
               value={email}
               onChange={e => handleChange(e)}
               className="form-control" 
               required />
            </div>

            <div className="col-md-6">
              <label htmlFor="mobile">Role</label>
              <select name="role" value={role} onChange={e => handleChange(e)} className="form-control" required>
                <option value="">select</option>
                {roles.map((role, index) => (
                  <option key={index} value={role.name}>{role.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12">
              <label htmlFor="mobile">Permissions</label>
                <div className="form-group-custom-check">
                  {permissions.map((permission, index) => (
                    <div key={index} className="form-group-inline">
                    <input
                     className="form-check-input mt-0" 
                     type="checkbox" 
                     value={permission.name} 
                     name={permission.name}
                     checked={checkedState[index]}
                     onChange={() => handleOnChange(index)}
                     aria-label="Checkbox for following text input" />
                    <label htmlFor={permission.name}>{permission.name}</label>
                  </div>
                  ))}  
                </div>
            </div>
          </div>

          <div className="form-group mt-4">
            <button type="submit" className="btn btn-sm btn-primary">SAVE</button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default CreateUser;