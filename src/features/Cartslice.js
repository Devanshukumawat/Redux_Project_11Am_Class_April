import { createSlice } from '@reduxjs/toolkit'
 const initialState = {
  cart:[],
  totalPrice:0,
  totalQuantity:0
}

export const Cartslice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   AddToCart : (state,actions)=>{
    const find = state.cart.findIndex((value)=>value.id===actions.payload.id)
    if(find !=-1){
        state.cart[find] = {...state.cart[find],qunatity:state.cart[find].qunatity+1}
    }else{
        state.cart.push({...actions.payload,qunatity:1})
    }
   },

   DeleteCartItem:(state,actions)=>{
      state.cart = state.cart.filter((value)=> value.id !== actions.payload.id)
   },

   RemoveAllProduct:(state)=>{
      state.cart = []
   },


  
   cartTotal: (state)=>{
    const {totalQuantity , totalPrice} = state.cart.reduce((cartTotal,cartItem)=>{
        const {price,qunatity} = cartItem
        const itemTotal = parseInt(price)*parseInt(qunatity)
        cartTotal.totalPrice += itemTotal
        cartTotal.totalQuantity += qunatity
        return cartTotal
    },{
      totalPrice:0,
      totalQuantity:0
    });
    state.totalPrice = totalPrice.toFixed(2)
    state.totalQuantity = totalQuantity
  },

  increaseItemQuantity: (state, action) => {
    state.cart = state.cart.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, qunatity: item.qunatity + 1 };
      }
      return item;
    });
  },
  decreaseItemQuantity: (state, action) => {
    state.cart = state.cart.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, qunatity: item.qunatity - 1 };
      }
      return item;
    });
  }, 

  },
})


export const { AddToCart , DeleteCartItem , RemoveAllProduct , cartTotal , increaseItemQuantity , decreaseItemQuantity } = Cartslice.actions

export default Cartslice.reducer