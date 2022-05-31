import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = ({ profile, title }) => {
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();

    navigate("/");
  };

  return (
    <div className="signup">
      <section>
        <h1>{title}</h1>
        <aside className="top-aside">
          What do you want to do? (you can edit this later)
        </aside>
        <div className="category">
          <label id="left-label">
            <div>I Am</div>
            <div>Student</div>
          </label>
          <label id="right-label">
            <div>I Am</div>
            <div>Teacher</div>
          </label>
        </div>
        <form className="signup-form" method="POST">
          <div className="name-field">
            <input
              type="text"
              name="firstName"
              id="firstname"
              placeholder="First name"
            />
            <input
              type="text"
              name="lastName"
              id="lastname"
              placeholder="Last name"
            />
          </div>
          {!profile && (
            <input type="text" name="email" id="email" placeholder="Email" />
          )}
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />

          <div className="btn-section">
            <div className="signup-btn">
              <button onClick={register}>{profile ? "Edit" : "SIGN UP"}</button>
              {!profile && <Link to="/login">Login</Link>}
            </div>
          </div>
          {profile && (
            <>
              <div className="divider mb-5"> </div>
              <button
                className="btn btn-secondary"
                style={{
                  width: "100%",
                  background: "white",
                  color: "red",
                  border: "1px solid red",
                }}
              >
                Delete Account
              </button>
            </>
          )}
        </form>

        {!profile && (
          <aside className="policy">
            By signing up you accept PeoplePerHour’s Terms of Service and
            Privacy Policy. This site is protected by reCAPTCHA and the Google
            Privacy Policy and Terms of Service apply.
          </aside>
        )}
      </section>
    </div>
  );
};

export default Signup;
