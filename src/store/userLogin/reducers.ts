import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../services/axios';

type UserState = {
  user: User | undefined
  loading: boolean
  error: Error | undefined
}

const initialState: UserState = {
  user: undefined as User,
  loading: false,
  error: undefined,
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    logInSuccess: (state, action) => {
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
    logOut(state, action) {
      state.user = undefined
      state.error = undefined
    },
    clearLogInErrors(state, action) {
      state.error = undefined
    },
    changeLoading(state, action: PayloadAction<{
      loading: boolean,
    }>) {
      console.log('LOADING ', action.payload.loading)
      state.loading = action.payload.loading
      console.log('STATE LOADING ', action.payload.loading)
    },
  },
});

export const { logInSuccess, logInFailure, registerSuccess, registerFailure, logOut, clearLogInErrors, changeLoading } = userSlice.actions;

export default userSlice.reducer;
