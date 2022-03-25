import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function Categories() {
  const location = useLocation();
  const params = useParams();

  console.log(params);

  console.log(location);

  return <div>Categories : {JSON.stringify(params)}</div>;
}
