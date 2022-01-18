import React, { Component } from 'react'

class RenderCounter extends Component {
    //code used in ClickCounter2 and HoverCounter2
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    incrementCount = () => {
        this.setState(prevState => {
            return {count: prevState.count + 1}
        })
    }

    render() {
        //call count and incrementCount so they can be used in other two funcs
        return (
            <div>
                {this.props.render(this.state.count, this.incrementCount)}
            </div>
        )
    }
}

export default RenderCounter
