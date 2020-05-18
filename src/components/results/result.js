import React from "react";
import { useSelector } from "react-redux";

const Result = () => {
  const list = useSelector((state) => state.list);
  console.log(list);
  const results = list.map((items, idx) => (
    <div>
      <h4>Name: {results}</h4>
    </div>
  ));

  return <div>{results}</div>;
};

export default Result;
