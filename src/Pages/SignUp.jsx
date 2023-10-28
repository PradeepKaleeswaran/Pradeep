import React, {useState} from "react";
import {Container, Form, Button} from "react-bootstrap"
import "../Styles/SignUp.css"
import { Link, useNavigate } from "react-router-dom"

const SignUp = () => {
const [formData,setformData]=useState({
    name:"",
    email:"",
    password:"",
});
   const handleChange =(e)=> {
    const{name,value}=e.target
        setformData({...formData,[name]:value})}

   const hanldeSubmit =(e)=> {e.preventDefault()
   console.log(formData)};

    return (
        <Container>
         <h1>Hello!! Welcome To Vengeance Registration</h1>
         <h2>Register Here!</h2>
            <Form onSubmit={hanldeSubmit}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required />
               
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
                <Button variant="primary" type="submit">Register</Button>
                <p>Already have an Account? <Link to="/login">Login</Link> </p>
            </Form>
        </Container>
    )
}

export default SignUp;