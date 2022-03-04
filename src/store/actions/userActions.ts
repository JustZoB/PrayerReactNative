import axios from "axios";
import { Dispatch } from "react";

export interface UserModel {
  id: number;
  email: string;
  name: string;
  token: string
}

export interface LoginAction {
  readonly type: 'ON_LOGIN';
  payload: UserModel
}

export interface ErrorAction {
  readonly type: 'ON_ERROR';
  payload: any
}

export type UserAction = LoginAction | ErrorAction;

export const onLogin = async (email: string, password: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const response = await axios.post<UserModel>(`/auth/sign-in`, {
        email,
        password
      })

      if (!response) {
        dispatch({
          type: 'ON_ERROR',
          payload: 'Login issue with API'
        })
      } else {
        dispatch({
          type: 'ON_LOGIN',
          payload: response.data
        })
      }

    } catch (error) {
      dispatch({
        type: 'ON_ERROR',
        payload: error
      })
    }
  }
}
