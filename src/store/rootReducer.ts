import { combineReducers } from "redux";
import userLoginSlice from "../features/userLogin/userLoginSlice";

const rootReducer = combineReducers({
  userLoginSlice,
})

export type ApplicationState = ReturnType<typeof rootReducer>

export { rootReducer }
