import React, { Component } from 'react'
import Input from './Input'

class FocusInp extends Component {
    constructor(props) {
        super(props)
        this.compRef = React.createRef()
    }

    //onClick turns the focus to the input field
    clickHandler = () => {
        this.compRef.current.focusInput()
    }
    
    //gets input from Input.js file
    render() {
        return (
            <div>
                <Input ref={this.compRef}></Input>
                <button onClick={this.clickHandler}>Focus</button>
            </div>
        )
    }
}

export default FocusInp
