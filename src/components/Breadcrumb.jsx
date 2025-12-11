import React from "react";
import { useLocation, NavLink } from "react-router-dom";

export default function Breadcrumb() {
  const { pathname } = useLocation();

  // URL -> array
  const paths = pathname.split("/").filter(Boolean);

  // Convert slug → title (e.g., referral-tool → Referral Tool)
  const format = (text) => {
    return text
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  };

  return (
    <div className="text-sm text-gray-500 flex items-center gap-2 mb-4">

      <NavLink to="/" className="hover:text-gray-700">
        Home
      </NavLink>

      {paths.map((p, index) => {
        const fullPath = "/" + paths.slice(0, index + 1).join("/");

        return (
          <React.Fragment key={index}>
            <span className="text-gray-400">›</span>

            {index === paths.length - 1 ? (
              <span className="text-gray-700 font-medium">{format(p)}</span>
            ) : (
              <NavLink
                to={fullPath}
                className="hover:text-gray-700"
              >
                {format(p)}
              </NavLink>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
