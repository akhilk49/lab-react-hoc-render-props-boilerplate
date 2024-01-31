import React, { useState } from 'react'

function HigherOrderComponent(PassedComponent) {
  
    const NewComponent = () => {
        let [count,changeCount] = useState(0)

        const updateCount = () => {
            changeCount(c=> c + 1 )
        }
        return (
            <PassedComponent count={count} updateCount={updateCount}/>
        )
    }
    return NewComponent

}

export default HigherOrderComponent