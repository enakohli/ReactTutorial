import React, { Component } from 'react'
import axios from 'axios'

//for post request
class PostForm extends Component {
    constructor(props) {
        super(props)
    
        //empty values
        this.state = {
             userId: "",
             title: "",
             body: ""
        }
    }

    //what happens on change
    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    //what happens on submit
    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        //post
        axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    render() {
        const {userId, title, body} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="userId" value={userId} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="title" value={title} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="body" value={body} onChange={this.changeHandler}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm
