import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { createPermission, listPermission } from '../../redux/actions/rolesPermissions';
import Layout from "../../components/Layout";



const Permissions  = () => {
  const [permission, setPermission] = useState('');
  const [permissions, setPermissions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState('')
  
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    const getPermission = async () => {
      const perms = await dispatch(listPermission());
      setPermissions(current => perms);
      setLoading(false)
    };
    getPermission();
  }, [dispatch]);
  
  const handleSubmit = async e => {
    e.preventDefault();
    const success = await dispatch(createPermission({permission}));
    if (success) {
      Swal.fire({
        icon: "success",
        "title": "success",
        "text": "Permission created successfully"
      });
      setPermission('');
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
                  <label>Create User Permissions</label>
                  <input type="text" name="permission" value={permission} onChange={e => setPermission(e.target.value.toUpperCase())} placeholder="Create Admin User" className="form-control mt-2" required />
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
                    <th>Permission</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                  </tr>
                </thead>
                <tbody>
                  { permissions.map((permission, index) => (
                    <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{permission.permission}</td>
                    <td>{permission.created_at}</td>
                    <td>{permission.updated_at}</td>
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

export default Permissions;