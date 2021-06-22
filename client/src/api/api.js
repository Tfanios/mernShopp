import axios from 'axios';

const url = 'http://localhost:5000'

axios.defaults.withCredentials = false

//PRODUCT 
export const createProduct = (newProduct)=> axios.post(`${url}/product/new`, newProduct);
export const fetchProducts = () => axios.get(`${url}/product`)
export const fetchSingleProduct = (id) => axios.get(`${url}/product/${id}`)
export const editProduct = (id, editedProduct) => axios.put(`${url}/product/${id}/edit`,editedProduct)
export const deleteProduct = (id) => axios.delete(`${url}/product/${id}/delete`)