import { combineReducers } from "redux";
import userLoginSlice from './userLogin/reducers'

const rootReducer = combineReducers({
  userLoginSlice,
})

export type ApplicationState = ReturnType<typeof rootReducer>

export { rootReducer }
