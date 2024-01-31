import React from "react";

function LikePostHOC(props) {
  let { count, updateCount } = props;

  return (
    <>
      <button onClick={updateCount}>Like Post {count}</button>
    </>
  );
}

export default LikePostHOC;