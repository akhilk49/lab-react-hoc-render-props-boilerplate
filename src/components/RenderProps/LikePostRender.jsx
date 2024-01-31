import React from 'react'

function LikePostRender(props) {
    let {count,incrementCount} = props
  return (
    <div>
        <button onClick={incrementCount}>Like Post Render {count}</button>
    </div>
  )
}

export default LikePostRender