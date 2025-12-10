import React from "react";

const data = [
  {
    name: "Andrea Lawrence",
    date: "10 Oct 2024",
    time: "09:14 PM",
    coupon: "AMR2444",
    commission: "25%",
    clicks: 4,
    orders: 2,
    revenue: 348,
  },
  {
    name: "Smith Jordan",
    date: "10 Oct 2024",
    time: "09:14 PM",
    coupon: "AMR2444",
    commission: "20%",
    clicks: 1,
    orders: 1,
    revenue: 152,
  },
  {
    name: "William Stephen",
    date: "19 Oct 2024",
    time: "04:14 PM",
    coupon: "AMR2444",
    commission: "25%",
    clicks: 4,
    orders: 4,
    revenue: 540,
  },
];

export default function ReferralTable() {
  return (
    <div className="overflow-auto">
      <table className="w-full text-left text-sm min-w-[800px]">
        <thead>
          <tr className="border-b text-gray-500">
            <th className="py-2">S. No</th>
            <th>Product Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Coupon/Link</th>
            <th>Commission</th>
            <th>Clicks</th>
            <th>Orders</th>
            <th>Revenue</th>
          </tr>
        </thead>
        <tbody>
          {data.map((r, i) => (
            <tr key={i} className="border-b text-gray-700 hover:bg-gray-50">
              <td className="py-2">{i + 1}</td>
              <td>{r.name}</td>
              <td>{r.date}</td>
              <td>{r.time}</td>
              <td>{r.coupon}</td>
              <td>{r.commission}</td>
              <td>{r.clicks}</td>
              <td>{r.orders}</td>
              <td>{r.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
