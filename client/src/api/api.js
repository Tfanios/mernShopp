import axios from 'axios';

const url = 'http://localhost:5000'
const productionURL = process.env.REACT_APP_HEROKU_URL

axios.defaults.withCredentials = false

//PRODUCT 
export const createProduct = (newProduct)=> axios.post(`${productionURL}/product/new`, newProduct);
export const fetchProducts = () => axios.get(`${productionURL}/product`)
export const fetchSingleProduct = (id) => axios.get(`${productionURL}/product/${id}`)
export const editProduct = (id, editedProduct) => axios.put(`${productionURL}/product/${id}/edit`,editedProduct)
export const deleteProduct = (id) => axios.delete(`${productionURL}/product/${id}/delete`)