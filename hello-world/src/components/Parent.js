import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'Parent'
        }

        //event bind
        this.greetParent = this.greetParent.bind(this)
    }

    //childName is a param that is passed from child to parent
    greetParent(childName) {
        //alert("Hello" + this.state.parentName)
        //another way
        //this gets called in child class
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

    render() {
        return (
            <div>
                {/* called child class */}
                <Child greetHandler={this.greetParent}></Child>
            </div>
        )
    }
}

export default Parent
