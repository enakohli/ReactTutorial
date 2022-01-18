import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            //information to be input in form
             username: "",
             comments: "",
             topic: "React",
        }
    }
    
    //what to do when user clicks and types in username input
    handleUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    //what to do when user clicks and types in comments text area
    handleComments = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    //what to do when user clicks and selects out of list of topics
    handleSelect = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    //what to do when user clicks submit button
    handleSubmit = (event) => {
        //displays info as an alert
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        //prevents page from refreshing
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    {/* username info */}
                    <label>Username</label>
                    <input type="text" value={this.state.username} onChange={this.handleUsername}></input>
                </div>
                <div>
                    {/* comments info */}
                    <label>Comments</label>
                    <textarea value={this.state.comments} onChange={this.handleComments}></textarea>
                </div>
                <div>
                    {/* topics info */}
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleSelect}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                    </select>
                </div>
                {/* button info */}
                <button type="Submit">Submit</button>
            </form>
        )
    }
}

export default Form
