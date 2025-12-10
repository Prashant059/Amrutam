// import React from "react";
// import Header from "./Header";
// import Sidebar from "./Sidebar";

// export default function Layout({ children }) {
//   return (
//     <div className="w-full h-screen overflow-hidden">
//       <Header />
//       <Sidebar />
//       <main className="pt-20 pl-64 pr-6 h-[calc(100vh-5rem)] overflow-auto scrollbar-hide">
//         {children}
//       </main>
//     </div>
//   );
// }


import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  const [open, setOpen] = useState(true); // 🔥 Sidebar open/close

  return (
    <div className="w-full h-screen overflow-hidden flex">
      <Header />

      {/* SIDEBAR */}
      <Sidebar open={open} setOpen={setOpen} />

      {/* MAIN CONTENT (auto adjust) */}
      <main
        className={`pt-20 pr-6 h-[calc(100vh-5rem)] overflow-auto scrollbar-hide transition-all duration-300
          ${open ? "pl-64" : "pl-6"} 
        `}
      >
        {children}
      </main>
    </div>
  );
}
