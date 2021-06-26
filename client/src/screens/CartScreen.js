import React,{useState,useEffect} from 'react'
import { Col, Container,ListGroup,Row } from 'react-bootstrap';
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'

const CartScreen = () => {
    const [totalPrice,setTotalPrice] = useState(0)
    const cartList = useSelector(state=> state.cartList)
    

    // UPDATE TOTAL PRICE ON CHANGE //
    useEffect(()=>{
        if(cartList){
            let totalPrice = Object.values(cartList).reduce((t, {price, quantity}) => t + price*quantity, 0)
            setTotalPrice(totalPrice)
        }  
    },[cartList])
    return(
        <Container className="md mt-5 pb-5">
            {(cartList.length === 0)?
            <Row>
                <Col>
                    <h3>Your Cart is empty!</h3>
                </Col>
            </Row>
            :
            <>
                <Row>
                    <Col lg={3} md={{span: 3,offset:1}} sm={{span: 2,offset:2}} xs={3}>
                        <p>Product</p>
                    </Col>
                    <Col lg={{span:3,offset:1}} md={{span:2}} sm={{span:2,offset:1}} xs={4}>
                        <p>Quantity</p>
                    </Col>
                    <Col lg={{span:3,offset:1}} md={{span: 3,offset:2}} sm={{span: 3,offset:2}}  xs={{span: 4,offset:1}}>
                        <p className='pl-3'>Price</p>
                    </Col>
                </Row>
                <Row>
                    <ListGroup>
                        {cartList.map((item,index)=><CartItem 
                        key={index}
                        name={item.name}
                        index={index} 
                        id={item._id} 
                        img={item.image}
                        // priceHandler= {priceHandler}
                        price={item.price}
                        />)}
                    </ListGroup>
                </Row>
                <Row style={{marginTop:'5%'}}>
                    <Col lg={{span:3,offset:1 }}>
                        <h4>Total Cost: </h4>
                    </Col>
                    <Col lg={{span:3, offset:4}}>
                        <h4>{totalPrice}$</h4>
                    </Col>
                </Row>
            </>
            }
            
        </Container>
    )
}

export default CartScreen;