import { createSlice } from '@reduxjs/toolkit';
import { User } from "../../../api/axios";

type UserState = {
  user: User
  error: string | undefined
}

const initialState: UserState = {
  user: {} as User,
  error: undefined,
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    userLogin(state, action) {
      switch (action.type) {
        case 'ON_LOGIN':
          return {
            ...state,
            user: action.payload,
          };
        case 'ON_ERROR':
          return {
            ...state,
            error: action.payload
          };
        default:
          return state;
      }
    }
  }
});

export const { userLogin } = userSlice.actions;

export default userSlice.reducer;
