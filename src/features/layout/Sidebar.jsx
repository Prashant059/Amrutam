import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserInjured,
  FaCalendarAlt,
  FaComments,
  FaStethoscope,
  FaWallet,
  FaUserFriends,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

export default function Sidebar({ open, setOpen }) {
  const [walletOpen, setWalletOpen] = useState(false);
  const [affiliateOpen, setAffiliateOpen] = useState(false);

  const items = [
    { label: "Dashboard", to: "/dashboard", icon: <FaTachometerAlt /> },
    { label: "Patients", to: "/patients", icon: <FaUserInjured /> },
    { label: "Doctor Schedule", to: "/earnings", icon: <FaCalendarAlt /> },
    { label: "Appointments", to: "#", icon: <FaCalendarAlt /> },
    { label: "Chat", to: "#", icon: <FaComments /> },
    { label: "Consultation", to: "#", icon: <FaStethoscope /> },
  ];

  return (
    <aside
      className={`
        fixed top-16 left-0 h-[calc(100vh-64px)] bg-white shadow-md z-30
        transition-all duration-300 overflow-hidden
        ${open ? "w-64 p-6" : "w-0 p-0"}
      `}
    >
      {/* CONTENT ONLY WHEN OPEN */}
      {open && (
        <>
          <div className="text-sm font-bold text-gray-500 mb-4">MAIN</div>

          <nav className="space-y-2">
            {items.map((i) => (
              <NavLink
                key={i.label}
                to={i.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 text-gray-700 py-2 px-3 rounded-lg hover:bg-green-50 font-medium ${
                    isActive ? "bg-green-50 text-[var(--brand)]" : ""
                  }`
                }
              >
                <span className="text-[18px]">{i.icon}</span>
                {i.label}
              </NavLink>
            ))}

            {/* WALLET */}
            <div className="mt-3">
              <button
                onClick={() => setWalletOpen(!walletOpen)}
                className="w-full flex items-center justify-between text-gray-700 py-2 px-3 rounded-lg hover:bg-green-50 font-medium"
              >
                <span className="flex items-center gap-3">
                  <FaWallet className="text-[18px]" />
                  Wallet
                </span>
                {walletOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              {walletOpen && (
                <div className="ml-10 mt-1 space-y-2 text-sm">
                  <NavLink to="#" className="block hover:text-[var(--brand)]">
                    Transactions
                  </NavLink>
                  <NavLink to="#" className="block hover:text-[var(--brand)]">
                    Withdraw
                  </NavLink>
                </div>
              )}
            </div>

            {/* AFFILIATE */}
            <div className="mt-2">
              <button
                onClick={() => setAffiliateOpen(!affiliateOpen)}
                className="w-full flex items-center justify-between text-gray-700 py-2 px-3 rounded-lg hover:bg-green-50 font-medium"
              >
                <span className="flex items-center gap-3">
                  <FaUserFriends className="text-[18px]}" />
                  Affiliate
                </span>
                {affiliateOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              {affiliateOpen && (
                <div className="ml-10 mt-1 space-y-2 text-sm">
                  <NavLink to="/affiliate-dashboard" className="block hover:text-[var(--brand)]">
                    Dashboard
                  </NavLink>
                  <NavLink to="/affiliate-referral" className="block hover:text-[var(--brand)]">
                    Referral Tool
                  </NavLink>
                  <NavLink to="/affiliate-earnings" className="block hover:text-[var(--brand)]">
                    Earnings History
                  </NavLink>
                </div>
              )}
            </div>
          </nav>
        </>
      )}

      {/* --------------------------------------------------------- */}
      {/* 🔥 ARROWS ONLY ON MOBILE (hidden on desktop) */}
      {/* --------------------------------------------------------- */}

      {/* INSIDE ARROW — visible only when sidebar OPEN */}
      {open && (
        <button
          onClick={() => setOpen(false)}
          className="
            md:hidden                 /* mobile only */
            absolute top-1/2 -right-4 transform -translate-y-1/2
            bg-black text-white p-2 rounded-full shadow-lg
          "
        >
          ←
        </button>
      )}

      {/* OUTSIDE ARROW — visible only when CLOSED */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="
            md:hidden                 /* mobile only */
            absolute top-1/2 right-0 transform -translate-y-1/2
            bg-black text-white p-2 rounded-r-full shadow-lg
          "
        >
          →
        </button>
      )}
    </aside>
  );
}
