import express from 'express';
import { addProduct, getProducts,getSingleProduct, editProduct,deleteProduct } from '../controllers/products.js'

const router = express.Router();

router.put('/:id/edit', editProduct)
router.post('/new', addProduct)
router.get('/', getProducts)
router.get('/:id', getSingleProduct)
router.delete('/:id/delete', deleteProduct)


export default router