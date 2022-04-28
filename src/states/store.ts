import { configureStore } from '@reduxjs/toolkit'
import accountReducer from '../reducers/acountSlice'

export default configureStore({
  reducer: {
      account: accountReducer,
  },
})