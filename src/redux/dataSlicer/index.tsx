import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface DataState {
  load: boolean,
  data: {},
}

// Define the initial state using that type
const initialState: DataState = {
  load: false,
  data: {},
}

export const dataSlice = createSlice({
  name: 'data',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    loadDone: (state, action: PayloadAction<boolean>) => {
      state.load = action.payload;
    },
  },
})

export const { loadDone } = dataSlice.actions

export default dataSlice.reducer