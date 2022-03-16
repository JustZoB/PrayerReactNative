import { SignIn, SignUp, User } from '../../../api/axios';
import { createAction } from '@reduxjs/toolkit';
import types from './types';

export const logInStart = createAction<SignIn>(types.LOG_IN_START)
export const logInFailure = createAction<any>(types.LOG_IN_FAILURE)
export const registerStart = createAction<SignUp>(types.REGISTER_START)
export const registerFailure = createAction<any>(types.REGISTER_FAILURE)
