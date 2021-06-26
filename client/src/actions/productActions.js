import { fetchProducts, fetchSingleProduct} from '../api/api'


export const fetchProductsAction = () => async(dispatch)=>{
    try{
        const { data } = await fetchProducts();
        dispatch({ type:"ALL_PRODUCTS_FETCHED", payload:data})
    }catch(error){
        console.log(error)
    }
}

export const fetchSingleProductAction = (id) => async(dispatch)=>{
    try{
        const { data } = await fetchSingleProduct(id);
       dispatch({ type:"SINGLE_PRODUCT_FETCH", payload:data})
    }catch(error){
        console.log(error)
    }
}