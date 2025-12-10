import React from "react";

export default function Tabs() {
  const tabs = ["Today So Far", "Week So Far", "Month So Far", "Custom"];

  return (
    <div className="bg-white shadow-sm rounded-xl p-3">
      <div className="flex justify-around items-center text-gray-600 font-semibold">
        {tabs.map((t, idx) => (
          <div
            key={t}
            className={`cursor-pointer px-4 py-2 rounded-md transition-all ${
              idx === 2
                ? "border-b-2 border-[var(--brand)] text-[var(--brand)]"
                : "hover:text-[var(--brand)]"
            }`}
          >
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}
