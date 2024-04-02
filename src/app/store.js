import { configureStore } from '@reduxjs/toolkit'
import traffyApi from '../features/traffyApi'

export default configureStore({
  reducer: {
    [traffyApi.reducerPath]: traffyApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(traffyApi.middleware),
})