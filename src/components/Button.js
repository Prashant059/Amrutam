import React from "react";

export default function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`bg-[var(--brand)] text-white px-4 py-2 rounded-lg ${className}`}
    >
      {children}
    </button>
  );
}
