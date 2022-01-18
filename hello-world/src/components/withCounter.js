import React from 'react'

//HOC - higher order component
//this is used so that we do not have duplicate code
const withCounter = (WrappedComponent) => {
    //uses this in ClickCounter and HoverCounter
    class WithCounter extends React.Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }
    
        //increase counter
        //uses this in ClickCounter and HoverCounter
        incrementCount = () => {
            this.setState(prevState => {
                return {count: prevState.count + 1}
            })
        }

        render() {
            //returned the component
            return <WrappedComponent 
                    count={this.state.count} 
                    incrementCount={this.incrementCount}>
                    </WrappedComponent>
        }
    }
    return WithCounter
}

export default withCounter