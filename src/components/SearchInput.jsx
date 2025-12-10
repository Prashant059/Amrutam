import React from "react";

export default function SearchInput({
  placeholder = "Search here",
  icon,
  className = "",
  ...props
}) {
  return (
    <div className={`relative ${className}`}>
      {icon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
          {icon}
        </div>
      )}
      <input
        {...props}
        placeholder={placeholder}
        className={`w-full border border-gray-300 rounded-full px-4 py-2 ${
          icon ? "pl-10" : ""
        } text-sm outline-none`}
      />
    </div>
  );
}
