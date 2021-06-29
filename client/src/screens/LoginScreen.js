import React,{ useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { LoginAttemptAction } from '../actions/LoginActions'

import { Form, Button, Container } from 'react-bootstrap';


const LoginScreen = () =>{
    const { isLoggedIn } = useSelector(state=> state.login)
    const [data,setData] = useState({username:'', password:''})
    const dispatch = useDispatch();
    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(LoginAttemptAction(data.username, data.password))
    }
    return (
        <>
        {(isLoggedIn)
            ?  
            <Redirect to="/" />
            :
            <Container>
                <h1>Login</h1>
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId="formUserName">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter Username" 
                        onChange={e=>setData({ ...data, username: e.target.value })} 
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" 
                        onChange={e=>setData({ ...data, password: e.target.value })} 
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                </Form>
            </Container>
        }
    </>
    )
}

export default LoginScreen;