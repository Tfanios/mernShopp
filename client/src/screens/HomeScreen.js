import React, { useEffect } from 'react'
import Product from '../components/Product'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { useDispatch,useSelector } from 'react-redux'
import { fetchProductsAction } from '../actions/productActions'


const HomeScreen = () => {
    const dispatch = useDispatch()
    const products = useSelector(state=>state.allProducts);
    useEffect(() => {
        dispatch(fetchProductsAction())
    },[dispatch])
    return(
        <>
        {(products.length===0)?
            <Container className="mt-5">
                <Loader 
                type="Puff"
                color="#007bff"
                height={300}
                width={500} />
            </Container>
            :
            <Container className="mt-2">
            <Row xs={1} md={2} lg={3}  >
            {products.map((product,index)=><Col lg={4} className="mt-3 " key={product._id}><Product  name={product.name} 
            price={product.price} 
            id={product._id} 
            img={product.image} 
            description={product.description}
            /> </Col>)}
            </Row>
        </Container>}
        </>
    )
}

export default HomeScreen;