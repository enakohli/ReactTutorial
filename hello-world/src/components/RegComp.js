import React, { Component } from 'react'

//regular comp does no implement shouldComponentUpdate - always returns true
class RegComp extends Component {
    render() {
        console.log("***** Regular Component render *****")
        return (
            <div>
               Regular Component {this.props.name} 
            </div>
        )
    }
}

export default RegComp
