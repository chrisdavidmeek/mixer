import React from "react";
import { useSelector } from "react-redux";

const Result = () => {
  const list = useSelector((state) => state.list);
  
  const test = () => {
    list.forEach(item => {
      console.log(item.name);
    })
  }
  return <div>
    <button onClick = {test}>Test</button>
  </div>;
};

export default Result;
