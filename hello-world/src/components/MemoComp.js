import React from 'react'

//memo example
function MemoComp({name}) {
    console.log("rendering memo component")
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)
