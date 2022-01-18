import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    //for MOUNTING - first
    constructor(props) {
        super(props)
    
        this.state = {
             name: "Ena"
        }
        console.log("Lifecycle A Constructor")
    }

    //used when component is re-rendered
    //for MOUNTING - second
    //for UPDATE - first
    static getDerivedStateFromProps(props,state) {
        console.log("Lifecycle A getDerivedStateFromProps")
        return null
    }

    //for MOUNTING - last
    componentDidMount() {
        console.log("Lifecycle A componentDidMount")
    }

    //for UPDATE - second
    shouldComponentUpdate() {
        console.log("Lifecycle A shouldComponentUpdate")
        return true
    }

    //for UPDATE - fourth
    getSnapshotBeforeUpdate() {
        console.log("Lifecycle A getSnapshotBeforeUpdate")
        return null
    }

    //for UPDATE - last
    componentDidUpdate() {
        console.log("Lifecycle A componentDidUpdate")
    }

    changeState = () => {
        this.setState({
            name: "Kohli"
        })
    }

    //child component (Lifecycle B) runs in between A render and A componentDidMount FOR MOUNT
    
    //for MOUNTING - third
    //for UPDATE - third
    render() {
        console.log("Lifecycle A render")
        return (
            <div>
               <div>Lifecycle A </div>
               <button onClick={this.changeState}>Change state</button>
               <LifecycleB></LifecycleB>
            </div>
        )
    }
}

export default LifecycleA
