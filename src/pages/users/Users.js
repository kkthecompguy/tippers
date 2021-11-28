import React from "react";
import Layout from "../../components/Layout";


let users = [];

const UsersList = () => {
  return (
    <Layout>
      <div className="d-flex justify-content-end flex-end">
        <button className="btn btn-primary btn-sm">CREATE USER</button>
      </div>
      <div className="card-project mt-5">
        <div className="card-bodys">
          <div className="table-responsive">
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
            </table>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default UsersList;