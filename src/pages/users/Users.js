import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import { listUsers } from "../../redux/actions/users";


// let users = [];

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch()

  useEffect(() => {
    const getUsers = async() => {
      setLoading(true)
      const res = await dispatch(listUsers());
      setUsers(current => res);
      setLoading(false);
    }
    getUsers();
  }, [dispatch])

  return (
    <Layout>
      <div className="d-flex justify-content-end flex-end">
        <Link to="/adduser" className="btn btn-primary btn-sm">CREATE USER</Link>
      </div>
      <div className="card-project mt-5">
        <div className="card-bodys">
          <div className="table-responsive">
            {loading ? 'Loading...' : (
            <table>
              <thead>
                <tr>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>Phone</th>
                  <th>ID Number</th>
                  <th>Role</th>
                  <th>Created At</th>
                  <th>View</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                { users.map((user, index) => (
                  <tr key={index}>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.mobile}</td>
                  <td>{user.idno}</td>
                  <td>{user.role}</td>
                  <td>{user.created_at}</td>
                  <td>
                  <span><i className="las la-eye"></i></span>
                  </td>
                  <td>
                    <span><i className="las la-trash"></i></span>
                  </td>
                </tr>
                )) }
              </tbody>
            </table>)}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default UsersList;