import { combineReducers } from "redux";
import userLoginSlice from './userLogin/reducers'
import columnsSlice from './columns/reducers'
import prayersSlice from './prayers/reducers'

const rootReducer = combineReducers({
  userLoginSlice,
  columnsSlice,
  prayersSlice,
})

export type ApplicationState = ReturnType<typeof rootReducer>

export { rootReducer }
