import React from 'react'

//JSX version
// const Hello = () => {
//     return (
//         <div>
//             <h1>This is Ena</h1>
//         </div>
//     )
// }

const Hello = () => { 
    return React.createElement('div', {id: "hello", className: "dummy"}, 
    React.createElement('h1', null, "This is Ena"))
}

export default Hello