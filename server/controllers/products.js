import Product from '../models/productModel.js';


export const editProduct = async(req,res)=>{
    const { id } = req.params
    const product= await Product.findByIdAndUpdate(id, { ...req.body });
    try {
        await product.save();
        res.status(201).json(product);
    }catch(error){
        res.status(409).json({message:error.message})
    }
}

export const addProduct = async(req,res) =>{
    const product = req.body;
    const newProduct = await new Product(product)
    try {
        await newProduct.save()
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(409).json({message:error.message})
        }
}


export const getProducts = async(req,res) =>{
    const products = await Product.find()
    try{
        res.send(products)
    }catch (error){
        res.status(409).json({message:error.message})
    }
    
}

export const getSingleProduct = async(req,res) => {
    const { id } = req.params
    const product = await Product.findById(id);
    try {
        res.send(product)
        // res.status(201).json(Product);
    } catch (error) {
        res.status(409).json({message:error.message})
        }
    
}

export const deleteProduct = async(req,res) =>{
    const { id } = req.params;
    const deleteProduct = await Product.findByIdAndDelete(id);
    console.log('yo')
    try{
        deleteProduct();
        res.status(201).json(deleteProduct);
    }catch (error) {
        res.status(409).json({message:error.message})
        }
}