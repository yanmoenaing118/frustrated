import React from "react";
import styles from "./Breadcrumps.module.css";

export default function Breadcrumbs({ children }) {
  console.log(children);
  return (
    <div className={styles.Breadcrumbs}>
      <ol>{children}</ol>
    </div>
  );
}

export function BreadcrumbItem({ children }) {
  return (
    <li className={styles.BreadcrumbItem}>
      <span>{children}</span>
      <span className={styles.seperator}>{">"}</span>
    </li>
  );
}
