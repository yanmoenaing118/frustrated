import React from "react";

import { Link } from "react-router-dom";
import Breadcrumbs, { BreadcrumbItem } from "./../../components/Breadcrumps";

export default function Dramas() {
  return (
    <section>
      <Breadcrumbs>
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <strong>Dramas</strong>
        </BreadcrumbItem>
      </Breadcrumbs>
      <div>Dramas</div>
    </section>
  );
}
