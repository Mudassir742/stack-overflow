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
// import { getToken, deleteToken } from "src/store/localStorage";
// import { loadProfile } from "src/store/actions/authActions";
// import { useSelector, useDispatch } from "react-redux";

// ----------------------------------------------------------------------

export default function Router() {
  // const { isSignedIn = false } = useSelector((state) => state.auth);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     const token = getToken();
  //     if (token && !isSignedIn) {
  //       const loadProfileResponse = await dispatch(loadProfile(token));
  //       if (loadProfileResponse) {
  //         deleteToken();
  //         navigate("/");
  //       }
  //     }
  //   };
  //   fetchProfile();
  // }, [isSignedIn, dispatch, navigate]);

  return useRoutes([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "signup",
      element: <Signup />,
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
