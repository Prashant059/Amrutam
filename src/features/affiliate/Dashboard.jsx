// import React from "react";
// import StatCard from "./StatCard";
// import ReferralTable from "./ReferralTable";
// import Tabs from "./Tabs";

// // Import SVGs as ReactComponent
// import ClicksIcon from "../../assets/first.png";
// import OrderIcon from "../../assets/second.png";
// import RevenueIcon from "../../assets/third.png";
// import LinkIcon from "../../assets/fourth.png";
// import SearchInput from "../../components/SearchInput.jsx";

// export default function Dashboard() {
//   return (
//     <div className="p-4 sm:p-6 lg:p-10 space-y-6">
//       {/* Tabs */}
//       <Tabs />

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         <StatCard
//           title="Total Coupons Clicks"
//           value="255"
//           Icon={ClicksIcon}
//           suffix="/months"
//         />
//         <StatCard
//           title="Total Orders"
//           value="55"
//           Icon={OrderIcon}
//           suffix="/months"
//         />
//         <StatCard
//           title="Total Revenue"
//           value="5,540"
//           Icon={RevenueIcon}
//           suffix="/months"
//         />
//         <StatCard
//           title="Total Link/Coupon"
//           value="5"
//           Icon={LinkIcon}
//           suffix="/months"
//         />
//       </div>

//       <div className="bg-white shadow rounded-xl p-6">
//         <div className="flex items-center justify-between mb-4 gap-4">
//           {/* Left: H2 + Search + Refresh */}
//           <div className="flex items-center gap-2 flex-1 max-w-md">
//             <h2 className="text-lg font-semibold flex-shrink-0">
//               Referral Overview
//             </h2>

//             <SearchInput
//               placeholder="Search here"
//               className="flex-grow"
//               icon={
//                 <svg
//                   width="16"
//                   height="16"
//                   viewBox="0 0 20 20"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <g clipPath="url(#clip0_60_32615)">
//                     <g clipPath="url(#clip1_60_32615)">
//                       <path
//                         opacity="0.4"
//                         d="M9.1763 16.6807C13.323 16.6807 16.6846 13.3191 16.6846 9.1724C16.6846 5.02566 13.323 1.66406 9.1763 1.66406C5.02956 1.66406 1.66797 5.02566 1.66797 9.1724C1.66797 13.3191 5.02956 16.6807 9.1763 16.6807Z"
//                         fill="#3A643B"
//                       />
//                       <path
//                         d="M18.3267 15.7917C18.0517 15.2833 17.4683 15 16.685 15C16.0933 15 15.585 15.2417 15.285 15.6583C14.985 16.075 14.9183 16.6333 15.1017 17.1917C15.46 18.275 16.085 18.5167 16.4267 18.5583C16.4767 18.5667 16.5267 18.5667 16.585 18.5667C16.9517 18.5667 17.5183 18.4083 18.0683 17.5833C18.51 16.9417 18.5933 16.3 18.3267 15.7917Z"
//                         fill="#3A643B"
//                       />
//                     </g>
//                   </g>
//                   <defs>
//                     <clipPath id="clip0_60_32615">
//                       <rect width="20" height="20" fill="white" />
//                     </clipPath>
//                     <clipPath id="clip1_60_32615">
//                       <rect width="20" height="20" fill="white" />
//                     </clipPath>
//                   </defs>
//                 </svg>
//               }
//             />

