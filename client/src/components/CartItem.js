import React,{ useState, useEffect } from 'react';

import { Button,  Col, Image, Row, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaTrash } from 'react-icons/fa'
import { GoPlus } from 'react-icons/go'
import { FiMinus } from 'react-icons/fi'

import { useSelector,useDispatch } from 'react-redux'
import { removeFromCartListAction, addQuantityToCartItemAction, removeQuantityToCartItemAction } from '../actions/cartActions'


const CartItem = (props) =>{
    const [idx, setIdx]= useState(0)
    const cartList = useSelector(state=> state.cartList)
    const dispatch = useDispatch()

    const addQuantityHandler = () => {
        dispatch(addQuantityToCartItemAction(props)) 
    }
    const minusQuantityHandler = () => {
        if(cartList[idx].quantity>1){
           dispatch(removeQuantityToCartItemAction(props))
        }
    }
    const deleteHander = () =>{
        dispatch(removeFromCartListAction(props))
    }

    useEffect(() =>{
        const idx = cartList.findIndex(({id})=> id ===props.id)
        setIdx(idx)
        },[cartList,props.id])
    return (
    <Row className="mt-3">
        <Col md={1} lg={1} sm={2} xs={1} > 
            <Image variant="top" src={props.img}  fluid rounded/>
        </Col>
        <Col md={3} sm={2} xs={2}>
            <Link to={`/product/${props.id}`}>{props.name}</Link>
        </Col>
        <Col lg={{span:3,offset:1 }} md={3} sm={{span:2,offset:1}} xs={{span:4}}>
            <Row className="justify-content-center">
                <Button onClick={minusQuantityHandler}
                style={{border:'none',backgroundColor:'transparent'}}
                variant="danger">
                    <FiMinus color='#000000' />
                </Button>
                
                <p style={{margin:'auto 0'}}>{cartList[idx].quantity}</p>
                <Button onClick={addQuantityHandler} style={{border:'none',backgroundColor:'transparent'}}><GoPlus color='#000000' /></Button>
            </Row>
        </Col>
        <Col sm={1} xs={1}>
           <FaTrash onClick={deleteHander}  style={{cursor:'pointer'}}/>
        </Col>
        <Col md={1} sm={{span:3,offset:1}} xs={{span:1,offset:1}}><p>{props.price*cartList[idx].quantity}$</p></Col>
    </Row>)
}

export default CartItem

