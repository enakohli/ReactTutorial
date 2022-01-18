import React from 'react'
//import Person from './Person'

// function NameList() {
//     const names = ["Ena", "Kohli", "Test"]
//     //info gets sent to the Person function
//     const nameList = names.map(name => <Person name = {name}></Person>)
//     return (
//         //one way to display the names
//         // <div> 
//         //     <h2>{names[0]}</h2>
//         //     <h2>{names[1]}</h2>
//         //     <h2>{names[2]}</h2>
//         // </div>

//         //using map, can display here, or can send to another function
//         <div>{nameList}</div>
//     )
// }

//example of using keys
function NameList() {
    const names = ["Ena", "Kohli", "Test"]
    //const persons = [
    //using index as the key
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    return <div>{nameList}</div>
}

export default NameList
