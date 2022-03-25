import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        padding: "3rem",
        fontSize: "18px",
      }}
    >
      <h1>Home Page</h1>
      <div>
        <ul>
          <li>
            <Link to="/categories/electronic/fan/love">Electronic</Link>
          </li>
          <li>
            <Link to="/dramas/the-king-effection">The King's effection</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
