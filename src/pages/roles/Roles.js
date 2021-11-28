import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { createPermission, listRoles } from '../../redux/actions/rolesPermissions';
import Layout from "../../components/Layout";



const Roles  = () => {
  const [role, setRole] = useState('');
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState('')
  
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    const getRoles = async () => {
      const roles = await dispatch(listRoles());
      setRoles(current => roles);
      setLoading(false)
    };
    getRoles();
  }, [dispatch]);
  
  const handleSubmit = async e => {
    e.preventDefault();
    const success = await dispatch(createPermission({role}));
    if (success) {
      Swal.fire({
        icon: "success",
        "title": "success",
        "text": "Permission created successfully"
      });
      setRole('');
      setErrors('')
    } else {
      setErrors('Permission already registered');
    }
  }


  return (
    <Layout>
      <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card card-body">
              <form onSubmit={e => handleSubmit(e)}>
                <div className="form-group mb-4">
                  <label>Create User Roles</label>
                  <input type="text" name="role" value={role} onChange={e => setRole(e.target.value.toUpperCase())} placeholder="Administrator" className="form-control mt-2" required />
                </div>
                <div>
                  <button type="submit" className="btn btn-primary btn-sm mt-2 mb-2 text-center">Create</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="card-project mt-5">
          <div className="card-bodys">
            {loading ? 'loading...': (
              <div className="table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>No#</th>
                    <th>Roles</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                  </tr>
                </thead>
                <tbody>
                  { roles.map((role, index) => (
                    <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{role.role}</td>
                    <td>{role.created_at}</td>
                    <td>{role.updated_at}</td>
                  </tr>
                  )) }
                </tbody>
              </table>
            </div>
            )}
          </div>
        </div>
    </Layout>
  );
}

export default Roles;