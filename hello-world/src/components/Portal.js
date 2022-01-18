import React from 'react'
import ReactDOM from 'react-dom'

function Portal() {
    //puts the info into another div (portal)
    return ReactDOM.createPortal(
        <h1>
            Portal Demo
        </h1>,
        //portal-root from index.html
        document.getElementById("portal-root")
    )
}

export default Portal
