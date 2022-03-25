import React from "react";
import AppBar from "./AppBar";

export default function MainLayout({ children }) {
  return (
    <>
      <AppBar />
      {children}
    </>
  );
}
