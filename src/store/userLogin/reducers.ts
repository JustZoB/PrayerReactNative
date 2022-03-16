import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../../api/axios';
import types from './types';

type UserState = {
  user: User | undefined
  error: string | undefined
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
      console.log('state', state)
      console.log('action.payload', action.payload)
      return action.payload
    },
    userLogin: (state, action) => {
      switch (action.type) {
        case types.LOG_IN_SUCCESS:
          return {
            ...state,
            user: action.payload,
            error: undefined
          };
        case types.LOG_IN_FAILURE:
        case types.REGISTER_FAILURE:
          return {
            ...state,
            error: action.payload
          };
        case types.LOG_OUT:
          return initialState;
        default:
          return state;
      }
    },
  },
});

export const { userLogin, logInSuccess } = userSlice.actions;

export default userSlice.reducer;
