import React from 'react'
import { Card,Button,Image } from 'react-bootstrap'
import ReadMoreReact from 'read-more-react';
import { NavLink } from 'react-router-dom'



// const moreTxt = () =>{
//     return(<div style={{fontSize:'1rem',color:'#0069d9'}}>Read more...</div>)
// }

const Product = (product) =>{
    const productPath = `/product/${product.id}`

    const clickHandler = () =>{
        let products = [];
        let syncButtonSetter = false
        if(localStorage.getItem('products')){
            products = JSON.parse(localStorage.getItem('products'));
        }
        for(let i=0; i<products.length;i++){
            if(products[i].productId === product.id){
                alert("This product is already in your cart");
                syncButtonSetter = true
            }
        }
        if(syncButtonSetter === false){
            products.push({productId : product.id, image : product.img, name:product.name,price:product.price});
            localStorage.setItem('products', JSON.stringify(products));
        }   
    }

    return(
    
    <Card style={{ width: '100%',height:'450px'}}>
        <Image  src={product.img} className='ratio ratio-21x9' fluid style={{maxHeight:'200px',margin:'auto',maxWidth:'350px',objectFit:'cover'}} />
        <Card.Body>
            <NavLink to={productPath}>
                <Card.Title>{product.name}</Card.Title>                
            </NavLink>
            <p>{product.price} $</p>
            <p>{product.description}</p>
        </Card.Body>
        <Button variant="primary"  onClick={clickHandler}>Add to cart</Button>

      </Card>)
}

export default Product;