import React, { useState, useEffect } from 'react'
import Product from '../components/Product'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import {fetchProducts} from '../api/api'

const HomeScreen = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const productData = async () => {
            const { data } = await fetchProducts();
            setProducts(data)
        };
        productData()
        
    },[])
    return(
        <Container className="mt-2">
            <Row xs={1} md={2} lg={3}  >
            {products.map((product)=><Col lg={4} className="mt-3 " key={product._id}><Product  name={product.name} 
            price={product.price} 
            id={product._id} 
            img={product.image} 
            description={product.description}
            /> </Col>)}
            </Row>
        </Container>
    )
}

export default HomeScreen;