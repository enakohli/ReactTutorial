import React, { Component } from 'react'
import FRInput from './FRInput'

//parent comp creates ref and attaches to child comp
class FRParentInput extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }

    //click handler
    clickHandler = () => {
        this.inputRef.current.focus()
    }
    
    render() {
        return (
            <div>
                {/* gets info from child */}
                <FRInput ref={this.inputRef}></FRInput>
                <button onClick={this.clickHandler}>Focus</button>
            </div>
        )
    }
}

export default FRParentInput
