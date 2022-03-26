import React from "react";
import { useLocation, useParams } from "react-router-dom";
import BreadCrumbs, { BreadcrumbItem } from "./../components/Breadcrumps";

export default function Categories() {
  const location = useLocation();
  const params = useParams();

  console.log(params);

  console.log(location);

  return (
    <section>
      <h1>Categories</h1>
      <BreadCrumbs></BreadCrumbs>
    </section>
  );
}
