import React, { Component } from 'react'
import { Button,Card } from 'react-bootstrap';
import './Login.css'

export class Journal extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        
    }
    

    render() {
        return (
            <div className="container">
                <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="new"/>
              
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary"> Update </Button>
                    
                </Card.Body>

                <Card.Img variant="top" src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="new"/>
              
              <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                  </Card.Text>
                  <Button variant="primary"> Update </Button>
              </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Journal
