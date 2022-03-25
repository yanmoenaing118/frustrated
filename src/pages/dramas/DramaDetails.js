import React from "react";
import { useParams } from "react-router-dom";

export default function DramaDetails() {
  const params = useParams();
  return <div>DramaDetails: {JSON.stringify(params)}</div>;
}
