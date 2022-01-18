import React, { Component } from 'react'
import withCounter from './withCounter'

//what happens when you hover over a heading (HOC)
class HoverCounter extends Component {
    render() {
        const {count, incrementCount} = this.props
        return (
            <div>
                {/* Mouse Over event */}
               <h2 onMouseOver={incrementCount}> Hover {count} Times</h2> 
            </div>
        )
    }
}

//export higher order comp
export default withCounter(HoverCounter)
