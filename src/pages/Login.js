import React from "react";

const LoginPage = () => {
  return (
    <div className="form-page">
      <h2>Login to Your Account</h2>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </div>
  );
};

export default LoginPage;
