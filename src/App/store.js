import { configureStore } from '@reduxjs/toolkit'
import Cartslice from '../features/Cartslice'
import wishlistslice from '../features/wishlistslice'

export const store = configureStore({
  reducer: {
    CartData:Cartslice,
    WishData:wishlistslice
  },
})