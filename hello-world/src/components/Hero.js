import React from 'react'

function Hero({heroName}) {
    //throws an error
    if (heroName === "Thanos") {
        //create error
        throw new Error("This is not a hero")
    }
    return (
        <div>
            {heroName}
        </div>
    )
}

export default Hero
