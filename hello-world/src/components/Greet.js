import React from 'react'

//without arrow function
// function Greet() {
//     return <h1>Hello Ena!</h1>
// }

//using arrow function
//const Greet = (props) => <h1>Hello Ena!</h1>

//adding in props
const Greet = (props) => {
    //console.log(props)
    return (
        <div>
            <h1>Hello {props.name} {props.last}!</h1>
            {props.children}
        </div>
    )
}

//destructuring in the parameter
// const Greet = ({name, last, children}) => {
//     //console.log(props)
//     return (
//         <div>
//             <h1>Hello {name} {last}!</h1>
//             {children}
//         </div>
//     )
// }

//destructuring way by creating a const
// const Greet = (props) => {
//     const {name, last, children} = props
//     return (
//         <div>
//             <h1>Hello {name} {last}!</h1>
//             {children}
//         </div>
//     )
// }

export default Greet