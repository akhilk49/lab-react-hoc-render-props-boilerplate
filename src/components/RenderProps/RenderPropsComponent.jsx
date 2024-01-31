import React, { useState } from "react";

function RenderPropsComponent(props) {
  let [count, changeCount] = useState(0);
  const incrementCount = () => {
    changeCount(count + 1);
  };

  return <>{props.render(count, incrementCount)}</>;
}

export default RenderPropsComponent;