import React from "react";
import LineChart from "../../components/Chart";
import HeaderCards from "../../components/HeaderCards";
import Layout from "../../components/Layout";

const transactions = [
  {
  id: 1,
  firstname: 'John',
  lastname: 'Doe',
  identity: 'sender',
  role: 'user',
  amount: 100,
  debitAccount: 'OrgWalletAccount',
  creditAccount: 'MSISDN',
  receivingParty: '254719418656',
  transTime: new Date().getTime()
  },
  {
    id: 2,
    firstname: 'Will',
    lastname: 'Smith',
    identity: 'sender',
    role: 'user',
    amount: 100,
    debitAccount: 'OrgWalletAccount',
    creditAccount: 'MSISDN',
    receivingParty: '254719418656',
    transTime: new Date().getTime()
  },
  {
    id: 3,
    firstname: 'Neo',
    lastname: 'Anderson',
    identity: 'sender',
    role: 'user',
    amount: 100,
    debitAccount: 'OrgWalletAccount',
    creditAccount: 'MSISDN',
    receivingParty: '254719418656',
    transTime: new Date().getTime()
  },
  {
    id: 4,
    firstname: 'Traversy',
    lastname: 'Media',
    identity: 'sender',
    role: 'user',
    amount: 100,
    debitAccount: 'OrgWalletAccount',
    creditAccount: 'MSISDN',
    receivingParty: '254719418656',
    transTime: new Date().getTime()
  }
]

const localTimeDate =(timestamp) => {
  return new Date(timestamp).toLocaleDateString("en-US")
}


const Home = () => {
  return (
    <Layout>
      <HeaderCards />
      <div className="row">
        <div className="col-md-10 mx-auto">
          <div className="card card-body">
            <LineChart />
          </div> 
        </div>
      </div>

      <div className="card-project mt-5">
          <div className="card-bodys">
            <div className="table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>No#</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Identity</th>
                    <th>Amount</th>
                    <th>DebitAccount</th>
                    <th>CreditAccount</th>
                    <th>receivingParty</th>
                    <th>TransTime</th>
                  </tr>
                </thead>
                <tbody>
                  { transactions.map((transaction, index) => (
                    <tr key={index}>
                    <td>{transaction.id}</td>
                    <td>{transaction.firstname}</td>
                    <td>{transaction.lastname}</td>
                    <td>{transaction.identity}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.debitAccount}</td>
                    <td>{transaction.creditAccount}</td>
                    <td>{transaction.receivingParty}</td>
                    <td>{localTimeDate(transaction.transTime)}</td>
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

export default Home;