import Popup from "../../assets/popup_icon.png";

export default function IntroPopup({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[999999] pointer-events-none">
      
      {/* Card */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-6 w-[340px] md:w-[380px] text-center pointer-events-auto">
        
        {/* Illustration */}
        <div className="flex justify-center mb-4">
          <img
            src={Popup}
            alt="intro"
            className="w-32 h-32 object-contain"
          />
        </div>

        {/* Title */}
        <h2 className="text-[#3A643B] font-semibold text-lg mb-2">
          Introducing Affiliate Earnings
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">
          Start earning by recommending Amrutam products in your patient routines. <br /><br />
          Get commissions for every successful referral through your unique link or coupon.
        </p>

        {/* Button */}
        <button
          onClick={onClose}
          className="mt-5 w-full bg-[#3A643B] text-white py-2 rounded-xl font-medium hover:bg-[#315531] duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
