import { SignIn, SignUp, User } from '../../../api/axios';
import { createAction } from '@reduxjs/toolkit';
import types from './types';

export const logInStart = createAction<SignIn>(types.LOG_IN_START)
export const logInSuccess = createAction<User>(types.LOG_IN_SUCCESS)
export const logInFailure = createAction<any>(types.LOG_IN_FAILURE)
export const registerStart = createAction<SignUp>(types.REGISTER_START)
export const registerSuccess = createAction<User>(types.REGISTER_SUCCESS)
export const registerFailure = createAction<any>(types.REGISTER_FAILURE)
export const logOut = createAction(types.LOG_OUT)
