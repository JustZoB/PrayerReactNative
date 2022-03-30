import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Column } from '../../services/axios';

type ColumnsState = {
  columns: Column[] | undefined
  isDataLoaded: boolean
  error: Error | undefined
}

const initialState: ColumnsState = {
  columns: undefined as Column[],
  isDataLoaded: false,
  error: undefined
}

const columnsSlice = createSlice({
  name: 'columnsSlice',
  initialState,
  reducers: {
    setColumns(state, action: PayloadAction<{ columns: Column[], }>) {
      state.columns = action.payload.columns
    },
    changeIsDataLoading(state, action: PayloadAction<{ isDataLoaded: boolean, }>) {
      state.isDataLoaded = action.payload.isDataLoaded
    },
    addColumn(state, action: PayloadAction<Column>) {
      state.columns.push(action.payload)
    },
  },
});

export const {
  setColumns,
  changeIsDataLoading,
  addColumn,
} = columnsSlice.actions;

export default columnsSlice.reducer;
