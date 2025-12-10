// import React, { useState } from "react";

// export default function ReferralTool() {
//   const [product, setProduct] = useState("");
//   const [coupon, setCoupon] = useState("DRLIAM2374");

//   const handleGetClick = () => {
//     if (product) {
//       alert(`Product selected: ${product}`);
//     } else {
//       alert("Please select a product!");
//     }
//   };

//   const handleCopyClick = () => {
//     navigator.clipboard.writeText(coupon);
//     alert("Coupon copied!");
//   };

//   return (
//     <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md space-y-4">
      
//       {/* Product Link/Coupon */}
//       <div className="space-y-2">
//         <h2 className="text-gray-700 font-semibold text-lg">
//           Product Link/Coupon
//         </h2>

//         <select
//           value={product}
//           onChange={(e) => setProduct(e.target.value)}
//           className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//         >
//           <option value="">Enter the name of Product</option>
//           <option value="Product 1">Product 1</option>
//           <option value="Product 2">Product 2</option>
//           <option value="Product 3">Product 3</option>
//         </select>

//         <button
//           onClick={handleGetClick}
//           className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800"
//         >
//           Get
//         </button>
//       </div>

//       {/* Cart Discount */}
//       <div className="space-y-2">
//         <h2 className="text-gray-700 font-semibold text-lg">Cart Discount</h2>

//         <input
//           type="text"
//           value={coupon}
//           readOnly
//           className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-700"
//         />

//         <button
//           onClick={handleCopyClick}
//           className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800"
//         >
//           Copy
//         </button>

//         <p className="text-sm text-gray-500 mt-1">
//           Note: Share this Link/Coupon with your patient. For every purchase someone makes using your Link/Coupon, you get credit.
//         </p>
//       </div>

//     </div>
//   );
// }


import React, { useState } from "react";

export default function ReferralTool() {
  const [product, setProduct] = useState("");
  const [coupon] = useState("DRLIAM2374");

  return (
    <div className="max-w-3xl mx-auto mt-10 space-y-6">

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

        <button className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800">
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
