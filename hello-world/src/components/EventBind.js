import React, { Component } from 'react'

class EventBind extends Component {
    
    //constructor sets a message
    constructor(props) {
        super(props)
        this.state = {
             message: "Hello"
        }

        //binding in constructor rather than render method (BEST APPROACH)
        //this.clickHandler = this.clickHandler.bind(this)
    }
    
    //on click handler
    // clickHandler() {
    //     this.setState({
    //         message: "Goodbye"
    //     })
    // }

    //on click handler with arrow notation also an event bind approach
    //also a good approach
    clickHandler = () => {
        this.setState({
            message: "Goodbye"
        })
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* use an event binder in the render method */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

                {/* use arrow function event binder in render method */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}

                {/* use event binder in constructor*/}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