//             {/* Refresh Icon */}
//             <button className="p-2 rounded-full hover:bg-gray-100">
//               <svg
//                 width="37"
//                 height="37"
//                 viewBox="0 0 37 37"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <rect
//                   width="37"
//                   height="37"
//                   rx="12"
//                   fill="#2E37A4"
//                   fill-opacity="0.05"
//                 />
//                 <g clip-path="url(#clip0_60_33221)">
//                   <g clip-path="url(#clip1_60_33221)">
//                     <g clip-path="url(#clip2_60_33221)">
//                       <path
//                         d="M25.6574 18.1875C25.1911 18.1875 24.8247 18.5539 24.8247 19.0202C24.8136 20.5746 24.214 22.0291 23.1259 23.1172C22.0267 24.2164 20.5612 24.827 19.0068 24.827C17.4524 24.827 15.9868 24.2164 14.8876 23.1172C14.8543 23.0839 14.8321 23.0506 14.7988 23.0173H15.7203C16.1755 23.0173 16.553 22.6398 16.553 22.1846C16.553 21.7293 16.1755 21.3518 15.7203 21.3518H12.778C12.3228 21.3518 11.9453 21.7293 11.9453 22.1846V25.1268C11.9453 25.582 12.3228 25.9595 12.778 25.9595C13.2333 25.9595 13.6108 25.582 13.6108 25.1268V24.1831C13.6441 24.2164 13.6774 24.2608 13.7107 24.3052C15.1207 25.7153 17.0083 26.5036 19.0068 26.5036C21.0053 26.5036 22.8928 25.7264 24.3028 24.3052C25.7018 22.9062 26.479 21.0299 26.4901 19.0313C26.4901 18.565 26.1126 18.1986 25.6574 18.1875Z"
//                         fill="#28643B"
//                       />
//                       <path
//                         d="M12.333 19.7162C12.7882 19.7162 13.1546 19.3498 13.1657 18.8945C13.1879 17.3734 13.7986 15.9412 14.8644 14.8642C15.9636 13.765 17.4292 13.1543 18.9836 13.1543C20.538 13.1543 22.0036 13.765 23.1028 14.8642C23.1361 14.8975 23.1583 14.9308 23.1916 14.9641H22.2701C21.8149 14.9641 21.4374 15.3416 21.4374 15.7968C21.4374 16.2521 21.8149 16.6295 22.2701 16.6295H25.2124C25.6676 16.6295 26.0451 16.2521 26.0451 15.7968V12.8657C26.0451 12.4104 25.6676 12.0329 25.2124 12.0329C24.7571 12.0329 24.3796 12.4104 24.3796 12.8657V13.8205C24.3463 13.7872 24.313 13.7428 24.2797 13.6984C22.8697 12.2883 20.9821 11.5 18.9836 11.5C16.9851 11.5 15.0976 12.2772 13.6875 13.6984C12.2997 15.0751 11.5225 16.9182 11.5002 18.8723C11.4891 19.3276 11.8555 19.7051 12.3219 19.7162C12.333 19.7162 12.333 19.7162 12.333 19.7162Z"
//                         fill="#28643B"
//                       />
//                     </g>
//                   </g>
//                 </g>
//                 <defs>
//                   <clipPath id="clip0_60_33221">
//                     <rect
//                       width="15"
//                       height="15"
//                       fill="white"
//                       transform="translate(11.5 11.5)"
//                     />
//                   </clipPath>
//                   <clipPath id="clip1_60_33221">
//                     <rect
//                       width="15"
//                       height="15"
//                       fill="white"
//                       transform="translate(11.5 11.5)"
//                     />
//                   </clipPath>
//                   <clipPath id="clip2_60_33221">
//                     <rect
//                       width="15"
//                       height="15"
//                       fill="white"
//                       transform="translate(11.5 11.5)"
//                     />
//                   </clipPath>
//                 </defs>
//               </svg>
//             </button>
//           </div>

