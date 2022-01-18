import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            //keep changing this to see what happens
             isLoggedIn: true
        }
    }
    
    render() {
        //short circuit example (similar to ternary and is easy)
        return this.state.isLoggedIn && <div>Welcome Ena</div>

        //using ternary operations
        // return (
        //     this.state.isLoggedIn ?
        //     <div>Welcome Ena</div> :
        //     <div>Welcome Guest</div> 
        // )

        //storing a variable to keep track of the message inside if statements
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Ena</div>
        // }
        // else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>

        //use of if/else statements
        // if (this.state.isLoggedIn) {
        //     return <div>Welcome Ena</div>
        // }
        // else {
        //     return <div>Welcome Guest</div>
        // }
    }
}

export default UserGreeting
