import React from "react";
import Navbar from "../components/navbar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}/
    </>
  );
}

// children refers to the page component inside this route
