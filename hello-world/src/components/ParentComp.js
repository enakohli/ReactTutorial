import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: "Ena"
        }
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Ena"
            })
        }, 2000)
    }

    render() {
        console.log("***** Parent Component render *****")
        return (
            <div>
                Parent Component
                {/* memo example */}
                {/* <MemoComp name={this.state.name}></MemoComp> */}
                <RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}></PureComp>
            </div>
        )
    }
}

export default ParentComp
