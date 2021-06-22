import React,{useState} from 'react';

import {Button,  Col, Image, Row, } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {FaTrash } from 'react-icons/fa'
import { GoPlus } from 'react-icons/go'
import { FiMinus } from 'react-icons/fi'


const CartItem = (props) =>{
    const [quantity,setQuantity] = useState(1)
    const [disabledButton,setDisabledButton]= useState(false)

    const addQuantityHandler = () => {
        if(quantity>0){
            setDisabledButton(false)
        }
        let newQuantity = quantity + 1;
        setQuantity(newQuantity)
        let priceChange=(props.price)
        props.priceHandler(priceChange)
        
    }
    const minusQuantityHandler = () => {
        if(quantity === 1){
            setDisabledButton(true)
        }else{
            let newQuantity = quantity - 1;
            setQuantity(newQuantity)
            let priceChange=(-props.price)
            props.priceHandler(priceChange)
        }
    }
    
    const deleteHander = () =>{
        props.delete(props.index)
    }

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
                disabled={disabledButton} variant="danger">
                    <FiMinus color='#000000' />
                </Button>
                
                <p style={{margin:'auto 0'}}>{quantity}</p>
                <Button onClick={addQuantityHandler} style={{border:'none',backgroundColor:'transparent'}}><GoPlus color='#000000' /></Button>
            </Row>
        </Col>
        <Col sm={1} xs={1}>
           <FaTrash onClick={deleteHander}  style={{cursor:'pointer'}}/>
        </Col>
        <Col md={1} sm={{span:3,offset:1}} xs={{span:1,offset:1}}><p>{props.price*quantity}$</p></Col>
    </Row>)
}

export default CartItem

