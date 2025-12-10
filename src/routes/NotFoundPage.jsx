import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="p-6 flex items-center justify-center h-[70vh]">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <p className="mb-4">Page not found</p>
        <Link
          to="/dashboard"
          className="inline-block bg-[var(--brand)] text-white px-4 py-2 rounded-lg"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
