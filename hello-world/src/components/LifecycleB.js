import React, { Component } from 'react'

class LifecycleB extends Component {
    //first
    constructor(props) {
        super(props)
    
        this.state = {
             name: "Ena"
        }
        console.log("Lifecycle B Constructor")
    }

    //second
    static getDerivedStateFromProps(props,state) {
        console.log("Lifecycle B getDerivedStateFromProps")
        return null
    }

    //fourth
    componentDidMount() {
        console.log("Lifecycle B componentDidMount")
    }
    
    shouldComponentUpdate() {
        console.log("Lifecycle B shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log("Lifecycle B getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate() {
        console.log("Lifecycle B componentDidUpdate")
    }
    
    //third
    render() {
        console.log("Lifecycle B render")
        return (
            <div>
               Lifecycle B 
            </div>
        )
    }
}

export default LifecycleB
