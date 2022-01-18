import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    increment() {
        //this will change the counter in the log but not in the UI
        // this.state.count = this.state.count + 1
        // console.log(this.state.count)

        //never modify the state directly, should use setState
        // this.setState({
        //     count: this.state.count + 1
        // }, 
        
        //callback value is the same as rendered value
        // () => {console.log("Callback: ", this.state.count)})

        //not using the current state, but using the previous state
        //this allows incrementFive to work correctly
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
        //console value is one less here
        console.log(this.state.count)
    }

    //five calls to increment - used to test prevState from above
    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
