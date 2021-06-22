import React,{useState,useEffect} from 'react'
import { Col, Container,ListGroup,Row } from 'react-bootstrap';
import CartItem from '../components/CartItem'

const CartScreen = () => {
    const [cartList,setCartList] = useState([])
    const [totalPrice,setTotalPrice] = useState(0)
   

    const priceHandler = (data) =>{
        let newPrice = totalPrice + data
        setTotalPrice(newPrice)
    }
    
    const DeleteHandler = (index) =>{
        let carts = JSON.parse(localStorage.getItem('products'))
        carts.splice(index, 1);
        setCartList(carts)
        let totalPrice = Object.values(carts).reduce((t, {price}) => t + price, 0)
        setTotalPrice(totalPrice)
        localStorage.setItem('products', JSON.stringify(carts))

    }
    
    useEffect(()=>{
        let products =[]
        if(localStorage.getItem('products')){
            products = JSON.parse(localStorage.getItem('products'));
        }
        setCartList(products)
        let totalPrice = Object.values(products).reduce((t, {price}) => t + price, 0)

        setTotalPrice(totalPrice)
        
    },[])
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
                        id={item.productId} 
                        img={item.image}
                        priceHandler= {priceHandler}
                        price={item.price}
                        delete={DeleteHandler}
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