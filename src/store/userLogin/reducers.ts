import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../services/axios';

type UserState = {
  user: User | undefined
  loading: boolean,
  isDataLoaded: boolean
  error: Error | undefined
}

const initialState: UserState = {
  user: undefined as User,
  loading: false,
  isDataLoaded: false,
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
    setToken(state, action: PayloadAction<{ token: string, }>) {
      console.log('REDUCER', action.payload)
      state.user.token = action.payload.token
    },
    changeLoading(state, action: PayloadAction<{ loading: boolean, }>) {
      state.loading = action.payload.loading
    },
    changeIsDataLoading(state, action: PayloadAction<{ isDataLoaded: boolean, }>) {
      state.isDataLoaded = action.payload.isDataLoaded
    },
  },
});

export const {
  logInSuccess,
  logInFailure,
  registerSuccess,
  registerFailure,
  logOut,
  clearLogInErrors,
  changeLoading,
  setToken,
  changeIsDataLoading
} = userSlice.actions;

export default userSlice.reducer;
