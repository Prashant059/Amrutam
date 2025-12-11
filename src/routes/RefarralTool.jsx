import React, { useState } from "react";
import ProductDetails from "../features/affiliate/ProductDetails.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";

export default function ReferralTool() {
  const [product, setProduct] = useState("");
  const [coupon] = useState("DRLIAM2374");
  const [showDetails, setShowDetails] = useState(false);
  
  const handleGet = () => {
    if (product) setShowDetails(true);
  };

  if (showDetails) {
    return <ProductDetails product={product} />;
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 space-y-6">

      <Breadcrumb />

      {/* ---------- PRODUCT LINK / COUPON BOX ---------- */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-gray-700 font-semibold text-lg">
          Product Link/Coupon
        </h2>

        <select
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        >
          <option value="">Enter the name of Product</option>
          <option value="Product 1">Product 1</option>
          <option value="Product 2">Product 2</option>
        </select>

        <button onClick={handleGet} className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800">
          Get
        </button>
      </div>

      {/* ---------- CART DISCOUNT BOX ---------- */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-gray-700 font-semibold text-lg">
          Cart Discount
        </h2>

        <input
          type="text"
          value={coupon}
          readOnly
          className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-700"
        />

        <button className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800">
          Copy
        </button>

        <p className="text-sm text-gray-500">
          Note: Share this link/coupon with your patient. For every purchase someone makes using your link/coupon, you get credit.
        </p>
      </div>
      
    </div>
  );
}
