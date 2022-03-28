import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Prayer } from '../../services/axios';

type PrayersState = {
  prayers: Prayer[] | undefined
  isDataLoaded: boolean
  error: Error | undefined
}

const initialState: PrayersState = {
  prayers: undefined as Prayer[],
  isDataLoaded: false,
  error: undefined,
}

const prayersSlice = createSlice({
  name: 'prayersSlice',
  initialState,
  reducers: {
    setPrayers(state, action: PayloadAction<{ prayers: Prayer[], }>) {
      console.log('SET PRAYER REDUCER', action.payload.prayers)
      state.prayers = action.payload.prayers
    },
    changeIsDataLoading(state, action: PayloadAction<{ isDataLoaded: boolean, }>) {
      state.isDataLoaded = action.payload.isDataLoaded
    },
    addPrayer(state, action: PayloadAction<Prayer>) {
      state.prayers.push(action.payload)
    },
  },
});

export const {
  setPrayers,
  changeIsDataLoading,
  addPrayer,
} = prayersSlice.actions;

export default prayersSlice.reducer;