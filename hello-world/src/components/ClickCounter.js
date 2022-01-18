import React, { Component } from 'react'
import withCounter from './withCounter'

//what happens when you click a button
class ClickCounter extends Component {
    render() {
        const {count, incrementCount} = this.props
        return (
            <div>
                {/* On Click event */}
                <button onClick={incrementCount}>Clicked {count} Times</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter)
