import React from 'react';
import { useState } from 'react';
function Button() {
  const [count, setCount] = useState(0);
  const myClick = () => {
    setCount(count + 1);
  };
  return <button onClick={myClick}>点击我{count}</button>;
}

export default Button;
