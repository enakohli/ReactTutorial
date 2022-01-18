import React, { Component } from 'react'

//create refs to show focus for input box
class Refs extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }

    componentDidMount() {
        //focus
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }
    
    //alert when button is clicked
    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}></input>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default Refs