//           {/* Right: 2 icons */}
//           <div className="flex items-center gap-2">
//             <button className="p-2 rounded-full hover:bg-gray-100">
//               <svg
//                 width="37"
//                 height="37"
//                 viewBox="0 0 37 37"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <rect
//                   width="37"
//                   height="37"
//                   rx="12"
//                   fill="#2E37A4"
//                   fill-opacity="0.05"
//                 />
//                 <path
//                   fill-rule="evenodd"
//                   clip-rule="evenodd"
//                   d="M25.8204 15.931C25.5781 16.1897 25.18 16.1897 24.9377 15.931L23.328 14.2586V25.3793C23.328 25.7241 23.0511 26 22.7049 26C22.3588 26 22.0819 25.7241 22.0819 25.3793V14.2586L20.4722 15.931C20.2299 16.1897 19.8318 16.1897 19.5895 15.931C19.3472 15.6724 19.3472 15.2586 19.5895 15L22.203 12.2586C22.203 12.2586 22.203 12.2586 22.2203 12.2414L22.2549 12.2069C22.3588 12.0862 22.5146 12.0172 22.6876 12.0172C22.8607 12.0172 23.0165 12.0862 23.1376 12.2069L25.8031 15C26.0627 15.2586 26.0627 15.6724 25.8204 15.931ZM15.7818 25.7414L15.7299 25.7931C15.626 25.9138 15.4702 25.9828 15.2972 25.9828C15.1241 25.9828 14.9683 25.9138 14.8472 25.7931L12.1817 23C11.9394 22.7414 11.9394 22.3276 12.1817 22.069C12.424 21.8103 12.8221 21.8103 13.0644 22.069L14.6741 23.7414V12.6207C14.6741 12.2759 14.951 12 15.2972 12C15.6433 12 15.9202 12.2759 15.9202 12.6207V23.7414L17.5299 22.069C17.7722 21.8103 18.1703 21.8103 18.4126 22.069C18.6549 22.3276 18.6549 22.7414 18.4126 23L15.7818 25.7414Z"
//                   fill="#3A643B"
//                 />
//               </svg>
//             </button>
//             <button className="p-2 rounded-full hover:bg-gray-100">
//               <svg
//                 width="37"
//                 height="37"
//                 viewBox="0 0 37 37"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <rect
//                   width="37"
//                   height="37"
//                   rx="12"
//                   fill="#2E37A4"
//                   fill-opacity="0.05"
//                 />
//                 <path
//                   d="M19.0025 10.75L19.2163 10.7515C22.856 10.7995 26.5025 12.0745 26.5025 13.9998V14.0275C26.5235 14.338 26.4485 14.6612 26.2543 14.9522L26.1868 15.046L24.2008 17.296C24.5308 17.4702 24.7843 17.7609 24.9118 18.1116C25.0394 18.4624 25.0319 18.848 24.8908 19.1935L24.8443 19.2955L24.0943 20.7955C23.979 21.0265 23.806 21.2237 23.5921 21.3683C23.3782 21.5128 23.1306 21.5997 22.8733 21.6205L22.7525 21.625H21.2518V25.375C21.2518 26.1655 20.8918 26.3853 20.1125 26.8727C19.3325 27.3603 19.0805 27.625 18.2525 27.625C17.8741 27.6251 17.5096 27.4822 17.2321 27.2249C16.9546 26.9676 16.7847 26.6149 16.7563 26.2375L16.7525 26.125V20.6395L11.8183 15.046C11.5912 14.759 11.4789 14.3979 11.5033 14.0327L11.5025 13.9998C11.5025 12.0363 15.293 10.75 19.0025 10.75ZM22.4405 17.0538C21.3568 17.3387 20.1635 17.5 19.0025 17.5C17.8408 17.5 16.6475 17.338 15.5638 17.0538L18.2525 20.125V26.125L19.7525 25.375V20.125L22.4405 17.0538ZM23.5025 18.625H23.0278L21.7048 20.1243L22.7525 20.125L23.5025 18.625ZM19.0025 12.25C15.6883 12.25 13.0025 13.4478 13.0025 13.9998C13.0025 14.5525 15.6883 16 19.0025 16C22.316 16 25.0025 14.5525 25.0025 13.9998C25.0025 13.4478 22.316 12.25 19.0025 12.25Z"
//                   fill="#3A643B"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Referral Table */}
//         <ReferralTable />
//       </div>
//     </div>
//   );
// }



import React from "react";
import StatCard from "./StatCard";
import ReferralTable from "./ReferralTable";
import Tabs from "./Tabs";

import ClicksIcon from "../../assets/first.png";
import OrderIcon from "../../assets/second.png";
import RevenueIcon from "../../assets/third.png";
import LinkIcon from "../../assets/fourth.png";
import SearchInput from "../../components/SearchInput.jsx";

