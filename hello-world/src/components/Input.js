import React, { Component } from 'react'

//refs but with classes
class Input extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }

    //method for getting focus
    focusInput() {
        this.inputRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}></input>
            </div>
        )
    }
}

export default Input
