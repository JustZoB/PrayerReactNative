import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Columns } from '../../services/axios';

type ColumnsState = {
  columns: Columns[] | undefined
  isDataLoaded: boolean
  error: Error | undefined
}

const initialState: ColumnsState = {
  columns: undefined as Columns[],
  isDataLoaded: false,
  error: undefined
}

const columnsSlice = createSlice({
  name: 'columnsSlice',
  initialState,
  reducers: {
    setColumns(state, action: PayloadAction<{ columns: Columns[], }>) {
      state.columns = action.payload.columns
    },
    changeIsDataLoading(state, action: PayloadAction<{ isDataLoaded: boolean, }>) {
      state.isDataLoaded = action.payload.isDataLoaded
    },
  },
});

export const {
  setColumns,
  changeIsDataLoading
} = columnsSlice.actions;

export default columnsSlice.reducer;
