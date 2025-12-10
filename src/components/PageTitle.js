import React from "react";

export default function PageTitle({ children, className = "" }) {
  return (
    <h1 className={`text-2xl font-semibold mb-4 ${className}`}>{children}</h1>
  );
}
