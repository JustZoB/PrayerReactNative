import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../../api/axios';

type UserState = {
  user: User | undefined
  error: Error | undefined
}

const initialState: UserState = {
  user: undefined as User,
  error: undefined,
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    logInSuccess: (state, action) => {
      console.log('qreqrqrqrqrqrqr', action.payload)
      return action.payload
    },
    logInFailure: (state, action) => {
      return action.payload
    },
    registerSuccess: (state, action) => {
      return action.payload
    },
    registerFailure: (state, action) => {
      return action.payload
    },
    logOut: (state, action) => {
      return action.payload
    },
    clearLogInErrors: (state, action) => {
      return action.payload
    },
  },
});

export const { logInSuccess, logInFailure, registerSuccess, registerFailure, logOut, clearLogInErrors } = userSlice.actions;

export default userSlice.reducer;
