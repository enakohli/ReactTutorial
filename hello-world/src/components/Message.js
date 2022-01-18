import React, {Component} from 'react'

//props are immutable
class Message extends Component{

    //constructor to test states vs props
    constructor() {
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }

    //used to alter the state of the class component, when the button is clicked
    changeMessage() {
        this.setState({
            message: "Thank you for clicking button"
        })
    }

    //render method displays message, and a button
    render() {
        return(
            <div>
                <h3>{this.state.message}</h3>
                <button onClick={() => this.changeMessage()}>Click Here</button>
            </div>
        ) 
    }
}

export default Message