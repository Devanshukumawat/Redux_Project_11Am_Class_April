import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  wishlist:[]
}

export const wishlistslice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
   DeleteWishlistItem:(state,actions)=>{
      state.cart = state.cart.filter((value)=> value.id !== actions.payload.id)
   },

   WishlistItem : (state,actions)=>{
    const find = state.wishlist.findIndex((value)=>value.id===actions.payload.id)
    if(find !=-1){
        state.wishlist[find] = {...state.wishlist[find],qunatity:state.wishlist[find].qunatity+1}
    }else{
        state.wishlist.push({...actions.payload,qunatity:1})
    }
   },

   DeleteWishItem:(state,actions)=>{
    state.wishlist = state.wishlist.filter((value)=> value.id !== actions.payload.id)
 },



  },
})


export const {  WishlistItem , DeleteWishItem } = wishlistslice.actions

export default wishlistslice.reducer