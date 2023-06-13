import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IDataState } from '../../Interface/Interface';
// import rawData from '../../utils/data';

// Define the initial state using that type
const initialState: IDataState = {
  load: false,
  data: {},
};

export const dataSlice = createSlice({
  name: 'data',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.load = action.payload;
    },
    loadData: (state, action: PayloadAction<object>) => {
      state.data = action.payload;
    },
  },
})

export const { setLoading, loadData } = dataSlice.actions

export default dataSlice.reducer