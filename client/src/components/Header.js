import React,{ useEffect,useState } from 'react'


import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { TiShoppingCart } from 'react-icons/ti'

import { NavLink } from 'react-router-dom'
import {useSelector,} from 'react-redux'


const Header =() => {
    const [itemNumber,setItemNumber] = useState(0)
    const cartList = useSelector(state => state.cartList)
    const { isLoggedIn } = useSelector(state => state.login)

    useEffect(() => {
        setItemNumber(cartList.length)
    },[cartList])
     return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">MernShop</Navbar.Brand>
            <Nav className="mr-auto ml-3">
                <NavLink to="/" >
                    <Navbar.Text>Home</Navbar.Text>
                </NavLink>
                {(isLoggedIn)
                ?
                <NavLink to="/products/new">
                    <Navbar.Text className="ml-5">Add Product</Navbar.Text>
                </NavLink>
                :
                <NavLink to="/login" >
                    <Navbar.Text className="ml-5">Login</Navbar.Text>
                </NavLink>
                }
            </Nav>
            <Form inline>
              <NavLink to="/cart">
                    <Button className="mr-5" style={{width:'100%'}}>
                        {itemNumber}
                        &nbsp;&nbsp; 
                        <TiShoppingCart style={{height:'100%'}} color='white' />
                    </Button>
               </NavLink>
            </Form>
        </Navbar>
     )
}

export default Header;