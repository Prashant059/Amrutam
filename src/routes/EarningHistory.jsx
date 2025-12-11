import React from "react";
import SearchInput from "../components/SearchInput";
import Breadcrumb from "../components/Breadcrumb";

export default function EarningHistory() {
  const data = [
    {
      id: 1,
      name: "Amrutam Nari Sondarya Malt",
      date: "11 Oct, 2024",
      time: "04:19 PM",
      coupon: "AMAZ2344",
      commission: "15%",
      earning: "INR 120",
      status: "Paid",
    },
    {
      id: 2,
      name: "Amrutam Nari Sondarya Malt",
      date: "10 Oct, 2024",
      time: "05:11 PM",
      coupon: "AMAZ2344",
      commission: "18%",
      earning: "INR 120",
      status: "Paid",
    },
    {
      id: 3,
      name: "Amrutam Nari Sondarya Malt",
      date: "10 Oct, 2024",
      time: "06:19 PM",
      coupon: "AMAZ2344",
      commission: "25%",
      earning: "INR 120",
      status: "Pending",
    },
  ];

  return (
    <div className="p-4 sm:p-6 bg-white rounded-lg shadow-sm">

      <Breadcrumb />

      {/* ---------- HEADER ---------- */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">

        {/* Left Side */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:flex-1">
          
          <h2 className="text-lg font-semibold">Earning History</h2>

          <SearchInput
            placeholder="Search here"
            className="w-full sm:flex-grow"
          />

          {/* Refresh Button */}
          <button className="p-2 rounded-full hover:bg-gray-100 flex-shrink-0">
            🔄
          </button>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-2 justify-end">
          <button className="p-2 rounded-full hover:bg-gray-100">📊</button>
          <button className="p-2 rounded-full hover:bg-gray-100">⚙️</button>
        </div>
      </div>

      {/* ---------- TABLE (Mobile Scrollable) ---------- */}
      <div className="overflow-x-auto">
        <table className="min-w-[800px] w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-sm">
              <th className="p-3 text-left">Product</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Coupon</th>
              <th className="p-3 text-left">Commission</th>
              <th className="p-3 text-left">Earning</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {data.map((row) => (
              <tr
                key={row.id}
                className="border-b hover:bg-gray-50 text-sm"
              >
                <td className="p-3 font-medium">{row.name}</td>
                <td className="p-3">
                  {row.date} <br />
                  <span className="text-xs text-gray-500">{row.time}</span>
                </td>
                <td className="p-3">{row.coupon}</td>
                <td className="p-3">{row.commission}</td>
                <td className="p-3">{row.earning}</td>
                <td
                  className={`p-3 font-semibold ${
                    row.status === "Paid"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                >
                  {row.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
