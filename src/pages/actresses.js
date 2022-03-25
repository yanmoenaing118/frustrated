import React from "react";
import { useLocation } from "react-router-dom";
import useFakeFetch from "../lib/useFakeFetch";

export default function Actress() {
  const location = useLocation();

  const data = useFakeFetch("https://jsonplaceholder.typicode.com/photos");

  return (
    <div
      style={{
        height: "1200px",
      }}
    >
      {data && JSON.stringify(data)}
    </div>
  );
}
