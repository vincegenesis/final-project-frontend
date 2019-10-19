import React, { Component } from 'react'
import { Button,Form } from 'react-bootstrap';
import axios from 'axios'
import './Login.css'
import Nav from './Nav'

export class RegisterForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username : '',
             password : '',
             email : ''
        }
    }
    
    onChangeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
        
    submitHandler =(e) =>{
        e.preventDefault()
        console.log(this.state)
        axios.post('https://vincegenesis-midterm-api.glitch.me/user/create',this.state)
            .then(response =>{
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const {username,email, password} = this.state
        return (

            <div className="container">
                <Nav></Nav>
                <div className="form-container">
                <Form onSubmit={this.submitHandler}>
                    <h1>Create Account</h1>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control 
                            type="text"     
                            placeholder="Enter username" 
                            name="username" 
                            value= {username} 
                            onChange={this.onChangeHandler} />                     
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="text"     
                            placeholder="Enter email" 
                            name="email" 
                            value= {email} 
                            onChange={this.onChangeHandler} />                     
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            name="password" 
                            value= {password} 
                            onChange={this.onChangeHandler} />
                    </Form.Group>
                  
                    <Button variant="primary" type="submit">
                        Create Account
                    </Button>
                </Form>
                </div>
                
            </div>
        )
    }
}

export default RegisterForm
