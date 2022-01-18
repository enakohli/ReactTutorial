import React from 'react'

//example where we get name from NameList
//only displays the h2 tag here 
function Person({name}) {
    return (
        <div>
            <h2>{name}</h2>
        </div>
    )
}

export default Person
