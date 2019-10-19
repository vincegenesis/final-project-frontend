import React, { Component } from 'react'
import { Button,Form } from 'react-bootstrap';
import axios from 'axios'
import './Login.css'
import Nav from './Nav'

 class LoginForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username : '',
             password : '',
             isLogin:false
        }
    }
    
    onChangeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    submitHandler =(e) =>{
        e.preventDefault()
        console.log(this.state)
        axios.post('http://vincegenesis-midterm-api.glitch.me/user/login',this.state,{withCredentials:true})
            .then(response =>{
                console.log(response)
                if(response.status=='200'){
                    // this.props.history.push('/dashboard');
                    this.props.history.push({
                        pathname: '/dashboard',
                        state: { detail: response.data }
                      })

                }else{
                    
                }
                

            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const {username, password} = this.state
        return (
            <div className="container">
                 <Nav></Nav>
                 <div className="form-container">
                 <Form onSubmit={this.submitHandler} className="form">
                    <Form.Group controlId="formBasicEmail">
                    <h1>Login</h1>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="text"     
                            placeholder="Enter username" 
                            name="username" 
                            value= {username} 
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
                        Login
                    </Button>
                </Form>
                 </div>

                
            </div>
        )
    }
}

export default LoginForm
