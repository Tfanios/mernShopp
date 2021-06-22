import React from 'react'


import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'

import { NavLink } from 'react-router-dom'



const Header =() => {
     return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">MernShop</Navbar.Brand>
            <Nav className="mr-auto">
                <NavLink to="/" >
                    <Navbar.Text>Home</Navbar.Text>
                </NavLink>
                <NavLink to="/products/new">
                    <Navbar.Text className="ml-5">Add Product</Navbar.Text>
                </NavLink>
            </Nav>
            <Form inline>
              <NavLink to="/cart">
                    <Navbar.Text className="mr-5">Cart</Navbar.Text>
               </NavLink>
            </Form>
        </Navbar>
     )
}

export default Header;