export default function Dashboard() {
  return (
    <div className="p-4 sm:p-6 lg:p-10 space-y-6 w-full">
      
      {/* ---------- TABS ---------- */}
      <Tabs />

      {/* ---------- STAT CARDS ---------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Coupons Clicks" value="255" Icon={ClicksIcon} suffix="/months" />
        <StatCard title="Total Orders" value="55" Icon={OrderIcon} suffix="/months" />
        <StatCard title="Total Revenue" value="5,540" Icon={RevenueIcon} suffix="/months" />
        <StatCard title="Total Link/Coupon" value="5" Icon={LinkIcon} suffix="/months" />
      </div>

      {/* ---------- REFERRAL OVERVIEW BOX ---------- */}
      <div className="bg-white shadow rounded-xl p-5 sm:p-6 w-full">
        
        {/* Top Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">

          {/* LEFT SECTION */}
          <div className="flex items-center gap-2 flex-1 min-w-[250px] max-w-md">
            <h2 className="text-lg font-semibold whitespace-nowrap">Referral Overview</h2>

            <SearchInput 
              placeholder="Search here"
              className="flex-grow"
              icon={
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <g clipPath="url(#c1)">
                    <path opacity="0.4" d="M9.1 16.6C13.2 16.6 16.6 13.2 16.6 9.1C16.6 5 13.2 1.6 9.1 1.6C5 1.6 1.6 5 1.6 9.1C1.6 13.2 5 16.6 9.1 16.6Z" fill="#3A643B" />
                    <path d="M18.3 15.7C18 15.2 17.4 15 16.6 15C16 15 15.5 15.2 15.2 15.6C14.9 16.1 14.8 16.6 15 17.1C15.4 18.2 16 18.5 16.4 18.5C16.9 18.5 17.5 18.3 18 17.6C18.5 16.9 18.6 16.3 18.3 15.7Z" fill="#3A643B" />
                  </g>
                  <defs>
                    <clipPath id="c1">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              }
            />

            {/* Refresh Button */}
            <button className="p-2 rounded-full hover:bg-gray-100">
              <svg width="37" height="37" viewBox="0 0 37 37" fill="none">
                <rect width="37" height="37" rx="12" fill="#2E37A4" fillOpacity="0.05" />
                <path d="M25.6 18.1C25.1 18.1 24.8 18.5 24.8 19C24.8 21.3 23.9 23.3 22.3 24.8C20.7 26.3 18.7 27.1 16.5 27.1C12.3 27.1 8.8 23.6 8.8 19.4C8.8 15.2 12.3 11.7 16.5 11.7C19 11.7 21.2 13 22.6 14.8H20.5C20.1 14.8 19.8 15.1 19.8 15.6C19.8 16 20.1 16.3 20.5 16.3H25.1C25.5 16.3 25.8 16 25.8 15.6V11.1C25.8 10.7 25.5 10.4 25.1 10.4C24.7 10.4 24.4 10.7 24.4 11.1V13.4C22.7 11.3 20 10 16.5 10C11.4 10 7.2 14.2 7.2 19.3C7.2 24.4 11.4 28.6 16.5 28.6C21.6 28.6 25.8 24.4 25.8 19.3C25.8 18.7 25.6 18.3 25.1 18.1Z" fill="#28643B" />
              </svg>
            </button>
          </div>

          {/* RIGHT SECTION ICONS */}
          <div className="flex items-center gap-2">

            {/* Filters */}
            <button className="p-2 rounded-full hover:bg-gray-100">
              <svg width="37" height="37" viewBox="0 0 37 37" fill="none">
                <rect width="37" height="37" rx="12" fill="#2E37A4" fillOpacity="0.05" />
                <path d="M25.8 15.9C25.5 16.2 25.1 16.2 24.9 15.9L23.3 14.2V25.3C23.3 25.7 23 26 22.7 26C22.3 26 22.1 25.7 22.1 25.3V14.2L20.5 15.9C20.2 16.2 19.8 16.2 19.6 15.9C19.3 15.6 19.3 15.2 19.6 15L22.2 12.2C22.6 11.8 23.3 11.8 23.7 12.2L26.3 15C26.6 15.2 26.6 15.6 25.8 15.9Z" fill="#3A643B" />
              </svg>
            </button>

            {/* Sorting */}
            <button className="p-2 rounded-full hover:bg-gray-100">
              <svg width="37" height="37" viewBox="0 0 37 37" fill="none">
                <rect width="37" height="37" rx="12" fill="#2E37A4" fillOpacity="0.05" />
                <path d="M18.9 10.7C22.8 10.8 26.5 12.1 26.5 14V14C26.5 14.3 26.4 14.6 26.3 14.9L24.2 17.3C24.8 17.6 25.1 18.2 25 18.9L24.8 19.3L24 20.8C23.6 21.5 23 21.7 22.3 21.7H21.2V25.3C21.2 25.7 21 26 20.6 26H16.4C16 26 15.8 25.7 15.8 25.3V21.7H14.6C13.9 21.7 13.3 21.5 12.9 20.8L12.1 19.3C11.8 18.6 12.1 17.9 12.7 17.3L10.6 14.9C10.4 14.6 10.4 14.3 10.4 14C10.4 12.1 14 10.8 18 10.7H18.9Z" fill="#3A643B" />
              </svg>
            </button>

          </div>
        </div>

        {/* TABLE */}
        <ReferralTable />
      </div>
    </div>
  );
}
