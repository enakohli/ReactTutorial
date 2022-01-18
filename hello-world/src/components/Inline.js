import React from 'react'

//inline examples of css styling
const heading = {
    fontSize: "72px",
    color: "blue"
}

function Inline() {
    return (
        <div>
            <h1 style={heading}>Inline</h1>
        </div>
    )
}

export default Inline
