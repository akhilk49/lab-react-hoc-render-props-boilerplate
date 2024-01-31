import React from 'react'

function LikeImageRender(props) {
    let {count,incrementCount} = props
  return (
    <div>
        <button onClick={incrementCount}>Like Image Render {count}</button>
    </div>
  )
}

export default LikeImageRender