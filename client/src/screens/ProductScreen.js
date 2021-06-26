import React,{ useEffect } from 'react'
import { Col, Container, Row,Image,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import { useDispatch,useSelector } from 'react-redux'
import { fetchSingleProductAction } from '../actions/productActions'
import { addToCartListAction } from '../actions/cartActions'


const ProductScreen = (props) => {
    const { id } = props.match.params;
    const editPath = `/product/${id}/edit`
    const dispatch = useDispatch()
    const product = useSelector(state=>state.product);
    const cartList = useSelector(state=> state.cartList)


    useEffect(() => {
        dispatch(fetchSingleProductAction(id))
    },[])

    const addCartHandler = () =>{
        let syncButtonSetter = false
        for(let item of cartList){
            if(item._id === id){
                syncButtonSetter = true
            }
        }
        if(syncButtonSetter === false){
            dispatch(addToCartListAction(product))
        } 
    }
    return(
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col lg={6} md={6}>
                    <Image src={product.image}  className='ratio ratio-21x9' fluid thumbnail/>
                </Col>
                <Col lg={6} md={6}>
                    <h2>{product.name}</h2>
                    <h5>{product.brand}</h5>
                    <p>{product.description}</p>
                    <h5>Price:{product.price}</h5>
                    <Button onClick={addCartHandler}>Add item to cart</Button>
                </Col>
            </Row>
            <Link to={editPath}>Edit</Link>
        </Container>
    )
}

export default ProductScreen;