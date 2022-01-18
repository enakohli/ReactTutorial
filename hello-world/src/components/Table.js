import React from 'react'
import Column from './Column'

function Table() {
    return (
        //create table
        <table>
            <tbody>
                <tr>
                    {/* call Column */}
                    <Column></Column>
                </tr>
            </tbody>
        </table>
    )
}

export default Table
