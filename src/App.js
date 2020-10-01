import React, { useEffect, useMemo, useState } from "react";
import style from "./app.module.css";
function Timer() {
  const [count, setCount] = useState(1);
  const [num, setNum] = useState(1);

  let a = useMemo(
    () => {
      setCount(num);
      return num;
    },
    // eslint-disable-next-line
    [num % 10 === 10]
  );

  useEffect(() => {
    setTimeout(() => {
      setNum(num + 1);
    }, 500);
    console.log(a);
  });

  return <p>{count}</p>;
}
export default function App() {
  return (
    <div className={style.App}>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Timer />
    </div>
  );
}
