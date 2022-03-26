import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs, { BreadcrumbItem } from "./../../components/Breadcrumps";
import { Link } from "react-router-dom";

export default function DramaDetails() {
  const params = useParams();
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/dramas">Dramas</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <span>The King's Effection</span>
        </BreadcrumbItem>
      </Breadcrumbs>
    </>
  );
}
