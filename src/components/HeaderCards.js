import React from "react";

const HeaderCards = () => {
  return (
    <div className="row mb-4">
      <div className="col-md-3">
        <div className="card card-body">
          <div>Admins</div>
          <div>3</div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card card-body">
          <div>Tippers</div>
          <div>10</div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card card-body">
          <div>Monthly Earnings</div>
          <div>KES. 10</div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card card-body">
          <div>OrgWallet Balance</div>
          <div>KES. 10</div>
        </div>
      </div>
    </div>
  )
}

export default HeaderCards