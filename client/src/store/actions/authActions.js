import userInstance from "../../axios/userInstance";
import {
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS,
  LOAD_PROFILE_SUCCESS,
} from "../action-types";
import { saveToken, deleteToken } from "../localStorage";

export const signIn = (formValues) => {
  const { email, password } = formValues;

  return async (dispatch) => {
    const loginResponse = await userInstance.post("/sign-in", {
      email,
      password,
    });
    saveToken(loginResponse.data.token);
    dispatch({ type: SIGN_IN_SUCCESS, payload: loginResponse.data.data.user });
  };
};

export const loadProfile = (token) => {
  return async (dispatch) => {
    try {
      const loadProfileResponse = await userInstance.get("/get-profile", {
        headers: {
          "authorization": `Bearer ${token}`,
        }
      });
      dispatch({
        type: LOAD_PROFILE_SUCCESS,
        payload: loadProfileResponse.data.data,
      });
    } catch (error) {
      return error
    }
  };
};

export const signOut = () => {
  deleteToken();
  return { type: SIGN_OUT_SUCCESS };
};
