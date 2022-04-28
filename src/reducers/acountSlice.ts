import { createSlice } from '@reduxjs/toolkit'

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    value: undefined,
  },
  reducers: {    
    setAccount: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const account = (state:any) => state.account.value;
export const { setAccount } = accountSlice.actions;

export default accountSlice.reducer;