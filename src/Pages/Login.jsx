import React, {useState} from "react";
import {Container, Form, Button} from "react-bootstrap"
import "../Styles/Login.css"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
const [formData,setformData]=useState({
    email:"",
    password:"",
})  
const handleChange =(e)=> {
    const{name,value}=e.target
        setformData({...formData,[name]:value})}

   const hanldeSubmit =(e)=> {e.preventDefault()
   console.log(formData)};

    return (
        <Container>
         <h1>Hello!! Welcome Back</h1>
         <h2>Login</h2>
      
            <Form onSubmit={hanldeSubmit}>
                <Form.Group>
               
                    <Form.Label>Em@il</Form.Label>
                    <Form.Control 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required />
                
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    name="password" 
                    value={formData.password} 
                    onChange={handleChange} 
                    required />
                </Form.Group>
                <Button variant="primary" type="submit">Login</Button>
                 <p>Don't have an Account? <Link to="/SignUp">Register</Link> </p>
            </Form>
        </Container>
    )
}

export default Login;