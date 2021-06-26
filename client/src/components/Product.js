import React from 'react'
import { Card,Button,Image } from 'react-bootstrap'
// import ReadMoreReact from 'read-more-react';
import { Link } from 'react-router-dom'


import { addToCartListAction } from '../actions/cartActions'
import { useDispatch,useSelector } from 'react-redux'

// const moreTxt = () =>{
//     return(<div style={{fontSize:'1rem',color:'#0069d9'}}>Read more...</div>)
// }

const Product = (product) =>{
    const itemPath = `/product/${product.id}`
    return(
    
    <Card style={{ width: '100%',height:'450px'}}>
        <Image  src={product.img} className='ratio ratio-21x9' fluid style={{maxHeight:'200px',margin:'auto',maxWidth:'350px',objectFit:'cover'}} />
        <Card.Body>
            <Link to={itemPath}>
                <Card.Title>{product.name}</Card.Title>                
            </Link>
            <p>{product.price} $</p>
            <p>{product.description}</p>
        </Card.Body>
      </Card>)
}

export default Product;