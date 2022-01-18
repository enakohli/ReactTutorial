import React, { PureComponent } from 'react'

//implements shouldComponnetUpdate with shallow props and state comparison
//does not always re-render - good for performance
class PureComp extends PureComponent {
    render() {
        console.log("***** Pure Component render *****")
        return (
            <div>
                Pure Component {this.props.name} 
            </div>
        )
    }
}

export default PureComp
