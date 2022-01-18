import React from 'react'

// function FRInput() {
//     return (
//         <div>
//             <input type='text'></input>
//         </div>
//     )
// }

//arrow notation for forwarding ref
const FRInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type='text' ref={ref}></input>
        </div>
    ) 
}) 

export default FRInput
