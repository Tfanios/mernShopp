import React,{ useEffect,useState } from 'react'
import FileBase from 'react-file-base64';
import { Redirect } from 'react-router-dom'


import { Form, Button, Container } from 'react-bootstrap';

import { fetchSingleProduct, editProduct, deleteProduct } from '../api/api'




const EditProductScreen = (props) => {
    const [redirect,setRedirect] = useState(false)
    const { id } = props.match.params;
    const [productData, setProductData] =  useState({category:'',name:'', description:'',  brand:'', price:0 ,countInStock:0, image:'' })
    
    const submitHandler = async(e) =>{
        e.preventDefault()
        await editProduct(id,productData);
        setRedirect(true)
    }
    const deleteHandler = async(e) =>{
        e.preventDefault()
        await deleteProduct(id)
        setRedirect(true)
    }

    useEffect(()=>{
        const productData = async () => {
            const { data } = await fetchSingleProduct(id);
            setProductData(data)
        };
        productData()
    },[id])
    
    return(
        <>
        {(redirect)
        ?
         <Redirect to="/" />
        :
        <Container className="mt-5" > 
            <Form>
                <Form.Group controlId="productName">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control 
                    type="text"
                    required  
                    onChange={e=>setProductData({ ...productData, name: e.target.value })} 
                    value={productData.name}/>
                </Form.Group>
                <Form.Group controlId="productBrand">
                    <Form.Label>Brand Name</Form.Label>
                    <Form.Control 
                    required
                    type="name" 
                    onChange={e=>setProductData({ ...productData, brand: e.target.value })} 
                    value={productData.brand}/>
                </Form.Group>
                <Form.Group controlId="productDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                    required
                    type="name" 
                    onChange={e=>setProductData({ ...productData, description: e.target.value })} 
                    value={productData.description} />
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
                        onDone={({ base64 }) => setProductData({ ...productData, image: base64 })}/>
                    </div> 
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Price</Form.Label>
                    <Form.Control 
                    required
                    type="price"  
                    onChange={e=>setProductData({ ...productData, price: e.target.value })} 
                    value={productData.price} />
                </Form.Group>
                
                    <Button variant="primary"  onClick={submitHandler} type="submit">
                    Submit Changes
                    </Button>
                
                <Button variant="danger" onClick={deleteHandler}>Delete Product</Button>
            </Form>
            </Container>
    }
            
        </>
    )
}

export default EditProductScreen;