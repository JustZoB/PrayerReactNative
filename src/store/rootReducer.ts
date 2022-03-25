import { combineReducers } from "redux";
import userLoginSlice from './userLogin/reducers'
import columnsSlice from './columns/reducers'

const rootReducer = combineReducers({
  userLoginSlice,
  columnsSlice,
})

export type ApplicationState = ReturnType<typeof rootReducer>

export { rootReducer }
