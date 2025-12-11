import React from "react";
import StatCard from "./StatCard";
import ClicksIcon from "../../assets/first.png";
import OrderIcon from "../../assets/second.png";
import RevenueIcon from "../../assets/third.png";
import LinkIcon from "../../assets/fourth.png";
import Breadcrumb from "../../components/Breadcrumb";

export default function ProductDetails({ product }) {
  const productData = {
    "Product 1": {
      image: "https://via.placeholder.com/150",
      link: "https://www.amrutam.global/nari-sondarya-malt/",
      code: "AMU7382478",
    },
    "Product 2": {
      image: "https://via.placeholder.com/150",
      link: "https://www.example.com/product2",
      code: "XYZ983479",
    },
  };

  const coupon = "DRLIAM2374";

  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
      <Breadcrumb />
      {/* Product Block */}
      <div className="flex items-center gap-6">
        <img
          src={productData[product].image}
          alt="product"
          className="w-32 h-32 rounded-lg"
        />

        <div className="flex-1 space-y-3">
          {/* Product Link */}
          <div>
            <p className="text-gray-600 font-medium">Product Link</p>
            <div className="flex items-center gap-2">
              <input
                value={productData[product].link}
                readOnly
                className="flex-1 border border-gray-300 rounded-md px-3 py-2"
              />
              <button className="bg-green-700 text-white px-4 py-2 rounded-md">
                Copy
              </button>
            </div>
          </div>

          {/* Product Coupon Code */}
          <div>
            <p className="text-gray-600 font-medium">Product Coupon Code</p>
            <div className="flex items-center gap-2">
              <input
                value={productData[product].code}
                readOnly
                className="flex-1 border border-gray-300 rounded-md px-3 py-2"
              />
              <button className="bg-green-700 text-white px-4 py-2 rounded-md">
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-500">
        Note: Share this Link/Coupon with your patient. For every purchase
        someone makes using your Link/Coupon, you get credit.
      </p>

      {/* STAT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Coupons Clicks"
          value="255"
          Icon={ClicksIcon}
          suffix="/months"
        />
        <StatCard
          title="Total Orders"
          value="55"
          Icon={OrderIcon}
          suffix="/months"
        />
        <StatCard
          title="Total Revenue"
          value="5,540"
          Icon={RevenueIcon}
          suffix="/months"
        />
        <StatCard
          title="Total Link/Coupon"
          value="5"
          Icon={LinkIcon}
          suffix="/months"
        />
      </div>

      {/* Cart Discount */}
      <div>
        <h2 className="text-gray-700 font-semibold text-lg">Cart Discount</h2>

        <div className="flex items-center gap-2 mt-2">
          <input
            value={coupon}
            readOnly
            className="flex-1 border border-gray-300 rounded-md px-3 py-2 bg-gray-100"
          />
          <button className="bg-green-700 text-white px-4 py-2 rounded-md">
            Copy
          </button>
        </div>

        <p className="text-sm text-gray-500">
          Note: Share this link/coupon with your patient. For every purchase you
          get credit.
        </p>
      </div>
    </div>
  );
}
