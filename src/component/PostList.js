import React, { Component } from 'react'
import axios from 'axios'
import { Button,Card } from 'react-bootstrap';



class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: []
        }
    }
    
    componentDidMount(){
        axios.get('http://vincegenesis-midterm-api.glitch.me/journal')
            .then(response =>{
                console.log(response)
                this.setState({posts:response.data})
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const {posts} = this.state
        return (
            <div>
                    {/* ownerId : {this.props.location.state.ownerId} */}
              {
                    posts.length?
                    posts.map(post =>
                        <div className="container" key = {post._id}>
                        <Card style={{ width: '30rem' }}>
                        <Card.Img variant="top" src={post.imageUrl} alt="new"/>
                      
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text>
                            {post.message}
                            </Card.Text>
                            <Button variant="primary"> Update </Button>
                            
                        </Card.Body>
        
                        </Card>
                    </div>
                        
                        ) : <div>No post created!</div>
                    
                }
            </div>
        )
    }
}

export default PostList
