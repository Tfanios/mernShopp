export const addToCartListAction = (item) => dispatch=>{
    dispatch({ type:"ADD_TO_CART", payload:item})
}
export const removeFromCartListAction = (item) => dispatch =>{
    dispatch({ type:"REMOVE_FROM_CART", payload:item})
}

export const addQuantityToCartItemAction = (item) => dispatch =>{
    dispatch({type:'QUANTITY_PLUS_ONE', payload: item})
}

export const removeQuantityToCartItemAction = (item) => dispatch =>{
    dispatch({type:'QUANTITY_MINUS_ONE', payload: item})
}