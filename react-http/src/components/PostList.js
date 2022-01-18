import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)
    
        //empty array
        this.state = {
             posts: []
        }
    }

    //used axios to get data from link
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    render() {
        const {posts} = this.state
        //display the information from the link
        return (
            <div>
                List of posts
                {
                    posts.length ? posts.map(post => <div key={post.id}>{post.title}</div>):
                    null
                }
            </div>
        )
    }
}

export default PostList
