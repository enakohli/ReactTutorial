import React, {Component} from 'react'

//props are immutable
class Welcome extends Component{
    render() {
        return <h3>Welcome {this.props.name} {this.props.last}</h3>
    }
}

//destructuring way
// class Welcome extends Component{
//     render() {
//         const {name, last} = this.props
//         return <h3>Welcome {name} {last}</h3>
//     }
// }

export default Welcome