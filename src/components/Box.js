import React from "react";
import { useSelector } from "react-redux";
import GrandSonBox from "./GrandSonBox";

const Box = () => {
  const count = useSelector((state) => state.count);
  return (
    <div>
      <h3>Box 컴포넌트{count}</h3>
      <GrandSonBox />
    </div>
  );
};

export default Box;
