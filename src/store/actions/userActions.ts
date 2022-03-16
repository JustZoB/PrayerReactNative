import types from '../../store/types';
import { User } from "../../../api/axios";

export const logInStart = (email: string, password: string) => ({
  type: types.LOG_IN_START,
  payload: { email, password }
})

export const logInSuccess = (user: User) => ({
  type: types.LOG_IN_SUCCESS,
  payload: user
})

export const logInFailure = (error: any) => ({
  type: types.LOG_IN_FAILURE,
  payload: error
})

export const registerStart = (email: string, name: string, password: string) => ({
  type: types.REGISTER_START,
  payload: { email, name, password },
});

export const registerSuccess = (user: User) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});

export const registerFailure = (error: any) => ({
  type: types.REGISTER_FAILURE,
  payload: error,
});

export const logOut = () => ({
  type: types.LOG_OUT,
});
