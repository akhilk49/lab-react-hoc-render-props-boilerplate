import React from "react";

function LikeImageHOC(props) {
  let { count, updateCount } = props;
  return (
    <>
      <button onClick={updateCount}>Like Image {count}</button>
    </>
  );
}

export default LikeImageHOC;