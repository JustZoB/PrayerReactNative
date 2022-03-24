import { SignIn, SignUp } from '../../services/axios';
import { createAction } from '@reduxjs/toolkit';
import types from './types';

export const logInStart = createAction<SignIn>(types.LOG_IN_START)
export const registerStart = createAction<SignUp>(types.REGISTER_START)
