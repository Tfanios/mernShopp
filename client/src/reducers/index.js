import { combineReducers } from 'redux'




const allProductsReducer = (state =[] , action) =>{
    switch (action.type){
        case 'ALL_PRODUCTS_FETCHED': return  action.payload
        default:return [...state]
    }

}

const singleProductReducer = (state ={} , action) =>{
    switch (action.type){
        case 'SINGLE_PRODUCT_FETCH': return action.payload
        default:return {...state}
       
    }

}
///////////// CART REDUCERS //////////////////////
const cartListReducer = (state = [], action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            const item = {...action.payload, quantity: 1}
            return [...state, item]
        case 'REMOVE_FROM_CART': 
            return state.filter(item=>item._id !== action.payload.id)
        case 'QUANTITY_PLUS_ONE':
                const id = state.findIndex(({ _id }) => _id === action.payload.id);
                let newState = [...state]
                newState[id] = { ...newState[id], quantity: state[id].quantity + 1}
            return [...newState]
        case 'QUANTITY_MINUS_ONE':
                const idMinus = state.findIndex(({ id }) => id === action.payload._id);
                let newStateMinus = [...state]
                newStateMinus[idMinus] = { ...newStateMinus[idMinus], quantity: state[idMinus].quantity - 1} 
            return [...newStateMinus]
        default:return [...state]
    }
}

/////////////// LOGIN REDUCER ////////////
const loginInitialState = {userName:'admin',password:'hardToCrackPassword',isLoggedIn:false};

const loginReducer = (state = loginInitialState , action) =>{
    switch(action.type){
        case 'LOGIN_ATTEMPT':
            if(action.payload.userName === state.userName && action.payload.password === state.password){
                return {...state,isLoggedIn:true }
            }
            return {...state}
        default:return {...state}
    }

}



export default combineReducers({ allProducts:allProductsReducer, product:singleProductReducer, cartList:cartListReducer, login:loginReducer })