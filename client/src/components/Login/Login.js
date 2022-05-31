import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="login-outer-section d-flex align-items-center justify-content-center">
      <section className="login-inner-section shadow">
        <div className="login-content">
          <div className="login-logo">
            <h1>Log In</h1>
            <Link to="/signup">Don't have an account? Sign Up</Link>
          </div>
          <div className="login-line">
            <div></div>
            <p>or</p>
            <div></div>
          </div>
          <section className="login-input-section">
            <form className="login-form">
              <label>EMAIL</label>
              <input type="text" name="email" id="email" />
              <label>PASSWORD</label>
              <input type="password" name="password" id="password" />
              <div className="remember align-items-center">
                {/* <label>Remember Me</label> */}
                <p>Forgot Password</p>
              </div>
              
              <button onClick={login}>LOG IN</button>
              <div className="divider my-5">
            
              </div>

              <div className="buttons w-100 d-flex align-items-center justify-content-between">
                <button className="btn btn-primary" style={{width:'45%',background:'white',color:'blue',border:'1px solid blue'}}>Facebook</button>
                <button className="btn btn-secondary" style={{width:'45%',background:'white',color:'red',border:'1px solid red'}}>Google</button>
              </div>
            </form>
          </section>
          <small className="login-bottom-text">
            By clicking Log In, Facebook or LinkedIn you agree to our new T&C's
          </small>
        </div>
      </section>
    </div>
  );
};

export default Login;