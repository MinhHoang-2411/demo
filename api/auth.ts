import {AnyAction} from "@reduxjs/toolkit";
import {Dispatch} from "react";
import {authActions} from "../redux/authSlice";
import axios from "axios";

const {loginStart, loginFail, loginSuccess} = authActions;
interface ILoginProps {
  user: {email: string; password: string};
  dispatch: Dispatch<AnyAction>;
  navigate: any;
}
export const login = async ({user, dispatch, navigate}: ILoginProps) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:5000/users", user);
    dispatch(loginSuccess(res.data));
    navigate("/");
  } catch {
    dispatch(loginFail());
  }
};
export const logout = (dispatch: Dispatch<AnyAction>) => {
  dispatch(authActions.logOut());
};
