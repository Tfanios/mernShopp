import React,{ useState } from 'react'
import FileBase from 'react-file-base64';


import { Form, Button,  Container } from 'react-bootstrap';

import { createProduct } from '../api/api'




const AddProductScreen = () => {
    const [productData, setProductData] =  useState({category:'',name:'', description:'',  brand:'', price:0 ,countInStock:0, image:'' })
    const submitHandler = async(e) =>{
        e.preventDefault()
        // await createProduct(productData)
    }
    
    

    return(
        <Container className="mt-5" > 
        <Form>
            <Form.Group controlId="productName">
                <Form.Label>Product Name</Form.Label>
                <Form.Control 
                type="text"
                required  
                onChange={e=>setProductData({ ...productData, name: e.target.value })} 
                placeholder="Product Name" />
            </Form.Group>
            <Form.Group controlId="productBrand">
                <Form.Label>Brand Name</Form.Label>
                <Form.Control 
                required
                type="name" 
                onChange={e=>setProductData({ ...productData, brand: e.target.value })} 
                placeholder="Brand Name" />
            </Form.Group>
            <Form.Group controlId="productDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control 
                required
                type="name" 
                onChange={e=>setProductData({ ...productData, description: e.target.value })} 
                placeholder="Description" />
            </Form.Group>
            <Form.Group controlId="productCategory">
                <Form.Label>Category</Form.Label>
                <Form.Control 
                required
                type="name" 
                onChange={e=>setProductData({ ...productData, category: e.target.value })} 
                value={productData.category} />
            </Form.Group>
                <Form.Group controlId="productImage">
                <div>
                    <FileBase name="image" type="file" multiple={false}  required
                    onDone={({ base64 }) => setProductData({ ...productData, image: base64 })} />
                 </div> 
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control 
                required
                type="price"  
                onChange={e=>setProductData({ ...productData, price: e.target.value })} 
                placeholder="Price" />
            </Form.Group>
            <Button variant="primary" onClick={submitHandler} type="submit">
            Submit
            </Button>
        </Form>
        </Container>
    )
}

export default AddProductScreen;