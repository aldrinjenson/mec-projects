import React from "react";
import "./LoginPage.styles.css";

const LoginPage = () => {
  return (
    <div className="loginpage center">
      <div className="row center">
        <div className="input-field col s12 m6 ">
          <input type="number" name="ktuid" />
          <label htmlFor="ktuid">Enter KTU ID</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12 m6">
          <input type="text" name="userName" />
          <label htmlFor="userName">Your Name </label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12 m6">
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
