import React from "react"
import { useState, useEffect } from "react";
import Layout from "./component/Layout";
import { fetchOrganisation, sendInvite } from "./methods/methods";
import ErrorUi from "./component/ErrorUi/ErrorUi";
import LoadingUi from "./component/LoadingUi/LoadingUi";
import SuccessUi from "./component/SuccessUi/SuccessUi";

import "./styles/App.css"
import "./styles/css/all.css"
export default  function App() {
  const [orgName, setOrgName] = useState("");
  const [logo, setLogo] = useState("");
  const [username, setusername] = useState("");
  const [error, setError] = useState({ isError: false, info: "" });
  const [loading, setLoading] = useState({ status: false, onInit: false });
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    fetchOrganisation(setOrgName, setLogo, setError, setLoading);
  }, []);

  return (
    <div>
      <Layout>
        <div className="header">
          <div className="orglogo">
            <img src={logo} alt="org logo" />
          </div>
          <div className="orgdetails">
            <p className="orgName">
              <span>{orgName}</span> Github Organisation
            </p>
          </div>
        </div>
        <div className="main">
          <h2>Invite your self to {orgName} org</h2>
          <input
            type="text"
            onChange={(e) => setusername(e.target.value)}
            value={username}
            placeholder="Enter Github Username"
          />
          {/* <Dropdown input={username}/> */}
          <button
            onClick={() => {
              sendInvite(username, setError, setLoading,setSuccess);
              setusername("");
            }}
          >
            Invite
          </button>
        </div>
      </Layout>
      <ErrorUi
        error={error}
        closeError={() => {
          setError({ isError: false, info: "" });
        }}
      />
      <LoadingUi loading={loading} />
      <SuccessUi  success={success} closeSuccess={()=>{
          setSuccess(false);
      }}/>
    </div>
  );
}
