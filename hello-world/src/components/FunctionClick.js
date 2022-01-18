import React from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log("Button clicked for function")
    }

    return (
        <div>
            {/* a function not a function call. For a function call add ()*/}
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick
