import React, { Component } from 'react'

//create an error bound that is used in App.js
class ErrorBound extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    //log errors
    componentDidCatch(error, info) {
        console.log(error)
        console.log(info)
    }

    render() {
        //this gets shown when there is an error
        if (this.state.hasError) {
            return <h1>There was an issue</h1>
        }
        return this.props.children
    }
}

export default ErrorBound
