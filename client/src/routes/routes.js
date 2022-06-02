import React, { useEffect } from "react";
import { Navigate, useRoutes, useNavigate } from "react-router-dom";

//pages
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Main from "../pages/main/Main";
import Home from "../pages/app/Home";

//protected
import LoggedInProtection from "./LoggedInProtection";
import LoggedOutProtection from "./LoggedOutProtection";

//redux
import { getToken, deleteToken } from "../store/localStorage";
import { loadProfile } from "../store/actions/authActions";
import { useSelector, useDispatch } from "react-redux";

// ----------------------------------------------------------------------

export default function Router() {
  const { isSignedIn = false } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = getToken();
      if (token && !isSignedIn) {
        const loadProfileResponse = await dispatch(loadProfile(token));
        if (loadProfileResponse) {
          deleteToken();
          navigate("/");
        }
      }
    };
    fetchProfile();
  }, [isSignedIn, dispatch, navigate]);

  return useRoutes([
    {
      path: "/",
      element: (
        <LoggedOutProtection redirectTo={"/main/home"}>
          <Login />
        </LoggedOutProtection>
      ),
    },
    {
      path: "signup",
      element: (
        <LoggedOutProtection redirectTo={"/main/home"}>
          <Signup />
        </LoggedOutProtection>
      ),
    },
    {
      path: "main",
      element: <Main />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
      ],
    },
  ]);
}
