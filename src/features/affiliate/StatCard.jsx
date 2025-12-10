// import React from "react";

// export default function StatCard({ title, value, Icon, suffix }) {
//   return (
//     <div className="bg-white shadow rounded-xl p-6 flex flex-col gap-2">
//       {/* Title */}
//       <div className="text-sm text-gray-500">{title}</div>

//       {/* Value + Icon + Optional Suffix */}
//       <div className="flex items-center gap-3 mt-1">
//         {Icon && <Icon className="w-6 h-6 text-[var(--brand)]" />}
//         <span className="text-3xl font-bold text-[var(--brand)]">{value}</span>
//         {suffix && <span className="text-xs text-gray-500">{suffix}</span>}
//       </div>
//     </div>
//   );
// }


import React from "react";

export default function StatCard({ title, value, Icon, suffix }) {
  return (
    <div className="bg-white shadow rounded-xl p-6 flex flex-col gap-2">
      {/* Title */}
      <div className="text-sm text-gray-500">{title}</div>

      {/* Icon + Value */}
      <div className="flex items-center gap-2">
        {Icon && (
          <img
            src={Icon}
            alt={title}
            className="w-12 h-12"
          />
        )}
        <span className="text-3xl font-bold text-[var(--brand)]">{value}</span>
        {suffix && <span className="text-xs text-gray-500">{suffix}</span>}
      </div>
    </div>
  );
}
