import React from 'react'

//one way to do it
//child class that gets a handler from the parent class
// function Child(props) {
//     return (
//         <div>
//             {/* there is a button called Greet Parent, and once it gets clicked a handler from Parent is called */}
//             <button onClick={props.greetHandler}>Greet Parent</button>
//         </div>
//     )
// }

//using arrow syntax instead
//used for passing in parameters
function Child(props) {
    return (
        <div>
            {/* there is a button called Greet Parent, and once it gets clicked a handler from Parent is called */}
            {/* pass in child to the parent */}
            <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}



export default Child
